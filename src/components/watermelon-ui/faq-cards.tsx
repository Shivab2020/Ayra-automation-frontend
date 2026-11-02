import { MessageCircle, ShieldCheck } from "lucide-react";
import { Plus } from "lucide-react";

type FaqItem = { question: string; answer: string };

/** Adapted from Watermelon UI FAQ 6 (MIT): https://ui.watermelon.sh/block/faq-6 */
export default function FaqCards({ items }: { items: FaqItem[] }) {
  return (
    <section
      id="questions"
      className="section questions-section watermelon-faq"
      aria-labelledby="questions-title"
    >
      <div className="section-heading">
        <h2 id="questions-title">
          Clear Answers
          <br />
          <em>About The Work.</em>
        </h2>
        <p>
          How Ayra works, when your team reviews changes, and what depends on
          your site's connections.
        </p>
      </div>
      <div className="answers-layout"><aside className="answers-visual" aria-label="Review stays with your team"><div className="answer-symbol"><MessageCircle size={68} strokeWidth={1}/><ShieldCheck size={36} strokeWidth={1.4}/></div><h3>You Have The Final Say.</h3><p>Review the proposal. Understand the connection. Decide what moves ahead.</p><a href="/help">Read The Documentation <span aria-hidden="true">→</span></a></aside><div className="faq-card-grid">
        {items.map(({ question, answer }) => (
          <details className="faq-card" key={question}>
            <summary>
              <span>{question}</span>
              <Plus size={18} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div></div>
    </section>
  );
}
