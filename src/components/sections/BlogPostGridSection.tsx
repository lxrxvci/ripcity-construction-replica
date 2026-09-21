import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { formatPostDate, type Post } from "@/lib/posts";

interface BlogPostGridSectionProps {
  posts: Post[];
  className?: string;
}

export function BlogPostGridSection({ posts, className }: BlogPostGridSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
              New Articles Are on the Way
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
              We are writing up lessons from current projects. In the meantime, our project
              gallery and service pages show the work we do across Portland.
            </p>
            <div className="flex justify-center">
              <Button href="/portland-remodeling-projects" size="lg">
                View Our Projects
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden bg-white shadow-sm"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.cover ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={post.cover}
                        alt={post.coverAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-foreground p-8 text-center">
                      <span className="font-heading text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
                        {post.tags[0] ?? "Job Site Notes"}
                      </span>
                      <span className="font-heading text-xl font-bold leading-snug text-background lg:text-2xl">
                        {post.title}
                      </span>
                    </div>
                  )}
                </Link>
                <div className="flex flex-1 flex-col space-y-4 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-foreground/60">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-bold leading-tight lg:text-xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {post.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
                    >
                      Read the Article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
