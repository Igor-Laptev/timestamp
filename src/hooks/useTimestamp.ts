'use client';

import { useState, useEffect } from 'react';

export function useTimestamp(initialTimestamp: number) {
  const [clientTimestamp, setClientTimestamp] =
    useState<number>(initialTimestamp);
  const [countdown, setCountdown] = useState<number>(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientTimestamp(Date.now());
      setCountdown(10);
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, []);

  return { clientTimestamp, countdown };
}
