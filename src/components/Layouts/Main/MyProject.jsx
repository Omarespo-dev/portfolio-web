//importo dati project
// import { useEffect, useState } from "react";
import { projectDataNormal } from "../../../../data/ProjectData";

// Importo Icone 
import { FaExternalLinkAlt } from "react-icons/fa";


export default function MyProject() {

  return (
    <div className="flex flex-wrap justify-center bg-zinc-100" id="project">

      {/* I MIEI PROGETTI*/}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]"
      >
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-black">
          <h1 className="font-bold text-[18px]">I MIEI PROGETTI</h1>
        </section>
      </div>

      <div className="w-[80%]  justify-center p-[5px] flex-wrap flex-col mt-[30px] ">

        {projectDataNormal.map(pro => (
          <div className={`
            flex mb-[50px] ${pro.number === "02" || pro.number === "04" ? "flex-col-reverse" : "flex-col"} items-center hover:bg-zinc-900 duration-200 ease-in hover:text-white hover:rounded-2xl cursor-pointer rounded-2xl
            sm:flex-row`} key={pro.id}>
              
            {pro.number === "02" || pro.number === "04" ? (
              <>
                <section className=" sm:w-[60%] p-[30px]">
                  <h1 className="font-extrabold text-[25px]">{pro.number}</h1>
                  <h2 className="font-bold text-[25px] mt-[10px]">{pro.title}</h2>
                  <p className=" text-[14px] mt-[10px]">{pro.description}</p>
                  <section className="mt-[10px] inline-block">
                    <a href={pro.linkGit} ><FaExternalLinkAlt size={16} /></a>
                  </section>
                </section>
                <section className="sm:w-[50%] w-[100%]  flex items-center justify-center border-2 border-zinc-400 rounded-2xl shadow-2xl/20">
                  <video
                    src={pro.video}
                    className="w-full h-full object-cover rounded-2xl pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"                     // carica almeno l'anteprima
                  ></video>
                </section>
              </>
            ) : (
              <>
                <section className="sm:w-[50%] w-[100%]  flex items-center justify-center rounded-2xl  border-2 border-zinc-400 shadow-2xl/20" >
                  <video
                    src={pro.video}
                    className="w-full h-full object-cover rounded-2xl pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"                     // carica almeno l'anteprima
                  ></video>
                </section>
                <section className=" sm:w-[60%]  p-[30px]">
                  <h1 className="font-extrabold text-[25px]">{pro.number}</h1>
                  <h2 className="font-bold text-[25px] mt-[10px]">{pro.title}</h2>
                  <p className="text-[14px] mt-[10px]">{pro.description}</p>
                  <section className="mt-[10px] inline-block">
                    <a href={pro.linkGit} ><FaExternalLinkAlt size={16} /></a>
                  </section>
                </section>
              </>
            )}
          </div>
        ))}

      </div >

    </div >
  )
}
