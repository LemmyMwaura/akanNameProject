const submit = document.getElementById("submit")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const date = document.getElementById('date').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    const male = document.querySelector("#male")
    const female = document.querySelector("#female")

    // checkValidity()
    // checkGender()
    calcDayOfWeek()
})

function checkValidity() {
    if (date.value.length == 0 && month.value.length == 0) {
        alert("Please Enter your Date of Birth")

    } else {       
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
}

function calcDayOfWeek() {     
    let CC = parseInt(year.value.split("").slice(0,2).join(""))
    let YY = parseInt(year.value.split("").slice(2).join(""))
    let MM = parseInt(month.value)
    let DD = parseInt(date.value)

    let dayOfTheWeek = Math.trunc((((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
}

function checkGender() {
    if(female.checked == true) {
        console.log(female.value)
        pickFemaleAkam()
    }
    else if (male.checked == true){
        console.log(male.value)
        pickMaleAkam()
    } else {
        alert("Please select Gender")
    }
} 

function pickFemaleAkam() {
    return 123
}

function pickMaleAkam() {
    return 123
}
