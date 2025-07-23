
//importo dati Per NavBar
import NavContent from "../../../../data/HeaderNavContent"

//icona closeNavBar
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderNavMobile({closeNav,showNav}) {
    return (
        //se showNav e false nascondimi tutto altrimenti se e true metti dispaly block
        <div className={!showNav ? "hidden" : "block"}>
            {/* Overlay */}
            <div className="bg-black/35 w-[100%] h-screen z-50 fixed"></div>

            {/* Content Responsive Nav */}
            <div className="bg-zinc-800 w-[300px] h-screen z-60 fixed">
                <section className="flex justify-end p-[20px]">
                    <IoCloseSharp className="text-white w-[50px] h-[50px] cursor-pointer" onClick={closeNav}/>
                </section>

                <div className="p-[60px]">
                    <ul className="h-[600px] flex flex-col justify-evenly items-start">
                        {NavContent.map(nav => (
                            <li key={nav.id} className="text-[25px] pb-[6px] text-white 
                            border-b-2 border-b-blue-200 cursor-pointer hover:text-gray-400">
                                {nav.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>



    )
}
