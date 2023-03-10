"use client"
import { logo } from "@/assets"
import Image from "next/image"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { NavbarItemType } from "@/typesandArrays/NavbarItems";
import { Jost } from 'next/font/google'
import { useState } from "react"


const inter = Jost({ subsets: ['latin'] })


interface typeofNavItems {
  navItem: Array<NavbarItemType>,
}

export default function NavbarView({ navItem }: typeofNavItems) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className={`w-full py-7 bg-transparent `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className={`${sidebar === true ? "blur-sm" : "blur-0"} cursor-pointer`}>
          <Image src={logo} alt="motion" />
        </div>
        <ul className="hidden md:flex text-white space-x-10">
          {navItem && navItem.map((item: { label: string, dropdown: boolean }, index: number) => (
            <div key={index} className="flex items-center cursor-pointer">
              <h4 className={inter.className}>
                {item.label}
              </h4>
              <div className="mt-1">
                {item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
              </div>
            </div>
          ))}
        </ul>
        <div className="flex text-white space-x-6 sm:space-x-5">
          <FiSearch className="cursor-pointer" size={25} />
          <div onClick={() => { setSidebar(!sidebar) }}>
            <CgMenuLeftAlt className="block md:hidden cursor-pointer" size={30} />
          </div>
          <RiShoppingBagLine className="cursor-pointer" size={25} />
        </div>
      </div>
      <OffCanvasSidebarMobile data={navItem} sidebar={sidebar} setSidebar={setSidebar} />
    </main>
  )
}



function OffCanvasSidebarMobile({ data, sidebar, setSidebar }: any) {
  return (
    <>
      <div onMouseLeave={() => { setSidebar(false) }} className={`${sidebar ? "visible" : "invisible"} flex-col items-end fixed top-0 right-0 px-2 w-80 h-screen overflow-y-auto bg-white`}>
        {/* absolute ${sidebar ? "translate-x-0 " : "translate-x-full"} transition-all duration-500 */}
        <div className="flex justify-end w-full border-b-2 cursor-pointer py-5 transition duration-75 " >
          <div onClick={() => { setSidebar(!sidebar) }} className="p-4 active:bg-gray-200">
            <GrClose />
          </div>
        </div>
        <ul className=" w-full">
          {data.map((item: any) =>
            <li className="rounded-sm cursor-pointer flex justify-between w-full border-b-2 p-4 transition duration-75 active:bg-gray-200 " key={item.label}>
              <h4>{item.label}</h4>
              {item.dropdown ? <RiArrowDropDownLine size={30} /> : ""}

            </li>
          )}
        </ul>
        <div className="cursor-pointer flex justify-start w-full p-4 space-x-5 " >
          <BsFacebook size={25} />
          <FaTwitter size={25} />
        </div>
      </div>
    </>
  )
}
// whitespace-nowrap