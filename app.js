const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  const date = document.getElementById("date").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value

  checkValidity()
})

function checkValidity() {
  if (date.value > 31 || date.value <= 0) {
    alert("Enter the correct date value")
  } else if (month.value > 12 || month.value <= 0) {
    alert("Enter the correct month value")
  } else if (year.value > 2021) {
    alert("You cannot be born in the future")
  } else if (year.value <= 0) {
    alert("Please enter correct Year of Birth")
  } else {
    checkGender()
  }
}

function calcDayOfWeek() {
  let CC = parseInt(year.value.toString().split("").slice(0, 2).join(""))
  let YY = parseInt(year.value.toString().split("").slice(2).join(""))
  let MM = parseInt(month.value)
  let DD = parseInt(date.value)

  return Math.abs(
    Math.trunc(
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
    )
  )
}

function checkGender() {
  const name = document.querySelector("#name").value
  const male = document.querySelector("#male")
  const female = document.querySelector("#female")

  if (female.checked == true) {
    alert(`Hi ${name}, ${pickFemaleAkam(calcDayOfWeek)}`)
  } else if (male.checked == true) {
    alert(`Hi ${name}, ${pickMaleAkam(calcDayOfWeek)}`)
  } else {
    alert("Please select Gender")
  }
}

const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
const maleNames = ["Kwame","Kwadwo","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"]

function pickFemaleAkam(calcDayOfday) {
  switch (calcDayOfday()) {
    case 0:
      return `you was born on a Saturday, your Akan Name is ${femaleNames[0]}`
    case 1:
      return `you was born on a Sunday, your Akan Name is ${femaleNames[1]}`
    case 2:
      return `you was born on a Monday, your Akan Name is ${femaleNames[2]}`
    case 3:
      return `you was born on a Tuesday, your Akan Name is ${femaleNames[3]}`
    case 4:
      return `you was born on a Wednesday, your Akan Name is ${femaleNames[4]}`
    case 5:
      return `you was born on a Thursday, your Akan Name is ${femaleNames[5]}`
    case 6:
      return `you was born on a Friday, your Akan Name is ${femaleNames[6]}`
  }
}

function pickMaleAkam(day) {
  switch (day()) {
    case 0:
      return `you was born on a Saturday, your Akan Name is ${maleNames[0]}`
    case 1:
      return `you was born on a Sunday, your Akan Name is ${maleNames[1]}`
    case 2:
      return `you was born on a Monday, your Akan Name is ${maleNames[2]}`
    case 3:
      return `you was born on a Tuesday, your Akan Name is ${maleNames[3]}`
    case 4:
      return `you was born on a Wednesday, your Akan Name is ${maleNames[4]}`
    case 5:
      return `you was born on a Thursday, your Akan Name is ${maleNames[5]}`
    case 6:
      return `you was born on a Friday, your Akan Name is ${maleNames[6]}`
  }
}
