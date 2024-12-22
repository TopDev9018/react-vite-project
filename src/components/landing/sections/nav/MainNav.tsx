import { NavLink } from './NavLink';

export function MainNav() {
  return (
    <div className="hidden md:flex items-center gap-6">
      <NavLink href="/solutions">Solutions</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </div>
  );
}