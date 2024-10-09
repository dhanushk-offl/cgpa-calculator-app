import React from "react";
import dynamic from 'next/dynamic';
const CGPACalculator = dynamic(() => import('./components/home'), { ssr: false });

export default function Home() {
  return (
    <div>
      <CGPACalculator />
    </div>
  );
}