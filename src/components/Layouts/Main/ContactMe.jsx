import { useState } from "react"

export default function ContactMe() {
  //variabili di stato PER VALIDAZIONE LIVE
  const [liveInput, setLiveInput] = useState(false)
  const [liveEmail, setLiveEmail] = useState(false)

  //Variabili di stato PER VALIDAZIONE ALL INVIO
  const [submitForm, setSubmitForm] = useState(false)
  const [numberCell, setNumberCell] = useState(false)
  const [textArea, setTextArea] = useState(false)
  const [msgSuccess, setMsgSuccess] = useState("")

  //ARR TESTING FORM INVIO
  const [arrForm, setArrForm] = useState([])

  //variabile di stato formData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cell: "",
    message: ""
  })


  //funzione invio Form
  function HandleSubmit(e) {
    //previene il refresh della page all invio
    e.preventDefault();

    //validazione all invio se almeno uno dei campi e vuoto
    if (formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.cell.length === 0 ||
      formData.message.length === 0) {
      setSubmitForm(true)
      return
    } else {
      //Tolgo messaggio di errore
      setSubmitForm(false)

      //gestisco name
      if (formData.name.length < 3) {
        return
      }

      //gestisco email
      if (!formData.email.includes("@") || !formData.email.includes(".")) {
        return
      }

      //gestisco numero di cellulare
      if (formData.cell.length < 10) {
        setNumberCell(true)
        return
      } else {
        setNumberCell(false);
      }

      //gestisco message
      if (formData.message.length < 10) {
        setTextArea(true)
        return
      } else {
        setTextArea(false)
      }

      //invio ad un arr
      setArrForm((prevArr) => [...prevArr, formData])

      //reset dei campi
      setFormData({ name: "", email: "", cell: "", message: "" });

      //MSG DI SUCCESSO DEL FORM
      setMsgSuccess("Form inviato correttamente! Riceverai presto un esito o una comunicazione.")

      //Dopo 3 secondi, svuota il messaggio
      setTimeout(() => {
        setMsgSuccess("")
      },3000)

    }


  }



  //Funzione handleChange
  function HandleChange(e) {

    setFormData((prevValue) => {
      return {
        ...prevValue, [e.target.name]: e.target.value
      }
    })


    //validazione per il nome LIVE
    if (e.target.name === "name") {
      //se la length === 0 setLiveInput(false) altrimenti
      if (e.target.value.length === 0) {
        setLiveInput(false)

      } else {
        setLiveInput(e.target.value.length < 3)
        setSubmitForm(false)
      }

    }

    //validazione per email LIVE
    if (e.target.name === "email") {

      if (e.target.value.length === 0) {
        setLiveEmail(false)
      } else {
        const validEmail = e.target.value.includes("@") && e.target.value.includes(".")
        setLiveEmail(!validEmail)
        setSubmitForm(false)
      }

    }


  }

  //PER DEBUG OBJ INVIATO DA FORM
  console.log(arrForm);


  return (
    <div className="bg-circle-center flex flex-wrap justify-center "
      id="contact-me">

      {/* Contact Me button */}
      <div className="h-[100px]  w-[90%] flex justify-center p-[20px] mt-[50px]"
      >
        <section className="h-[60px] w-[200px] flex justify-center items-center border-3 border-b-black shadow-2xl">
          <h1 className="font-bold text-[18px]">CONTATTAMI</h1>
        </section>
      </div>

      <div className="w-[70%]  justify-center p-[20px]  flex-wrap flex-col mt-[30px] ">

        {/* Content */}
        <section className=" mt-[20px] flex justify-center text-center ">
          <p>
            Sono sempre aperto a nuove opportunità di lavoro, collaborazioni creative o progetti stimolanti. Contattami e ti risponderò al più presto!
          </p>

        </section>



        {/* SEPARATOR */}
        <section className=" flex justify-center mt-[50px]">
          <img src="/img/separatorBlack 1.png" alt="" className="w-[180px]" />
        </section>
      </div>

      {/* EXPLORE MORE button */}
      <div className="w-[90%] flex justify-center p-[20px] mt-[50px] mb-[50px]">
        <form action="submit" className="w-[400px] flex flex-col gap-6" onSubmit={HandleSubmit}>

          <input
            type="text"
            placeholder="INSERISCI IL TUO NOME*"
            value={formData.name}
            onChange={HandleChange}
            name="name"
            onInput={e => {
              e.target.value = e.target.value.replace(/[0-9]/g, ""); //Toglie ogni numero digitato, lasciando solo lettere nell’input.
            }}
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200"  //per input set
          />
          {liveInput && (<span className="text-red-500 text-[10px] mt-[-10px] ml-1">Minimo 3 caratteri!</span>)}



          <input
            type="text"
            placeholder="INSERISCI LA TUA EMAIL*"
            value={formData.email}
            onChange={HandleChange}
            name="email"
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold 
          focus:border-4 outline-none transition-all duration-200"  //per input set
          />
          {liveEmail && (<span className="text-red-500 text-[10px] mt-[-10px] ml-1">Email non valida!</span>)}

          <input
            type="number"
            placeholder="NUMERO DI TELEFONO"
            value={formData.cell}
            onChange={HandleChange}
            onInput={e => e.target.value = e.target.value.replace(/[^0-9]/g, "")} //Sostituisci TUTTO ciò che non è un numero con niente
            name="cell"
            className="border-b-4 border-l-4 h-[35px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200
          [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" //per input set
          />
          {numberCell && (<span className="text-red-500 text-[10px] mt-[-10px] ml-1">Numero di cellulare non valido min.10 numeri!</span>)}

          <textarea
            placeholder="INSERISCI IL MESSAGGIO*"
            value={formData.message}
            onChange={HandleChange}
            name="message"
            className="border-b-4 border-l-4  h-[80px] placeholder:text-[10px] pl-2 placeholder:font-semibold
          focus:border-4 outline-none transition-all duration-200 resize-none">

          </textarea>

          {submitForm && (
            <span className="text-red-500 text-[10px] mt-[-10px] ml-1">FORM NON VALIDO COMPILARE I CAMPI*</span>
          )}

          {textArea && (<span className="text-red-500 text-[10px] mt-[-10px] ml-1">Messaggio troppo piccolo min.10 caratteri!</span>)}

          <section className="flex justify-center mt-[20px]">
            <button type="submit" className="h-[50px] w-[130px] flex justify-center items-center border-r-2 border-l-2 border-b-black shadow-2xl cursor-pointer font-bold  hover:bg-zinc-900 duration-200 ease-in hover:text-white ">INVIA</button>
          </section>

          {msgSuccess && (
            <span className="text-green-600 text-[15px] mt-2 ml-1">
              {msgSuccess}
            </span>
          )}

        </form>


      </div>
    </div>
  )
}
