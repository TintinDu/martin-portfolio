import type { ReactNode } from 'react';

interface PageScreenProps {
  children: ReactNode;
  videoSrc?: string;
  className?: string;
}

export function PageScreen({ children, videoSrc }: PageScreenProps): React.JSX.Element {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#000' }}>
      {videoSrc && (
        <video
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '75% center', opacity: 0.55, zIndex: 0 }}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = 'none'; }}
        />
      )}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(10,5,20,0.55) 50%, rgba(0,0,0,0.8) 100%)', pointerEvents: 'none' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: 0, zIndex: 6 }}>{children}</div>
    </div>
  );
}
