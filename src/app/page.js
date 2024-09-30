// src/app/page.js
"use client";  // This line marks it as a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Use next/navigation in App Router

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /workshops when the page loads
    router.push('/workshops');
  }, [router]);

  return <div>Redirecting to workshops...</div>;
}
