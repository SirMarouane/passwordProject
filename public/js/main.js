// *************** empty array ****************

let areaText = []

// *************** random array ****************

let uppercasePush = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowercasePush = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbersPush = [0,1,2,3,4,5,6,7,8,9]

let symbolsPush = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|',
'[', '{', '}', ']', ':', ';', '<', '>', ',', '.', '?', '/','`', '~']

// *************** query selector ****************

let inputValue = document.querySelector("form").querySelector("input")

let textAreaPassword = document.querySelector("input")

let btn1 = document.querySelector(".btn1")

let btn2 = document.querySelector(".btn2")

let input1 = document.querySelector("input")

let chekbox1 = document.querySelectorAll("form")[1].querySelector("input")

let chekbox2 = document.querySelectorAll("form")[2].querySelector("input")

let chekbox3 = document.querySelectorAll("form")[3].querySelector("input")

let chekbox4 = document.querySelectorAll("form")[4].querySelector("input")

// *************** conditions ****************

btn2.addEventListener("click", () => {
   
    let nbr = inputValue.value

    for (areaText.length; areaText.length < nbr;) {

        if (chekbox1.checked) {
            areaText.push(uppercasePush[Math.floor(Math.random()*uppercasePush.length)])
        
        } 
        
        if (chekbox2.checked && areaText.length < nbr) {
            areaText.push(lowercasePush[Math.floor(Math.random()*lowercasePush.length)])
        }


        if (chekbox3.checked && areaText.length < nbr) {
            areaText.push(numbersPush[Math.floor(Math.random()*numbersPush.length)])
        
        }


        if (chekbox4.checked && areaText.length < nbr) {
            areaText.push(symbolsPush[Math.floor(Math.random()*symbolsPush.length)])
        
        }
    }

    console.log(areaText);
    
    input1.value =  areaText.toString().replace(/,/g,"")

    // randomise = Array.from(randomise)
    // console.log(randomise);
    // randomise = Math.floor(Math.random()*randomise.length)
    // console.log(randomise);
    
    
})

