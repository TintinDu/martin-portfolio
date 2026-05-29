import { useEffect } from 'react';

interface UseKeyboardNavOptions {
  length: number;
  active: number;
  onActivate: (index: number) => void;
  onConfirm?: () => void;
  onBack?: () => void;
  disabled?: boolean;
}

export function useKeyboardNav({
  length,
  active,
  onActivate,
  onConfirm,
  onBack,
  disabled = false,
}: UseKeyboardNavOptions): void {
  useEffect(() => {
    if (disabled) return;

    const handleKey = (e: KeyboardEvent): void => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          onActivate(Math.max(0, active - 1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          onActivate(Math.min(length - 1, active + 1));
          break;
        case 'Enter':
          onConfirm?.();
          break;
        case 'ArrowLeft':
        case 'Escape':
        case 'Backspace':
          onBack?.();
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [length, active, onActivate, onConfirm, onBack, disabled]);
}
