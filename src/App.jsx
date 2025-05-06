import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Brief from './Components/Brief'
import Im from './Components/Im'
import photoo from './assets/photu.png'


const arr=["HTML","CSS","JavaScript","ReactJS", "MySQL", "JAVA"].map((el)=><button>{el}</button>)

const x={border:"1px solid grey", borderRadius:"15px", width:"950px"};
const y={display:"flex", justifyContent:"space-between"};
const z={ marginBottom:"20px", display:"flex", justifyContent:"space-evenly", width:"650px"};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={x}>
      <div style={y}>
        <Brief name="Ritika Singh" status="Front-end Developer"></Brief>
        <Im source={photoo}></Im>
      </div>
      <div style={z}>{arr}</div>
      </div>
    </>
  )
}

export default App