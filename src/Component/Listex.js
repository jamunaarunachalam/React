import React from 'react'

export default function Listex() {
    const cars=["nano","800","scorpio","breeza"]
    const listcar=cars.map((i)=>i);
    console.log(listcar)
  return (
    <h1>{listcar}</h1>
  )
}
