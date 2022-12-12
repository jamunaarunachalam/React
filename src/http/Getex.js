import axios from 'axios'
import React, { useEffect,useState } from 'react'

function Getex(){
  const[dept,setdept]=useState([])
  useEffect(()=>{
    axios.get("jam.json")
    .then(e=>{
      setdept(e.data)
      console.log(e.data)})
      .catch(err=>console.log(err))
    })
    return(
      <div>Getex
      {
        <div>
        dept.map(every =>  key={every.name}>{every.age})</div>
    )
  }
}