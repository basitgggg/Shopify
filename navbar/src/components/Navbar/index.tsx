import { NavbarItems } from "@/typesandArrays/NavbarItems";
import NavbarView from "@/views/navbarView";
import Image from "next/image";
import { background } from "@/assets";


export default function Navbar() {
  return (
    <section className=" max-h-52 w-full ">
      <nav className="z-50">
        <NavbarView navItem={NavbarItems} />
      </nav>
      <div className="absolute top-0 -z-50 ">
        <Image className="h-24" src={background} alt="Mountains" />
      </div>
    </section>
  )
}