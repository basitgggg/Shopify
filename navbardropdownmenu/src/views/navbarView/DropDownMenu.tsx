import Image from "next/image";
import { subMenuType, everysubMenuType, everysubMenuContentType } from "@/typesandArrays/NavbarItems";

export default function DropDownMenu({ item }: { item: { label: string, dropdown: boolean, child?: Array<subMenuType> } }) {
    return (
        <div className={` bg-white absolute top-20 left-0 right-0 ${item.label == "About" ? "md:left-[27rem] lg:left-[43.05rem] w-40 " : " "} `}>
            {item.child && item.child.map((subItem: subMenuType, index: number) =>
                <div key={index + 100} className={`text-black flex justify-between w-11/12 mx-auto py-14 ${item.label == "About" ? "py-0 " : " "} space-x-7`}>
                    {/* <div key={index + 100} className="text-black grid grid-cols-4 w-11/12 mx-auto py-14 space-x-7"> */}
                    {subItem.firstMenu && subItem.firstMenu.map((subsubItem: everysubMenuType, index: number) => (
                        <div key={index + 200} className="space-y-3">
                            <h3 className="relative after:bg-black after:content-[' '] after:h-[2px] after:w-[0%] after:left-0 after:-bottom-1 after:absolute after:rounded-3xl after:duration-300 hover:after:w-[4.5rem] ">{subsubItem.heading}</h3>
                            <div className="w-40">
                                {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                    <h4 key={index} className="leading-10 hover:ml-2 duration-300">
                                        {subsubsubItem.label}
                                    </h4>
                                )
                                )}
                            </div>
                        </div>
                    ))}
                    {subItem.secondMenu && subItem.secondMenu.map((subsubItem: everysubMenuType, index: number) => (
                        <div key={index + 300}>
                            <h3>{subsubItem.heading}</h3>
                            {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                <>
                                    <h3 key={index + 400} className="leading-10 relative after:bg-black after:content-[' '] after:h-[2px] after:w-[0%] after:left-0 after:-bottom-1 after:absolute after:rounded-3xl after:duration-300 hover:after:w-full ">{subsubsubItem.label}</h3>
                                </>
                            )
                            )}
                        </div>
                    ))}
                    <div className="grid grid-cols-2 space-x-4">
                        {subItem.thirdMenu && subItem.thirdMenu.map((subsubItem: everysubMenuType, index: number) => (
                            <div key={index + 500} className="md:w-44 lg:w-60 text-center ">
                                {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                    <div className="py-2" key={index + 600}>
                                        {subsubsubItem.image ? <Image src={subsubsubItem.image} alt="Come" /> : ""}
                                        <h3>{subsubsubItem.label}</h3>
                                    </div>
                                )
                                )}
                                <h5>{subsubItem.heading}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}