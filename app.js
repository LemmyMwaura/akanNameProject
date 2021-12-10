
const submit = document.getElementById("submit")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const date = document.getElementById('date').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value

    // const genderInput = document.querySelector('input[name="gender"]:checked').value
    const male = document.querySelector("#male")
    const female = document.querySelector("#female")

    checkValidity()
    checkGender()
    
    console.log(date)
    console.log(month)
    console.log(year)
    // console.log(male)
    // console.log(female)
    // console.log(genderInput)
})


function checkValidity() {
    if (date.value == undefined || month.value == undefined) {
        alert("Please Enter you Date of Birth")
    }
    if (date.value > 31 || date.value <= 0 ){
        alert("Enter the correct date value")
    } 
    if (month.value > 12 || month.value <= 0 ){
        alert("Enter the correct month value")
    } 
    if (year.value > 2021 ){
        alert("You cannot be born in the future")
    } else if (year.value <= 0) {
        alert("Please enter correct Year of Birth")
    }
}

// function calcDayOfWeek() {
//     let day = 1
// }

function checkGender() {
    if(female.checked == true) {
        console.log(female.value)
    }
    else if (male.checked == true){
        console.log(male.value)
    } else {
        alert("Please select Gender")
    }
} 
