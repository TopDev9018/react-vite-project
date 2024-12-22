interface StepHeaderProps {
  title: string;
  subtitle?: string;
}

export function StepHeader({ title, subtitle }: StepHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-400 text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}