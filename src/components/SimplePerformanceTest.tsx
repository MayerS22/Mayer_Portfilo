'use client';

import { useEffect, useState } from 'react';

const SimplePerformanceTest = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure page load time
      const loadTime = performance.now();
      
      // DOM Content Loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setMetrics(prev => ({ ...prev, domContentLoaded: performance.now() }));
        });
      } else {
        setMetrics(prev => ({ ...prev, domContentLoaded: 0 }));
      }

      // First Paint
      if ('performance' in window) {
        const paintEntries = performance.getEntriesByType('paint');
        if (paintEntries.length > 0) {
          setMetrics(prev => ({ ...prev, firstPaint: paintEntries[0].startTime }));
        }
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }

      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Test</div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
        <div>DOM Ready: {metrics.domContentLoaded.toFixed(0)}ms</div>
        <div>First Paint: {metrics.firstPaint.toFixed(0)}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
      <div className="mt-2 text-xs text-gray-400">
        {metrics.loadTime < 1000 ? '🟢' : metrics.loadTime < 2000 ? '🟡' : '🔴'} Performance
      </div>
    </div>
  );
};

export default SimplePerformanceTest;
