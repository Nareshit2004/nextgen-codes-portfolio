import React, { useState } from 'react';

const FallbackGraphics = {
  'AI': () => (
    <div className="w-full h-full bg-studio-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-cyan to-transparent"></div>
      <svg className="w-16 h-16 text-accent-cyan opacity-80 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </div>
  ),
  'Data': () => (
    <div className="w-full h-full bg-studio-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-orange/10 to-transparent"></div>
      <div className="flex items-end gap-2 h-24 relative z-10">
        {[40, 70, 45, 90, 60, 85].map((h, i) => (
          <div key={i} className="w-4 bg-accent-orange/60 rounded-t-sm" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  ),
  'EV': () => (
    <div className="w-full h-full bg-studio-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <svg className="w-16 h-16 text-accent-cyan opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </div>
  ),
  'Default': () => (
    <div className="w-full h-full bg-studio-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <svg className="w-12 h-12 text-content-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    </div>
  )
};

export default function ProjectImage({ src, alt, category, className }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    const isAI = category?.includes('AI') || category?.includes('Healthcare');
    const isData = category?.includes('Data');
    const isEV = category?.includes('EV') || category?.includes('IoT');
    
    let Fallback = FallbackGraphics.Default;
    if (isAI) Fallback = FallbackGraphics.AI;
    else if (isData) Fallback = FallbackGraphics.Data;
    else if (isEV) Fallback = FallbackGraphics.EV;

    return (
      <div className={`relative ${className}`}>
        <Fallback />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
}
