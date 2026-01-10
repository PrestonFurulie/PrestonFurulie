'use client';

import dynamic from 'next/dynamic';

// Dynamically import IsometricGameWrapper to avoid SSR issues
const IsometricGameWrapper = dynamic(() => import('./IsometricGameWrapper'), {
  ssr: false,
});

export default function IsometricMMOGame() {
  return <IsometricGameWrapper />;
}
