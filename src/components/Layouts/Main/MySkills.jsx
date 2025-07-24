
//importo dati learning
import { useState } from "react";
import { skills, learningSkill } from "../../../../data/Skills";



export default function MySkills() {

  //stato per tenere traccia del explore more per la show
  const [show, setShow] = useState(false)

  //prendo i primi quattro elementi dall arr
  const takeFirst4 = skills.slice(0, 4)

  //Prendo il restante dall arr
  const takeLast5 = skills.slice(4)



  return (
    <div className=" flex flex-wrap justify-center">

      {/* Skills button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">SKILLS:</h1>
        </section>
      </div>

      {/* Skills PRIME 4 FISSE*/}
      <div className="w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap ">
        {takeFirst4.map(skill => (

          <section className="group h-[135px] w-[135px] flex justify-center items-center border-2 border-b-black flex-col shadow-2xl/20 cursor-pointer hover:bg-zinc-900 duration-200 ease-in" key={skill.id}>
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white">{skill.name}</h1>
          </section>
        ))}
      </div>

      {/* Skills ULTIMI 5 CON LOGICA EXPLORE MORE*/}
      <div className={show ? "w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap " : "hidden"} >
        {takeLast5.map(skill => (

          <section className="group h-[135px] w-[135px] flex justify-center items-center border-2 border-b-black flex-col shadow-2xl/20 cursor-pointer hover:bg-zinc-900 duration-200 ease-in" key={skill.id}>
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white">{skill.name}</h1>
          </section>
        ))}
      </div>

      {/* Skills learning button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[10px]">
        <section
          className=" group h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl
        cursor-pointer hover:bg-zinc-900 duration-200 ease-in"

          onClick={() => setShow(!show)}>   {/* TOGGLE BUTTON */}

          <h1 className="font-bold text-[18px] group-hover:text-white"> {show ? "EXPLORE LESS" : "EXPLORE MORE"} </h1>
        </section>
      </div>

      {/* Skills learning button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">LEARNING:</h1>
        </section>
      </div>

      {/* Skills complete */}
      <div className="  w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap ">
        {learningSkill.map(skill => (

          <section className="group h-[135px] w-[135px] flex justify-center items-center border-2 border-b-black flex-col shadow-2xl/20 cursor-pointer hover:bg-zinc-900 duration-200 ease-in" key={skill.id}>
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white">{skill.name}</h1>
          </section>
        ))}
      </div>


    </div>
  )
}
