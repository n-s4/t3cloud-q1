// function centuryFromYear(year) {
//     return Math.ceil(year / 100);
//   }
//   console.log(centuryFromYear(1616))
//   console.log(centuryFromYear(1900))
//   console.log(centuryFromYear(2007))
//   console.log(centuryFromYear(1899))
function getFromYear(year) {
	const century = Math.ceil(year / 100)
	var suffix = "th"
	if (century % 100 >= 10 && century % 100 <= 20) {
		suffix = "th"
	} else if (century % 10 === 1) {
		suffix = "st"
	} else if (century % 10 === 2) {
		suffix = "nd"
	} else if (century % 10 === 3) {
		suffix = "rd"
	}

	return century + suffix + " century"
}

console.log(getFromYear(1901)) // 17th