"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

import styles from "./SocialMediaLanding.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

export function SocialMediaFaq({ items }: { items: readonly FaqItem[] }) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 max-w-[900px] divide-y divide-[#050505]/15 border-y border-[#050505]/15">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${id}-question-${index}`;
        const panelId = `${id}-answer-${index}`;

        return (
          <div key={item.question} className="py-5">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-11 w-full items-center justify-between gap-5 text-left text-[17px] font-semibold leading-[1.5] transition-colors hover:text-[#17372B] focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17372B]"
              >
                {item.question}
                <Plus
                  aria-hidden
                  className={`${styles.faqIcon} h-5 w-5 shrink-0 text-[#F76D2B]`}
                  data-open={open}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              inert={!open}
              data-open={open}
              className={styles.faqPanel}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[760px] pt-4 text-[15px] leading-[1.7] text-[#050505]/75">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
