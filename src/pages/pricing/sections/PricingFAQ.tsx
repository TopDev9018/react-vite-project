import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { MovingClouds } from '../components/MovingClouds';
import { SeaBoats } from '../components/SeaBoats';

const FAQ_ITEMS = [
  {
    question: "What is included in the free trial?",
    answer: "The 14-day free trial includes full access to all features in your selected plan. You can test the AI voice agents, create custom knowledge bases, and integrate with your existing systems."
  },
  {
    question: "How are minutes calculated?",
    answer: "Minutes are calculated based on actual conversation time with your AI agents. We only charge for active conversation time, not for setup or idle time."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, our Enterprise plan offers custom solutions tailored to your specific needs, including dedicated support, custom voice models, and advanced security features."
  }
];

export function PricingFAQ() {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <MovingClouds />
      <SeaBoats />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Find answers to common questions about our pricing and plans.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={`faq-${index}`}
                value={`item-${index}`} 
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 text-white hover:text-cyan-400 data-[state=open]:text-cyan-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}