
//importo dati learning
import {skills ,learningSkill} from "../../../../data/Skills";



export default function MySkills() {
  return (
    <div className=" flex flex-wrap justify-center">
      
      {/* Skills button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]">
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">SKILLS:</h1>
        </section>
      </div>

      {/* Skills complete */}
      <div className="  w-[55%] flex justify-center p-[20px] gap-[50px] flex-wrap">
        {skills.map(skill => (

          <section className="group h-[135px] w-[135px] flex justify-center items-center border-2 border-b-black flex-col shadow-2xl/20 cursor-pointer hover:bg-zinc-900 duration-200 ease-in" key={skill.id}>
            {skill.img}
            <h1 className="mt-[10px] group-hover:text-white">{skill.name}</h1>
          </section>
        ))}
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
