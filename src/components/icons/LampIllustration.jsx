export default function LampIllustration({ className = '' }) {
  const fringeCount = 16
  const top = 130
  const bottom = 230
  const leftTop = 240
  const rightTop = 360
  const leftBottom = 195
  const rightBottom = 405

  const fringes = Array.from({ length: fringeCount }, (_, i) => {
    const t = i / (fringeCount - 1)
    const x1 = leftTop + (rightTop - leftTop) * t
    const x2 = leftBottom + (rightBottom - leftBottom) * t
    return <line key={i} x1={x1} y1={bottom} x2={x2} y2={bottom + 35} />
  })

  return (
    <svg
      viewBox="0 0 600 320"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="300" y1="0" x2="300" y2={top} />
      <path
        d={`M${leftTop},${top} L${rightTop},${top} L${rightBottom},${bottom} L${leftBottom},${bottom} Z`}
      />
      {Array.from({ length: 9 }, (_, i) => {
        const t = i / 8
        const x1 = leftTop + (rightTop - leftTop) * t
        const x2 = leftBottom + (rightBottom - leftBottom) * t
        return <line key={i} x1={x1} y1={top} x2={x2} y2={bottom} />
      })}
      {fringes}
    </svg>
  )
}
