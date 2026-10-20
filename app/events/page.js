'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/gallery?centre=sector-105&theme=events');
  }, [router]);

  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-veda-background-soft px-4">
      <p className="font-poppins text-sm text-veda-text-muted sm:text-base">
        Opening the events gallery…
      </p>
    </main>
  );
}
