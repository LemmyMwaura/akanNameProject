const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  const date = document.getElementById("date").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value
  const male = document.querySelector("#male")
  const female = document.querySelector("#female")

  checkValidity(date, month, year)
})

function checkValidity(date, month, year) {
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
  let CC = parseInt(year.value.split("").slice(0, 2).join(""))
  let YY = parseInt(year.value.split("").slice(2).join(""))
  let MM = parseInt(month.value)
  let DD = parseInt(date.value)

  return Math.trunc(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  )
}

function checkGender() {
  const name = document.querySelector("#name").value

  if (female.checked == true) {
    alert(`Hi ${name},${pickFemaleAkam(calcDayOfWeek)}`)
  } else if (male.checked == true) {
    alert(`Hi ${name}, ${pickMaleAkam(calcDayOfWeek)}`)
  } else {
    alert("Please select Gender")
  }
}

function pickFemaleAkam(day) {
  switch (day()) {
    case 0:
      return "you was born on a Saturday, your Akan Name is Ama"
    case 1:
      return "you was born on a Sunday, your Akan Name is Akosua"
    case 2:
      return "you was born on a Monday, your Akan Name is Adwoa"
    case 3:
      return "you was born on a Tuesday, your Akan Name is Abenaa"
    case 4:
      return "you was born on a Wednesday, your Akan Name is Akua"
    case 5:
      return "you was born on a Thursday, your Akan Name is Yaa"
    case 6:
      return "you was born on a Friday, your Akan Name is Afua"
  }
}

function pickMaleAkam(day) {
  switch (day()) {
    case 0:
      return "you was born on a Saturday, your Akan Name is Kwame"
    case 1:
      return "you was born on a Sunday, your Akan Name is Kwasi"
    case 2:
      return "you was born on a Monday, your Akan Name is Kwadwo"
    case 3:
      return "you was born on a Tuesday, your Akan Name is Kwabena"
    case 4:
      return "you was born on a Wednesday, your Akan Name is Kwaku"
    case 5:
      return "you was born on a Thursday, your Akan Name is Yaw"
    case 6:
      return "you was born on a Friday, your Akan Name is Kofi"
  }
}

