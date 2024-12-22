import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Customer Service Manager",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    content: "The AI voice agents have transformed our customer service operations. We're now able to handle 3x more inquiries while maintaining high satisfaction rates."
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Retail Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
    content: "Implementing these AI agents has reduced our response times by 75% and significantly improved our customer satisfaction scores."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Support",
    company: "HealthCare Plus",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120",
    content: "Our patients love the convenience of 24/7 support, and our staff can focus on more complex cases. It's a win-win situation."
  }
];

export function Testimonials() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by industry leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            See how businesses are transforming their operations with our AI voice agents.
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="relative bg-zinc-900 px-6 py-8 rounded-2xl">
                <blockquote>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-500">{testimonial.company}</div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}