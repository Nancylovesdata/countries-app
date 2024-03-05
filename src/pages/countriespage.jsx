import React from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'

export const Countriespage = () => {
    const url= "https://restcountries.com/v3.1/all"

// function displayCountries(){
//     let allCountries = fetch(url).then((response) =>{console.log('country', response.json())})
// }
// displayCountries()

let countriesBox 
async function displayallCountries(){
const countries= await axios.get(url)
const countriesBox  = countries.data
const sliceData =countriesBox.slice(0,5)
console.log('yepItem', sliceData)

sliceData.map(country=> {
            console.log(country.name.common);
        });


    // }

// let fiveItems = countriesBox.slice(0,5).map(Item)=>{
// console.log('yepItem', Item)
// })
console.log('countries', countriesBox)
// const response = countries.json()
// console.log('response', response)
//  countriesBox.push(response)
return countriesBox

}

// function display5Countries(){
    // let fiveItems = countriesBox.slice(0,4)
    // console.log('five',fiveItems)
    // console.log("countries",countriesBox);
// }

// display5Countries()

// console.log("countries", countriesBox)
 displayallCountries()

// console.log("countries", countries)

  
  //   function to display countries
//   displayCountries();
  
//   function displayCountries() {
//     const countries = ["Canada", "Ghana", "Togo", "Nigeria", "USA"];

//     countries.map(country => {
//         console.log(country);
//     });
// }

//  function to display countries
// displayCountries();



  return (
    <div>
        <h1>This is my Countriespage</h1>
       <Navbar/> 
    </div>
  )
}



export default Countriespage;