"use client";

import { FormEvent, useState } from "react";

export default function AIHelperForm() {
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiIsThinking, setAiIsThinking] = useState(false);

  const handleAiSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setAiIsThinking(true);

    const q = aiQuestion.toLowerCase();
    let answer =
      "A quick call or campus visit will help us suggest the best program. Share your child's age and timings, and our team will guide you.";

    if (q.includes("playgroup") || q.includes("2 ")) {
      answer =
        "For a 2-year-old, Playgroup with short, gentle hours works best. You can gradually extend timings or add daycare as your child settles and if you are a working parent.";
    } else if (q.includes("nursery") || q.includes("3 ")) {
      answer =
        "For age 3, the Nursery program is ideal. It focuses on early language, number sense and social skills. Many parents combine morning Nursery with daycare support in the afternoon.";
    } else if (q.includes("kg") || q.includes("4 ") || q.includes("5 ")) {
      answer =
        "For ages 4–5, Kindergarten prepares your child for Grade 1 with structured literacy and numeracy. Adding at least one activity, like Taekwondo or Phonics, is a great advantage.";
    } else if (q.includes("daycare") || q.includes("after school")) {
      answer =
        "Daycare is suitable if you need support after school hours. You can choose flexible timings and pair it with an activity such as Chess, Dance or Music so your child learns while you manage work.";
    } else if (q.includes("fee") || q.includes("fees") || q.includes("charges")) {
      answer =
        "Fee structures depend on the program and timings. The best next step is to call 7205502915 or fill the enquiry form so we can share exact details for your child's age and schedule.";
    }

    window.setTimeout(() => {
      setAiAnswer(answer);
      setAiIsThinking(false);
    }, 400);
  };

  return (
    <div className="ai-helper-card" data-animate>
      <div className="ai-helper-header">
        <span className="ai-chip">Smart Helper</span>
        <h3>IndiBot – Admissions Helper</h3>
        <p>
          Ask a quick question about age, program choice or daycare plus
          activity combinations. IndiBot will suggest a starting point.
        </p>
      </div>

      <form className="ai-helper-form" onSubmit={handleAiSubmit}>
        <label className="ai-label">
          Your question
          <textarea
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
            placeholder="Example: My child is 3 years old and I work till evening. Which program is suitable?"
            required
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={aiIsThinking}
        >
          {aiIsThinking ? "Thinking…" : "Get suggestion"}
        </button>
      </form>

      {aiAnswer && (
        <div className="ai-answer">
          <strong>IndiBot suggests:</strong>
          <p>{aiAnswer}</p>
          <p className="ai-disclaimer">
            This is a general suggestion. Final program and timings will be
            confirmed by our admissions team based on your child and
            availability.
          </p>
        </div>
      )}
    </div>
  );
}





