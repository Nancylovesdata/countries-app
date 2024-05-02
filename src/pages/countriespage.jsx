import React from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import {useState, useEffect} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Countriespage = () => {
const [country, setCountry]= useState([]) 
    const url= "https://restcountries.com/v3.1/all"
    let countriesBox =[]
useEffect(() => {

  async function displayallCountries(){
    try {
      const countries= await axios.get(url)
    const countriesBox  = countries.data
    setCountry(countriesBox) 
    } catch (error) {
      console.log(error)
    }6+
   
};

displayallCountries()

},[])




console.log('country',country)

const sliceData = countriesBox.slice(0,5)
console.log('yepItem', sliceData)

sliceData.map(country=> {
            console.log(country.name.common);
        });


 

// console.log('countries', countriesBox)

// return countriesBox





  return (
    <div>
        <h1>This is my Countriespage</h1>
       <Navbar/> 
    <div className='outer-div'>
    {country.slice(0,10).map((item)=>(
     
<div>
  <h1>{item.name.common}</h1>
  <h1>{item.name.official}</h1>
  <img src= {item.flags.png} alt ={item.flags.alt}></img>
  <button className='countryButton'>
<Link to = {`/Countrypage/${item.name.common}`}>Learn More</Link>
    
  </button>
</div>
    ))}

</div>

       </div>
    
  )
    }
export default Countriespage;