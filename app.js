
const submit = document.getElementById("submit")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const date = document.getElementById('date').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    const genderInput = document.querySelector('input[name="gender"]:checked').value

    console.log(date)
    console.log(month)
    console.log(year)
    console.log(genderInput)
})

console.log(date)

// function runCode(){
//     let enterDate = prompt("Enter Date")
//     console.log(enterDate)
// }
