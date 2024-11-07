export function convertTemp(){

    const tempUnit=Array.from(document.querySelectorAll(".temp-unit"))
    tempUnit.forEach((element) => {
        if (element.innerText === "°F") {
            element.innerText = "°C";
        } else if (element.innerText === "°C") {
            element.innerText = "°F"
        } 
     })


}


export function convertTemp2 () {

    const unitconvbtn=document.querySelector('.unit-conv')
    const temps=Array.from(document.querySelectorAll(".temp"))

    if (unitconvbtn.innerText === "°F") {
        temps.forEach(element => {
            element.innerText = ((Number(element.innerText) * 1.8) + 32).toFixed(1);
            
        })
    } else if (unitconvbtn.innerText === "°C") {
        temps.forEach(element => {
            element.innerText = ((Number(element.innerText) - 32) / 1.8).toFixed(1);
        })
    }






}