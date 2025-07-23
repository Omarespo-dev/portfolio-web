//Icone ///
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function JumboTron() {
  return (
    <div className="bg-[#D7D7D7] h-auto flex flex-col md:flex-row">
      <div className="w-full md:w-[45%] flex justify-center items-center">
        <section className="flex flex-col p-[10px] ">
          <h3 className="pb-[10px] "><strong> Ciao, lo sono</strong></h3>
          <h1 className="text-[30px] font-bold-important"><strong>Omar Esposito</strong></h1>
          <h4 className="text-[13px] text-gray-500"> Junior Front-end Developer</h4>

          <section className="flex justify-between mt-[80px]">
            <div className="border-[2px] border-zinc-500 bg-neutral-300 px-3 rounded content-center shadow-xl/20">
              <SiGmail className="w-[30px] h-[45px]" />
            </div>
            <div className="border-[2px] border-zinc-500 bg-neutral-300 px-3 rounded content-center shadow-xl/20">
              <FaLinkedin className="w-[30px] h-[45px] " />
            </div>
            <div className="border-[2px] border-zinc-500 bg-neutral-300 px-3 rounded content-center shadow-xl/20">
              <FaGithub className="w-[30px] h-[45px] " />
            </div>
          </section>

        </section>
      </div>

      <div className="w-full md:w-[55%] bg-[url('/img/rectangle.png')] bg-cover bg-center relative flex items-center">
        <img src="/img/img.png" alt="" className="relative z-10 max-w-full h-auto mx-auto" />
      </div>
    </div>
  )
}
