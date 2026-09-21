/**
 * Blog article section: masthead (date, tags, h1), optional cover, and
 * the post's html body.
 *
 * Why it exists: the rendered article on /blog/[slug].
 * How it works: dark masthead band keeps the absolute overlay header
 * readable; the body is post.html (clean semantic HTML per the contract
 * in lib/posts.ts) injected into a wrapper whose arbitrary-variant
 * classes style p/h2/h3/ul/a/strong descendants, since the stored html
 * carries no classes by design.
 * How to change it: typography and layout here; content never (posts are
 * data in src/content/posts.json). Keep the wrapper classes in sync with
 * the tags the contract allows.
 */
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPostDate, type Post } from "@/lib/posts";

interface BlogPostArticleSectionProps {
  post: Post;
  className?: string;
}

export function BlogPostArticleSection({ post, className }: BlogPostArticleSectionProps) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="bg-foreground">
        <div className="mx-auto max-w-4xl space-y-6 px-6 pb-16 pt-40 lg:px-10 lg:pb-20 lg:pt-48">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-background/60">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.tags.map((tag) => (
              <span key={tag} className="text-accent">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight text-background md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          {post.updated !== post.date && (
            <p className="text-xs uppercase tracking-wider text-background/60">
              Updated <time dateTime={post.updated}>{formatPostDate(post.updated)}</time>
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
        <article>
          {post.cover && (
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          )}

          <div
            className={cn(
              "mt-10 space-y-6 text-sm leading-relaxed text-foreground/80 md:text-base",
              "[&_h2]:pt-6 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-foreground [&_h2]:underline [&_h2]:decoration-2 [&_h2]:underline-offset-4 md:[&_h2]:text-3xl",
              "[&_h3]:pt-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:text-foreground",
              "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
              "[&_a]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:opacity-80",
              "[&_strong]:font-semibold [&_strong]:text-foreground"
            )}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </section>
  );
}
