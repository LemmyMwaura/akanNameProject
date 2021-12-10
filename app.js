
const submit = document.getElementById("submit")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const date = document.getElementById('date').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    const genderInput = document.querySelector('input[name="gender"]:checked').value


    if (date > 31 || date <= 0 ){
        alert("Enter correct value")
    } 
    if (month > 12 || month <= 0 ){
        alert("Enter correct value")
    } 

    console.log(date)
    console.log(month)
    console.log(year)
    console.log(genderInput)
})


// function runCode(){
//     let enterDate = prompt("Enter Date")
//     console.log(enterDate)
// }
