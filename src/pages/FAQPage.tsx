import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from '@/components/layout/Footer';
import { PricingHeader } from '@/pages/pricing/components/PricingHeader';
import { WavesBackground } from '@/pages/pricing/components/WavesBackground';
import { MovingClouds } from '@/pages/pricing/components/MovingClouds';
import { SwimmingRobots } from '@/pages/pricing/components/SwimmingRobots';

const faqs = [
  {
    question: "What is seaside.ai?",
    answer: "seaside.ai is a platform that provides AI-powered voice agents for businesses. Our technology enables natural, human-like conversations to handle customer service, appointments, and other business operations 24/7."
  },
  {
    question: "How does the voice AI technology work?",
    answer: "Our AI voice agents use advanced natural language processing and machine learning to understand and respond to customer inquiries. They can be trained on your business knowledge and integrate with your existing systems."
  },
  {
    question: "Is it difficult to set up?",
    answer: "Not at all! We've designed our platform to be user-friendly. You can get started with pre-built templates or create custom agents. Our team provides support throughout the setup process."
  },
  {
    question: "What kind of businesses can use seaside.ai?",
    answer: "seaside.ai is suitable for businesses of all sizes across various industries, including healthcare, real estate, hospitality, retail, and more. Our solutions are customizable to meet your specific needs."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing plans starting at $99/month. The cost depends on factors like the number of agents, minutes used, and features needed. Contact our sales team for detailed pricing."
  }
];

export function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <PricingHeader />
      
      <main className="relative pt-32 pb-24">
        {/* Background Effects */}
        <WavesBackground />
        <MovingClouds />
        <SwimmingRobots />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Find answers to common questions about seaside.ai
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-zinc-900 rounded-lg border border-zinc-800 data-[state=open]:border-cyan-500/50 data-[state=open]:bg-cyan-500/10"
                >
                  <AccordionTrigger className="px-6 text-white hover:text-cyan-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-blue-100">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}