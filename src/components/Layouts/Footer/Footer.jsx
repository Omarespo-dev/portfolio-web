
//icone
import { CgChevronDoubleUp } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {

  //Scrollo fino a sopra 
  const scrollToTop = () => {
    window.scrollTo({top:0, left:0 , behavior: "smooth"})
  }

  return (
    <div className=" bg-zinc-900 flex justify-center">
      <div className="w-[90%]  mt-[20px]">
        {/* Back to Top */}
        <div className=" w-[100%]  flex justify-center flex-col items-center">
          <CgChevronDoubleUp size={27} className="text-white animate-bounce cursor-pointer" onClick={scrollToTop}/>
          <p className="text-white font-bold">BACK TO TOP</p>
        </div>

        <div className=" w-[100%]  mt-[20px] mb-[20px] flex sm:justify-between justify-center flex-wrap">
          <img src="/img/Logo-oe-2-white.png" alt="" className="h-[80px] animate-pulse " />
          <section className="flex items-center gap-3 ">
            <a
              href="mailto:omaresposito21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1px] border-zinc-500  rounded content-center shadow-xl/20 hover:bg-neutral-300"
              title="Invia una mail"
            >
              <SiGmail className="w-[30px] h-[30px] text-zinc-100 hover:text-black px-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-esposito-1544a6270"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1px] border-zinc-500  rounded content-center shadow-xl/20 hover:bg-neutral-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-[30px] h-[30px] text-zinc-100 hover:text-black px-1" />
            </a>
            <a
              href="https://github.com/Omarespo-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1px] border-zinc-500   rounded content-center shadow-xl/20 hover:bg-neutral-300"
              title="GitHub"
            >
              <FaGithub className="w-[30px] h-[30px] text-zinc-100  hover:text-black px-1" />
            </a>
          </section>
        </div>

        <div className=" w-[100%]  flex justify-center items-center">
          <p className="text-[#D7D7D7] text-[13px] text-center">@2025 Omar Esposito All Rights Reserved.</p>
        </div>


      </div>
    </div>
  )
}
