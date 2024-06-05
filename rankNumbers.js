var value = effect("Point Control")("Point")[0].toFixed(0)
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

if(Number(value) == 1)
   addCommas(value) + "st"
else if(Number(value) == 2)
   addCommas(value) + "nd"
else if(Number(value) == 3)
   addCommas(value) + "rd"
else if(Number(value) % 100 == 11)
   addCommas(value)+ "th"
else if(Number(value) % 100 == 12)
   addCommas(value)+ "th"
else if(Number(value) % 100 == 13)
   addCommas(value)+ "th"
else if(Number(value) % 100 == 21)
   addCommas(value)+ "st"
else if(Number(value) % 100 == 22)
   addCommas(value)+ "nd"
else if(Number(value) % 100 == 23)
   addCommas(value)+ "rd"
else if(Number(value) % 10 == 1)
   addCommas(value) + "st"
else if(Number(value) % 10 == 2)
   addCommas(value)+ "nd"
else if(Number(value) % 10 == 3)
   addCommas(value)+ "rd"
else
   addCommas(value)+ "th"