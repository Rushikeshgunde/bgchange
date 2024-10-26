import { useState } from 'react';
import './App.css';

function App() {
  const [color, SetColor] = useState("olive");

  // const handleColorChange = (event) => {
  //   setColor(event.target.value);
  // };

  return (
    <>
      <div className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button onClick={()=> SetColor("orange")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=> SetColor("white")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}>White</button>
            <button onClick={()=> SetColor("green")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> SetColor("gray")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"gray"}}>gray</button>
            <button onClick={()=> SetColor("pink")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=> SetColor("blue")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=> SetColor("red")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> SetColor("yellow")} className='outline-none px-3 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}>Red</button>
          </div>
      </div>
      </div>
      {/* <h1 className='bg-red-500 text-white p-4'>Hello bgchanger</h1> */}
    </>
  );
}

export default App;
