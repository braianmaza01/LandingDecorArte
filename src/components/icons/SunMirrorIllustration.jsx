export default function SunMirrorIllustration({ className = '' }) {
  const rays = 24
  const cx = 150
  const cy = 150
  const rOuter = 145
  const rInner = 100
  const rRing = 70
  const rGlass = 55

  const lines = Array.from({ length: rays }, (_, i) => {
    const angle = (i / rays) * Math.PI * 2
    const x1 = cx + rInner * Math.cos(angle)
    const y1 = cy + rInner * Math.sin(angle)
    const x2 = cx + rOuter * Math.cos(angle)
    const y2 = cy + rOuter * Math.sin(angle)
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
  })

  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {lines}
      <circle cx={cx} cy={cy} r={rRing} />
      <circle cx={cx} cy={cy} r={rGlass} fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}
