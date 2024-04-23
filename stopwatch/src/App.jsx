import { useState,useRef,useEffect} from 'react'
import './App.css'
import play from './assets/play-button-arrowhead (1).png'
import stope from './assets/stop-button.png'
import undo from './assets/undo.png'
function App() {
  const[run,setRun]=useState(false);
  const[curtime,setCurtime]=useState(0);
  const time=useRef(0);
  useEffect(()=>{
    if(run)
    {
    const timer=setInterval(()=>{
      setCurtime(Date.now()-time.current);
    },10);
    return()=>clearInterval(timer);
  }
},[run]);
  const start =()=>{
    setRun(true);
    time.current=Date.now()-curtime;
  }
  const stop=()=>{
    setRun(false);
  }
  const reset=()=>{
    setRun(false);
    setCurtime(0);
  }
  const format=()=>{
    let h=Math.floor(curtime/(1000*60*60));
    let m=Math.floor((curtime/(1000*60))% 60);
    let s=Math.floor((curtime/1000)%60);
    let ms=Math.floor(curtime%1000);
    h=String(h).padStart(2,"0");
    m=String(m).padStart(2,"0");
    s=String(s).padStart(2,"0");
    ms=String(ms).padStart(2,"0");
    return (`${h}:${m}:${s}:${ms}`);
  }
  return (
    <>
    <div className="cont">
      <h1>STOP WATCH</h1>
      <div id="t">{format()}</div>
      <button id="a" onClick={start}><img src={play}></img></button>
      <button id="b" onClick={stop}><img src={stope}/></button>
      <button id="c" onClick={reset}><img src={undo}/></button>
    </div>
    </>
  )
}

export default App
