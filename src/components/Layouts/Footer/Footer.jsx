
//icone
import { CgChevronDoubleUp } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//importo funzione per link
import SocialIcon from "../common/SocialIcon";

export default function Footer() {

  //Scrollo fino a sopra 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <div className=" bg-zinc-900 flex justify-center">
      <div className="w-[90%]  mt-[20px]">
        {/* Back to Top */}
        <div className=" w-[100%]  flex justify-center flex-col items-center">
          <CgChevronDoubleUp size={27} className="text-white animate-bounce cursor-pointer" onClick={scrollToTop} />
          <p className="text-white font-bold">BACK TO TOP</p>
        </div>

        <div className=" w-[100%]  mt-[20px] mb-[20px] flex sm:justify-between justify-center items-center items-centerflex-wrap">
          <img src="/img/Logo-oe-2-white.png" alt="" className="h-[80px] animate-pulse " />
          <div className="flex gap-4 ">
            <SocialIcon href="mailto:omaresposito21@gmail.com">
              <SiGmail className="text-red-500  text-xl" />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/in/omar-esposito-1544a6270">
              <FaLinkedin className="text-blue-600  text-xl" />
            </SocialIcon>

            <SocialIcon href="https://github.com/Omarespo-dev">
              <FaGithub className="text-gray-800  text-xl" />
            </SocialIcon>
          </div>
        </div>

        <div className=" w-[100%]  flex justify-center items-center">
          <p className="text-[#D7D7D7] text-[13px] text-center">@2025 Omar Esposito All Rights Reserved.</p>
        </div>


      </div>
    </div>
  )
}

