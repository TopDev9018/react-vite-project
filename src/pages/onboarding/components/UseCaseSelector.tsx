import { USE_CASES, UseCaseId } from '../constants/use-cases';
import { UseCaseOption } from './UseCaseOption';

interface UseCaseSelectorProps {
  value: UseCaseId[];
  onChange: (value: UseCaseId[]) => void;
}

export function UseCaseSelector({ value, onChange }: UseCaseSelectorProps) {
  const toggleUseCase = (id: UseCaseId) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {USE_CASES.map((useCase) => (
        <UseCaseOption
          key={useCase.id}
          {...useCase}
          isSelected={value.includes(useCase.id)}
          onSelect={() => toggleUseCase(useCase.id)}
        />
      ))}
    </div>
  );
}