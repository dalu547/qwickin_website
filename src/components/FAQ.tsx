import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How fast can we launch Qwickin in a new region?",
    answer:
      "Most teams go live in 2 to 3 weeks depending on staffing volume and housing needs.",
    value: "item-1",
  },
  {
    question: "Do you verify jobs and accommodations?",
    answer:
      "Yes. We validate employer requirements, background checks, and housing standards before launch.",
    value: "item-2",
  },
  {
    question: "Can we manage multiple locations and teams?",
    answer:
      "Qwickin supports multi-region operations with role-based permissions and consolidated reporting.",
    value: "item-3",
  },
  {
    question: "How do ads and local promotions work?",
    answer:
      "Create hyper-local campaigns, track results, and automatically boost openings that need attention.",
    value: "item-4",
  },
  {
    question: "Is Qwickin built for compliance?",
    answer:
      "Yes. We include documentation workflows, audit trails, and region-specific controls.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#cta"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
