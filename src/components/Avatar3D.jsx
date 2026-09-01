import khawarCutout from '../assets/khawar-profile.webp'

function Avatar3D() {
  return (
    <img
      src={khawarCutout}
      alt="Portrait of Khawar Hayyat"
      width="648"
      height="648"
      className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
    />
  )
}

export default Avatar3D
