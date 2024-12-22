import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' }
  ]
};

export function FooterNav() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      <div>
        <h3 className="text-sm font-semibold text-cyan-400">Company</h3>
        <ul className="mt-4 space-y-3">
          {navigation.company.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href} 
                className={cn(
                  "text-sm text-blue-100 relative group",
                  "transition-colors duration-300",
                  "hover:text-cyan-300"
                )}
              >
                <span className="relative">
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 w-0 h-0.5",
                    "bg-gradient-to-r from-cyan-500 to-blue-500",
                    "transition-all duration-300",
                    "group-hover:w-full"
                  )} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-cyan-400">Legal</h3>
        <ul className="mt-4 space-y-3">
          {navigation.legal.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href} 
                className={cn(
                  "text-sm text-blue-100 relative group",
                  "transition-colors duration-300",
                  "hover:text-cyan-300"
                )}
              >
                <span className="relative">
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 w-0 h-0.5",
                    "bg-gradient-to-r from-cyan-500 to-blue-500",
                    "transition-all duration-300",
                    "group-hover:w-full"
                  )} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-cyan-400">Connect</h3>
        <ul className="mt-4 space-y-3">
          {navigation.social.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className={cn(
                  "text-sm text-blue-100 relative group",
                  "transition-colors duration-300",
                  "hover:text-cyan-300"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative">
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 w-0 h-0.5",
                    "bg-gradient-to-r from-cyan-500 to-blue-500",
                    "transition-all duration-300",
                    "group-hover:w-full"
                  )} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}