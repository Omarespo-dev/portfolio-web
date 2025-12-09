//importo dati learning
import { useState } from "react";
import { skills, learningSkill } from "../../../../data/Skills";

export default function MySkills() {
  //stato per tenere traccia del explore more per la show
  const [show, setShow] = useState(false);

  //prendo i primi quattro elementi dall arr
  const takeFirst4 = skills.slice(0, 4);

  //Prendo il restante dall arr
  const takeLast5 = skills.slice(4);

  return (
    <section id="skills" className="flex flex-wrap justify-center">

      {/* Skills button */}
      <div className="h-[100px] w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">SKILLS:</h1>
        </section>
      </div>

      {/* Skills PRIME 4 FISSE */}
      <div className="w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap">
        {takeFirst4.map((skill) => (
          <section
            key={skill.id}
            className="
              group h-[135px] w-[135px] flex justify-center items-center 
              border-2 border-b-black flex-col shadow-2xl/20 
              cursor-pointer duration-200 ease-in
              hover:bg-zinc-900
              active:bg-zinc-800
            "
          >
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white group-active:text-white">
              {skill.name}
            </h1>
          </section>
        ))}
      </div>

      {/* Skills ULTIMI 5 CON LOGICA EXPLORE MORE */}
      <div className={`
        w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${show ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}>
        {takeLast5.map((skill) => (
          <section
            key={skill.id}
            className="
              group h-[135px] w-[135px] flex justify-center items-center 
              border-2 border-b-black flex-col shadow-2xl/20 
              cursor-pointer duration-200 ease-in
              hover:bg-zinc-900
              active:bg-zinc-800
            "
          >
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white group-active:text-white">
              {skill.name}
            </h1>
          </section>
        ))}
      </div>

      {/* Skills learning button */}
      <div className="h-[100px] w-[90%] flex justify-center p-[20px] mt-[10px]">
        <section
          onClick={() => setShow(!show)}   // TOGGLE BUTTON
          className="
            group h-[60px] w-[200px] flex justify-center items-center 
            border-3 border-b-black shadow-2xl cursor-pointer 
            duration-200 ease-in
            hover:bg-zinc-900
            active:bg-zinc-800
          "
        >
          <h1 className="font-bold text-[18px] group-hover:text-white group-active:text-white">
            {show ? "EXPLORE LESS" : "EXPLORE MORE"}
          </h1>
        </section>
      </div>

      {/* Skills learning button */}
      <div className="h-[100px] w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">LEARNING:</h1>
        </section>
      </div>

      {/* Skills complete */}
      <div className="w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap">
        {learningSkill.map((skill) => (
          <section
            key={skill.id}
            className="
              group h-[135px] w-[135px] flex justify-center items-center 
              border-2 border-b-black flex-col shadow-2xl/20 
              cursor-pointer duration-200 ease-in
              hover:bg-zinc-900
              active:bg-zinc-800
            "
          >
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white group-active:text-white">
              {skill.name}
            </h1>
          </section>
        ))}
      </div>

    </section>
  );
}
