import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('should merge tailwind classes correctly', () => {
    expect(cn('bg-red-500', 'p-4')).toBe('bg-red-500 p-4');
    expect(cn('px-2', 'px-4')).toBe('px-4'); // twMerge logic
  });

  it('should handle conditional classes', () => {
    const isBlue = true;
    const isHidden = false;
    expect(cn('p-4', isBlue && 'bg-blue-500', isHidden && 'hidden')).toBe('p-4 bg-blue-500');
  });
});
