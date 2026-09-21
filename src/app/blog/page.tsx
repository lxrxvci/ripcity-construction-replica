import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, Footer } from "@/components/Footer";
import { BlogHeroSection } from "@/components/sections/BlogHeroSection";
import { BlogPostGridSection } from "@/components/sections/BlogPostGridSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  createBlogCollectionPageSchema,
  createBlogSchema,
  createJsonLdGraph,
  createMetadata,
} from "@/lib/seo";
import { PAGE_DESCRIPTIONS, SITE } from "@/lib/company";
import { allPosts } from "@/lib/posts";
import blogCopy from "@/content/blog.json";

const path = "/blog";

export const metadata: Metadata = createMetadata({
  title: blogCopy.heading,
  description: PAGE_DESCRIPTIONS.blog,
  path,
});

export default function BlogPage() {
  const posts = allPosts();

  const jsonLd = createJsonLdGraph([
    createBlogCollectionPageSchema({
      path,
      title: blogCopy.heading,
      description: PAGE_DESCRIPTIONS.blog,
      postUrls: posts.map((post) => `${SITE.url}/blog/${post.slug}`),
    }),
    createBlogSchema({ name: blogCopy.heading, description: PAGE_DESCRIPTIONS.blog }),
  ]);

  return (
    <>
      <Header variant="dark" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <main>
        <JsonLd schema={jsonLd} />
        <BlogHeroSection heading={blogCopy.heading} support={blogCopy.support} />
        <BlogPostGridSection posts={posts} />
      </main>
      <CtaFooter />
      <Footer />
    </>
  );
}
