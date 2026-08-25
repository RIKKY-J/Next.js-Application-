"use client";
import { usePathname } from 'next/navigation';

export default function () {
  const p = usePathname();
  console.log(p);
  return (
    <div>
      <h1>Blog Page Not Found 404!</h1>
      <p>The Blog you are looking for does not exist.</p>
    </div>
  )
}
