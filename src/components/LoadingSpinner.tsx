
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div 
          className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
          role="status"
          aria-label="Loading content"
        />
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
