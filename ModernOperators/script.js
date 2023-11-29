// let numbers = [ 2 , 3, 4 ]
// // let nr1 , nr2 , nr3 ;
// // nr1 = numbers [0]
// // nr2 = numbers [1]
// // nr3 = numbers [2]

// let [nr1,nr2,nr3] = numbers;
// console.log(numbers)
// console.log(nr1,nr2,nr3)

// // let [a,b,c,d]=[1,2,3,4]

// let nxensit = ["Andi","Aris","Aron","Deniza","Engjull","Ledion"]
// let [nxenesi1 , nxenesi2 ,  , nxenesi3 ,  , nxenesi4] = nxensit ;

// let shkronjat = ['a','b','c','d']
// let[a, ,b,c,] = shkronjat ;


// let nestedArray = [15,20 [14,30 [50,60,50]],4]
// console.log(nestedArray[2][2])
// console.log(nestedArray[2][2][2])

// let [ a,b,c,d ] = nestedArray ;
// let[e,f,[g,h],i] = nestedArray;
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// let numrat =[,,,,[a,b[matchMedia,n]]]  ;
// let  [1,[2,3],4,16,[5,6,[7,8]]]
// console.log(numrat)

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         }
//     }
// }

// let [ushqimi1,ushqimi2] = restaurant.starterMenu ;
// let[pizza,,risotto] = restaurant.mainMenu;

// let {name:emri , lokacioni:adresa , starterMenu:meyjaFillestare } = restaurant



// // spread opertaori

// let vargu1 = [1,2,3]
// let vargu2 = vargu1;

// vargu2.psuh(4)
// vargu2.push(5)
// let vargu3 =[...vargu1];

// vargu3.push('mirjeta')


function shfaqNxensit(...nx){
    console.log('Nxensit na klas time jan' + nx)
}

shfaqNxensit{'mirjeta', 'andi'}
shfaqNxensit{'mirjeta', 'andi', 'aris'}
shfaqNxensit{'mirjeta', 'andi', 'aris' , 'aron'}
shfaqNxensit{'mirjeta', 'andi' , 'aris' , 'aron' , 'ledion'}
