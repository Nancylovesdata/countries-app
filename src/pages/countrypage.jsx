import React from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Countrypage  () {
  const [country, setCountry] = useState(null)
  

  // function displayfivecountries() {
  //   let countrybox = [];
  // }

const Params = useParams()
console.log('Params',Params)
const url= `https://restcountries.com/v3.1/name/${Params.countryName}`


useEffect(() => {

  async function displayOneCountry(){
    try {
      const countries= await axios.get(url)
    const countriesBox  = countries.data
   console.log('countriesBox', countriesBox[0]);

    setCountry(countriesBox[0]) 

    console.log('hello', country)

    } catch (error) {
      console.log(error)
    }
   
};

displayOneCountry()

},[Params.countryName])


if (!country){
  return <div>Loading...</div>;
}

console.log("country",country)

  return (
    <>
      <Navbar />
      <h1>Explore your country</h1>
      <div>
        <a href= {country.maps.googleMaps} alt={country.maps.alt}>Map Link</a>
        <img src= {country.flags.png} alt ={country.flags.alt}></img>
        <img src= {country.coatOfArms.png} alt ={country.coatOfArms.alt}></img>
      </div>

      
    </>
  );
};

