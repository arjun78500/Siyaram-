import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async" | "auto";
}

export function OptimizedImage({ src, alt, className, fetchPriority, loading, decoding, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        fetchPriority={fetchPriority}
        loading={loading}
        decoding={decoding}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
