/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let elInput = document.getElementById("el-input")
const elBtn = document.getElementById("el-btn")
let mtrEl = document.getElementById("mtr-el")
let ltrEl = document.getElementById("ltr-el")
let kgEl = document.getElementById("kg-el")

elBtn.addEventListener("click", function (){
    let input = Number(elInput.value)
    const mtrFeet = input * 3.281
    const feetMtr = 3.281 / input
    
        mtrEl.innerHTML = `
        ${input} meters = ${mtrFeet.toFixed(3)} feet | 
        ${input} feet = ${feetMtr.toFixed(3)} meters`
        
    const ltrGal = input * 0.264
    const galLtr = 0.264 / input
    
        ltrEl.innerHTML = `
        ${input} liters = ${ltrGal.toFixed(3)} gallons | 
        ${input} gallons = ${galLtr.toFixed(3)} liters`
        
    const kgPounds = input * 2.204
    const poundsKg = 2.204 / input
    
        kgEl.innerHTML = `
        ${input} kilos = ${kgPounds.toFixed(3)} pounds | 
        ${input} pounds = ${poundsKg.toFixed(3)} kilos`
        
})
