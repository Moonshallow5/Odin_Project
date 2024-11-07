import './styles.css'

import { display7DayForecast, displayToday } from "./helper"
import { convertTemp,convertTemp2 } from './temp_unit'
document.addEventListener("DOMContentLoaded", () => {
const searchBtn=document.querySelector('.search')
const unitConvBtn = document.querySelector('.unit-conv');
console.log('hi')
searchBtn.addEventListener('click', () => {

    const city=document.querySelector('#city')
    const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=us&key=BXBWRF5A48GFFV2N7ZKHW36RY&contentType=json`
    console.log(city.value)
    getWeatherData(url)

})

unitConvBtn.addEventListener('click', () => {  
    convertTemp();
    convertTemp2();

});

})

async function getWeatherData(url) {
const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        console.log(data.resolvedAddress)
        displayToday(data);
        console.log(data.days[0].tempmax)
        display7DayForecast(data)

    
    
    
}


