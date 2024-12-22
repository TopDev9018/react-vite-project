interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-blue-100">
        {subtitle}
      </p>
    </div>
  );
}