/**
 * /blog index route: heading + support copy, post card grid, empty state.
 *
 * Why it exists: the blog landing page; posts render newest-first from
 * the posts.json data layer (lib/posts.ts).
 * How it works: createMetadata + CollectionPage/Blog JSON-LD, then
 * BlogHeroSection and BlogPostGridSection between the global chrome.
 * Index copy comes from src/content/blog.json and is engine-managed: no
 * data-cms stamps, per the blog publish contract.
 * How to change it: index copy in src/content/blog.json ({heading,
 * support} only); card design in BlogPostGridSection; new posts are data
 * appends to src/content/posts.json, never edits here.
 */
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
