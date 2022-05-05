import react from "react"
import Image from 'next/image'

//images
import logo from "../../assets/img/poke-logo.png"

const Header = () => {

  return (
    <div>
      <nav>
      <Image src={logo}/>
      </nav>
    </div>
  )

}
export default Header