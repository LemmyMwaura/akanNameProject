const submit = document.getElementById("submit")
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  const date = document.getElementById("date").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value
  const male = document.querySelector("#male")
  const female = document.querySelector("#female")

  checkValidity()
})

function checkValidity(event) {
  if (date.value.length == 0 && month.value.length == 0) {
    alert("Please Enter your Date of Birth")
  } else {
    if (date.value > 31 || date.value <= 0) {
      alert("Enter the correct date value")
    }
    if (month.value > 12 || month.value <= 0) {
      alert("Enter the correct month value")
    }
    if (year.value > 2021) {
      alert("You cannot be born in the future")
    } else if (year.value <= 0) {
      alert("Please enter correct Year of Birth")
    } else {
      checkGender()
    }
  }
}

function calcDayOfWeek() {
  let CC = parseInt(year.value.split("").slice(0, 2).join(""))
  let YY = parseInt(year.value.split("").slice(2).join(""))
  let MM = parseInt(month.value)
  let DD = parseInt(date.value)

  return Math.trunc(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  )
}

function checkGender() {
  if (female.checked == true) {
    alert(`Your AkanName is ${pickFemaleAkam(calcDayOfWeek)}`)
  } else if (male.checked == true) {
    alert(`Your AkanName is ${pickMaleAkam(calcDayOfWeek)}`)
  } else {
    alert("Please select Gender")
  }
}

function pickFemaleAkam(day) {
  switch (day()) {
    case 0:
      return "Ama"
    case 1:
      return "Akosua"
    case 2:
      return "Adwoa"
    case 3:
      return "Abenaa"
    case 4:
      return "Akua"
    case 5:
      return "Yaa"
    case 6:
      return "Afua"
  }
}

function pickMaleAkam(day) {
  switch (day()) {
    case 0:
      return "Kwame"
    case 1:
      return "Kwasi"
    case 2:
      return "Kwadwo"
    case 3:
      return "Kwabena"
    case 4:
      return "Kwaku"
    case 5:
      return "Yaw"
    case 6:
      return "Kofi"
  }
}
