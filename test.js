let year = 1997
let month = 8
let date = 29

function calcDayOfWeek() {     
    let CC = parseInt(year.toString().split("").slice(0,2).join(""))
    let YY = parseInt(year.toString().split("").slice(2).join(""))
    let MM = month
    let DD = date

    return Math.trunc((((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
}


function pickFemaleAkam(calcDayOfWeek) {
    switch(calcDayOfWeek()) {
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
        default:
            return "Hi"
    }  
}

function pickMaleAkam(day) {
    if (day() == 0) {
        return 'Sunday'
    } else if(day() == 1) {
        return 'Monday'
    
    } else if(day() == 2) {
        return 'Tueday'
    
    } else if(day() == 3) {
        return 'Wedday'
    
    } else if(day() == 4) {
        return 'Thursday'
    
    } else if(day() == 5) {
        return 'Friday'
    
    } else if(day() == 6) {
        return 'Saturday'
    }
}

console.log(pickFemaleAkam(calcDayOfWeek))
console.log(pickMaleAkam(calcDayOfWeek))
