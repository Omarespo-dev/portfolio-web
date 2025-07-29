//Icone ///
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function JumboTron() {
  return (
    <div className="bg-[#D7D7D7]  flex flex-col md:flex-row  mt-[70px]">
      <div className="w-full md:w-[45%] flex justify-center items-center">
        <section className="flex flex-col p-[10px] ">
          <h3 className="pb-[10px] "><strong> Ciao, lo sono</strong></h3>
          <h1 className="text-[30px] font-bold-important"><strong>Omar Esposito</strong></h1>
          <h4 className="text-[13px] text-gray-500"> Junior Front-end Developer</h4>

          <section className="flex justify-between mt-[80px]">
            <a
              href="mailto:omaresposito21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-zinc-500 bg-neutral-300 rounded content-center shadow-xl/20 hover:bg-white"
              title="Invia una mail"
            >
              <SiGmail className="w-[50px] h-[45px] text-zinc-100 hover:text-black px-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-esposito-1544a6270"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-zinc-500 bg-neutral-300 rounded content-center shadow-xl/20 hover:bg-white"
              title="LinkedIn"
            >
              <FaLinkedin className="w-[50px] h-[45px] text-zinc-100 hover:text-black px-3" />
            </a>
            <a
              href="https://github.com/Omarespo-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-zinc-500 bg-neutral-300  rounded content-center shadow-xl/20 hover:bg-white"
              title="GitHub"
            >
              <FaGithub className="w-[50px] h-[45px] text-zinc-100  hover:text-black px-3" />
            </a>
          </section>

        </section>
      </div>

      <div className="w-full md:w-[55%] bg-[url('/img/rectangle.png')] bg-cover bg-center relative flex items-center">
        <img src="/img/img.png" alt="" className="relative z-[999px] max-w-full h-auto mx-auto" />
      </div>
    </div>
  )
}
