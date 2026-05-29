import { useState, useEffect } from 'react';
import { TIMING } from '../constants/design';

export function useMountDelay(delay: number = TIMING.mountDelay): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return mounted;
}
