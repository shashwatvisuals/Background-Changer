import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shaddow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

          <button onClick={() => setColor("Green")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

          <button onClick={() => setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>

          <button onClick={() => setColor("Gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>

          <button onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

          <button onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-gray shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
