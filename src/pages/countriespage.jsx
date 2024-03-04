import React from 'react'
import Navbar from '../components/navbar'

export const Countriespage = () => {
    const url= "https://restcountries.com/v3.1/all"

// function displayCountries(){
//     let allCountries = fetch(url).then((response) =>{console.log('country', response.json())})
// }
// displayCountries()

async function displayallCountries(){
const countries= await fetch(url)
// console.log("countries", countries)
console.log("countries", countries.json())
}
 displayallCountries()
  return (
    <div>
        <h1>This is my Countriespage</h1>
       <Navbar/> 
    </div>
  )
}



export default Countriespage;