import { add } from '@jakub007d/addition-v1';

export function multiply(a: number, b: number): number {
  if (b === 0 || a === 0) return 0;
  if (b === 1) return a;
  if (a === 1) return b;
  if (b < 0) return -multiply(a, -b);
  
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = add(result, a);
  }
  return result;
}
