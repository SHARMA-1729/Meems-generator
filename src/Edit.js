import React,{useState,createRef} from "react";
import {useSearchParams} from "react-router-dom"
import Mtext from "./Text"
import {exportComponentAsJPEG} from "react-component-export-image";
import Button from 'react-bootstrap/Button';
import "./Edit.css";
const Edit=()=>{
    const [params] = useSearchParams();
const [count,setcount]=useState(0);

const memeRef=createRef();
    const addText=()=>
    {
      setcount(count+1);
    }
return(
   <div>
    <div ref={memeRef} classNmae="meme mt-5 mb-5">
     <img src={params.get("url")} style={{width:"300px"}} alt="pho"/>
     {
        Array(count).fill(0).map(e=><Mtext/>)
     }
    </div>
    <button onClick={addText} className="btn1">Add Text</button>
    <button variant="success" onClick={(e)=>exportComponentAsJPEG(memeRef) }  className="btn2">Save</button>
    </div>
);
};
export default Edit;
