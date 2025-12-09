import { Analytics } from "@vercel/analytics/react"

//Routing 
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import Homepage from "./page/Homepage"



function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </>


  )
}

export default App
