interface GeneratePositionsOptions {
  minLeft?: number;
  maxLeft?: number;
  minTop?: number;
  maxTop?: number;
  generateValue?: () => number | string;
}

export function generateRandomPositions(count: number, options: GeneratePositionsOptions = {}) {
  const {
    minLeft = 20,
    maxLeft = 80,
    minTop = 40,
    maxTop = 80,
    generateValue
  } = options;

  return Array.from({ length: count }, (_, i) => ({
    id: `particle-${i}`,
    left: minLeft + Math.random() * (maxLeft - minLeft),
    top: minTop + Math.random() * (maxTop - minTop),
    ...(generateValue ? { value: generateValue() } : {})
  }));
}