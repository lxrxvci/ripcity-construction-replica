/**
 * FAQ extractor: pulls question/answer pairs out of a post's html for
 * FAQPage JSON-LD.
 *
 * Why it exists: posts with an <h2>FAQ</h2> section qualify for FAQ
 * structured data; the section is a content convention, so parsing lives
 * in one tested place rather than inside the route.
 * How it works: finds the h2 whose text is exactly "FAQ"
 * (case-insensitive), reads each following h3 as a question and its <p>
 * siblings as the answer, and stops at the next h2. Covered by
 * faq.test.ts (`node --test src/lib/faq.test.ts`).
 * How to change it: keep it dependency-free over the clean-html contract
 * enforced in lib/posts.ts; update faq.test.ts in the same change.
 */

export interface FaqEntry {
  question: string;
  answerHtml: string;
}

const H2_PATTERN = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
const H3_PATTERN = /<h3\b[^>]*>([\s\S]*?)<\/h3>/gi;
const P_PATTERN = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
const TAG_PATTERN = /<[^>]*>/g;

function textContent(html: string): string {
  return html.replace(TAG_PATTERN, "").replace(/\s+/g, " ").trim();
}

export function parseFaqEntries(html: string): FaqEntry[] {
  const headings = [...html.matchAll(H2_PATTERN)];
  const faqHeading = headings.find(
    (match) => textContent(match[1]).toLowerCase() === "faq"
  );
  if (!faqHeading || faqHeading.index === undefined) {
    return [];
  }

  const sectionStart = faqHeading.index + faqHeading[0].length;
  const nextHeading = headings.find(
    (match) => match.index !== undefined && match.index >= sectionStart
  );
  const sectionEnd =
    nextHeading && nextHeading.index !== undefined
      ? nextHeading.index
      : html.length;
  const section = html.slice(sectionStart, sectionEnd);

  const questions = [...section.matchAll(H3_PATTERN)];
  const entries: FaqEntry[] = [];

  for (let i = 0; i < questions.length; i++) {
    const question = textContent(questions[i][1]);
    const answerStart = (questions[i].index ?? 0) + questions[i][0].length;
    const answerEnd =
      i + 1 < questions.length ? (questions[i + 1].index ?? section.length) : section.length;
    const answerSlice = section.slice(answerStart, answerEnd);

    const paragraphs = [...answerSlice.matchAll(P_PATTERN)].map(
      (match) => `<p>${match[1].trim()}</p>`
    );
    const answerHtml = paragraphs.join("");

    if (question && answerHtml) {
      entries.push({ question, answerHtml });
    }
  }

  return entries;
}
