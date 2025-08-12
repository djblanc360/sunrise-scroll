"use client"

interface ScrollCircleProps {
  scrollY: number
}

export function ScrollCircle({ scrollY }: ScrollCircleProps) {
  // Calculate circle properties based on scroll
  const maxScroll = window.innerHeight * 2
  const scrollProgress = Math.min(scrollY / maxScroll, 1)

  // Circle grows and moves as user scrolls
  const scale = 0.5 + scrollProgress * 1.5
  const rotation = scrollProgress * 360
  const opacity = Math.max(1 - scrollProgress * 0.7, 0.3)

  // Position changes with scroll
  const translateX = scrollProgress * 200 - 100
  const translateY = scrollProgress * 150 - 75

  return (
    <div
      className="fixed top-1/2 left-1/2 pointer-events-none z-20 transition-all duration-300 ease-out"
      style={{
        transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
        opacity,
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer ring */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
          className="animate-pulse"
        />

        {/* Middle ring */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />

        {/* Inner circle */}
        <circle
          cx="100"
          cy="100"
          r="30"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="1"
        />

        {/* Center dot */}
        <circle cx="100" cy="100" r="4" fill="white" />

        {/* Animated lines */}
        <g className="animate-spin" style={{ transformOrigin: "100px 100px", animationDuration: "20s" }}>
          <line x1="100" y1="40" x2="100" y2="60" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
          <line x1="160" y1="100" x2="140" y2="100" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
          <line x1="100" y1="160" x2="100" y2="140" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
          <line x1="40" y1="100" x2="60" y2="100" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  )
}
