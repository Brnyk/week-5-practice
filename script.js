const data = [
    {
        name: "Luka Modric",
        age: 38,
        pets: ["Kroos", "Bellingham", "Vinicius Jr"],
        mostRecentPurchase: {
            price: 15000,
            color: "turquoise"
        }
    },
    {
        name: "Pablo Emilio Escobar",
        age: 77,
        pets: ["Cocaine", "El Doctor", "Police"],
        mostRecentPurchase: {
            price: 10000,
            color: "white"
        }
    },
    {
        name: "Lakatos Spíderman",
        age: 12,
        pets: ["Venom", "MJ", "Goblin"],
        mostRecentPurchase: {
            price: 12875,
            color: "red"
        }
    },    
    {
        name: "Ben Dover",
        age: 33,
        pets: ["Brexit", "Pint", "Roast", "Crisps"],
        mostRecentPurchase: {
            price: 8765,
            color: "black"
        }
    },    
    {
        name: "Jenny Tayla",
        age: 69,
        pets: ["Peepee", "Poopoo", "Voodoo", "Doll"],
        mostRecentPurchase: {
            price: 6666,
            color: "gold"
        }
    },
    {
        name: "Julius Bartalomeo the third",
        age: 11,
        pets: ["Giganto", "Pedro", "Szotyi", "Kázmér"],
        mostRecentPurchase: {
            price: 11100,
            color: "black"
        }
    },    
    {
        name: "Sal Ami",
        age: 55,
        pets: ["Steak", "Bologna", "Salami"],
        mostRecentPurchase: {
            price: 9567,
            color: "red"
        }
    },    
    {
        name: "Kalapos Lajos",
        age: 67,
        pets: ["Szmötyi", "Szutyok", "Porfelhő"],
        mostRecentPurchase: {
            price: 7568,
            color: "yellow"
        }
    },    
    {
        name: "Elemér a Denevér",
        age: 70,
        pets: ["Covix", "Kelemen", "Kapor"],
        mostRecentPurchase: {
            price: 5554,
            color: "black"
        }
    },    
    {
        name: "Kalpagos Eduárd Béla",
        age: 60,
        pets: ["Kelemen", "Ifj.Kelemen", "Kálmán"],
        mostRecentPurchase: {
            price: 6420,
            color: "silver"
        }
    },
]



/* for (let i = 0; i < data.length; i++) {
    
    if(data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000)
    
    console.log(data[i])
}
 */


function addTwoNumbers(number1, number2) {
    let sum = number1 + number2

    return sum  // <- visszaadja a sum ÉRTÉKÉT, RETURN AD VISSZA ÉRTÉKET EGY FÜGGVÉNYBŐL
}

/* const addTwoNumbersResult = addTwoNumbers(1, 2)
console.log("addTwoNumbers: ", addTwoNumbersResult)
 */
// stringek összefűzése

function concatenateArray (array) {
/*     let result = ""

    array.forEach((string) => {
       result += string
    });

    return result */

    let result = array.join("")

    return result
}

const arrayOfStrings = ["kismacska", "codecool", "javascript", "wednesday", "exam"]

const concatArrayResults = concatenateArray(arrayOfStrings) 
// console.log("concat array:",concatArrayResults)



function getOldPeople (arrayOfUsers, minimumAge) {
   let result = []
   
    arrayOfUsers.map((person) => {
       if (person.age >= minimumAge){
        result.push(person)
       }
    })
    return result
}

const oldPeople = getOldPeople(data, 60)
// console.log(oldPeople)

function getRichPeople(arrayOfUsers, minimumPrice) {
   let result = arrayOfUsers.filter((person) => person.mostRecentPurchase.price > minimumPrice)
    return result
}

const richPeople = getRichPeople(data, 15000)
// console.log(richPeople)

function goodRecommendationFor (arrayOfUsers, newOffer) {
    let result = []
    
    
    /* for (let i = 0; i < arrayOfUsers.length; i++){
        // console.log(arrayOfUsers[i].mostRecentPurchase)
        if (arrayOfUsers[i].mostRecentPurchase.color === newOffer.color && arrayOfUsers[i].mostRecentPurchase.price > newOffer.price) {
            result.push(arrayOfUsers[i].name)
        }
    }
    return result */


    // ugyan ez filterrel
    
    result = arrayOfUsers.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price)
    
    return result
}


const newOffer1 = {
    color: "black",
    price: 8000
}

const newOffer2 = {
    color: "yellow",
    price: 5000
}


const goodRecommendations = goodRecommendationFor(data, newOffer2)
console.log(goodRecommendations)


