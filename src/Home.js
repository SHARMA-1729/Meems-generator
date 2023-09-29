import React,{useEffect,useState} from 'react';
import Mcards from "./Cards"
import {getAllMemes} from "./Meems"
import "./App.css";
const Home=()=>{
    const [data,setData]=useState([]);
useEffect(()=>{
getAllMemes().then((memes)=>setData(memes.data.memes))
},[])

    return(
        <div className='row'>
          {
            data.map(el=><Mcards img={el.url} Title={el.name}/>)
          }
        </div>
    );
};
export default Home;