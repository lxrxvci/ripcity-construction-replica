/**
 * Tests for the FAQ extractor in lib/faq.ts.
 *
 * Why it exists: the FAQPage schema is only as honest as this parser; the
 * section-marker convention (exact "FAQ" h2, h3 questions, p answers,
 * next-h2 boundary) is pinned down here.
 * How it works: node:test + node:assert against parseFaqEntries; run with
 * `node --test src/lib/faq.test.ts` (type stripping, no dependencies).
 * How to change it: extend alongside lib/faq.ts whenever the parsing
 * rules change.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseFaqEntries } from "./faq.ts";

describe("parseFaqEntries", () => {
  it("returns an empty array when there is no FAQ section", () => {
    const html = "<p>Intro</p><h2>Details</h2><p>Body</p>";
    assert.deepEqual(parseFaqEntries(html), []);
  });

  it("returns an empty array for empty input", () => {
    assert.deepEqual(parseFaqEntries(""), []);
  });

  it("extracts questions and answers from an FAQ section", () => {
    const html =
      "<p>Intro</p>" +
      "<h2>FAQ</h2>" +
      "<h3>Do I need a permit?</h3>" +
      "<p>Yes. Permits matter.</p>" +
      "<h3>How long does it take?</h3>" +
      "<p>Eight weeks.</p><p>Sometimes longer.</p>";
    assert.deepEqual(parseFaqEntries(html), [
      { question: "Do I need a permit?", answerHtml: "<p>Yes. Permits matter.</p>" },
      {
        question: "How long does it take?",
        answerHtml: "<p>Eight weeks.</p><p>Sometimes longer.</p>",
      },
    ]);
  });

  it("stops collecting answers at the next h2", () => {
    const html =
      "<h2>FAQ</h2>" +
      "<h3>Question one?</h3>" +
      "<p>Answer one.</p>" +
      "<h2>Related Reading</h2>" +
      "<h3>Not a question</h3>" +
      "<p>Not an answer.</p>";
    assert.deepEqual(parseFaqEntries(html), [
      { question: "Question one?", answerHtml: "<p>Answer one.</p>" },
    ]);
  });

  it("matches the FAQ heading case-insensitively", () => {
    const html = "<h2>faq</h2><h3>Q?</h3><p>A.</p>";
    assert.equal(parseFaqEntries(html).length, 1);
  });

  it("ignores h2 headings that merely contain the word faq", () => {
    const html = "<h2>FAQ About Nothing</h2><h3>Q?</h3><p>A.</p>";
    assert.deepEqual(parseFaqEntries(html), []);
  });

  it("skips questions that have no answer paragraph", () => {
    const html =
      "<h2>FAQ</h2>" +
      "<h3>Answered?</h3><p>Yes.</p>" +
      "<h3>Unanswered?</h3>";
    assert.deepEqual(parseFaqEntries(html), [
      { question: "Answered?", answerHtml: "<p>Yes.</p>" },
    ]);
  });

  it("strips markup from questions but keeps answer HTML", () => {
    const html =
      "<h2>FAQ</h2>" +
      "<h3>Costs for a <em>basement</em>?</h3>" +
      '<p>See <a href="/basements">basement remodeling</a>.</p>';
    assert.deepEqual(parseFaqEntries(html), [
      {
        question: "Costs for a basement?",
        answerHtml: '<p>See <a href="/basements">basement remodeling</a>.</p>',
      },
    ]);
  });
});
