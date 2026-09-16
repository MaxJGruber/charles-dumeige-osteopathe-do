import { FAQ } from "helpers/faq";

// Native <details> rather than a JS accordion: the answers stay in the markup
// and stay expandable with JS disabled, which is what makes them quotable by
// search engines and AI answer engines.
const Faq = () => (
  <section id="faq" className="bg-white py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Questions fréquentes
        </h2>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Ce que les patients demandent le plus souvent avant une première
          séance.
        </p>
      </div>

      <div className="mt-12 max-w-4xl">
        {FAQ.map((item) => (
          <details
            key={item.question}
            className="group border-t border-rule last:border-b"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink transition-colors hover:text-teal [&::-webkit-details-marker]:hidden">
              <h3 className="font-medium">{item.question}</h3>
              {/* Rotates to a minus when the answer is open. */}
              <span
                aria-hidden="true"
                className="relative h-5 w-5 shrink-0 text-teal"
              >
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-current" />
                <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded bg-current transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 leading-relaxed text-ink-soft">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
