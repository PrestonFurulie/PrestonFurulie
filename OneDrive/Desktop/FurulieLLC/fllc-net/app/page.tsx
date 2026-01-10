'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to desktop page
    router.push('/desktop');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-[#00f3ff] font-mono">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-pulse">Loading...</div>
        <div className="text-sm text-[#888]">Redirecting to desktop...</div>
      </div>
    </div>
  );
}
