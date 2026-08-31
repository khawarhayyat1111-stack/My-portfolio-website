import { useRef, useState } from 'react'
import khawarCutout from '../assets/khawar-cutout.webp'

function Avatar3D() {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function handleMove(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -py * 10, ry: px * 10 })
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <div style={{ perspective: '900px' }} className="h-64 w-64 sm:h-80 sm:w-80">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative h-full w-full transition-transform duration-150 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <img
          src={khawarCutout}
          alt="Portrait of Khawar Hayyat"
          width="800"
          height="735"
          className="h-full w-full object-contain drop-shadow-[0_20px_35px_#17140Fb3]"
        />
      </div>
    </div>
  )
}

export default Avatar3D
