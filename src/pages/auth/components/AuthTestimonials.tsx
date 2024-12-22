import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

const TESTIMONIALS = [
  {
    content: "The AI voice agents have transformed our customer service. We're now handling 3x more inquiries while maintaining high satisfaction rates.",
    author: {
      name: "Sarah Thompson",
      role: "Customer Service Manager",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    }
  },
  {
    content: "Implementing these AI agents has reduced our response times by 75% and significantly improved our customer satisfaction scores.",
    author: {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Retail Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
    }
  },
  {
    content: "Our patients love the convenience of 24/7 support, and our staff can focus on more complex cases. It's a win-win situation.",
    author: {
      name: "Emily Rodriguez",
      role: "Head of Support",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    }
  }
];

export function AuthTestimonials() {
  return (
    <div className="relative h-full flex items-center bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating robots */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Bot className="w-8 h-8 text-cyan-400/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
            Trusted by industry leaders
          </h2>
          
          <div className="space-y-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm px-6 py-8 rounded-2xl border border-white/10"
              >
                <blockquote>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                      <AvatarFallback>{testimonial.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author.name}</div>
                      <div className="text-sm text-blue-200">{testimonial.author.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.author.company}</div>
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