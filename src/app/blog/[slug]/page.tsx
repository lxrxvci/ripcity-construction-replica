import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { BlogPostArticleSection } from "@/components/sections/BlogPostArticleSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  createBlogPostingSchema,
  createFaqPageSchema,
  createJsonLdGraph,
  createMetadata,
  createWebPageSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/company";
import { allPosts, postBySlug } from "@/lib/posts";
import { parseFaqEntries } from "@/lib/faq";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
    ogImage: post.cover ? `${SITE.url}${post.cover}` : SITE.ogImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const faqEntries = parseFaqEntries(post.html);

  const jsonLd = createJsonLdGraph([
    createWebPageSchema({
      path,
      title: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated,
    }),
    createBlogPostingSchema({
      path,
      title: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated,
      image: post.cover ? `${SITE.url}${post.cover}` : SITE.ogImage,
      keywords: post.tags,
    }),
    ...(faqEntries.length > 0 ? [createFaqPageSchema(path, faqEntries)] : []),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <BlogPostArticleSection post={post} />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
