// let koha;
// koha = new Date() ; 
// console.log(koha) ;


// let kohha ;
// kohha = new Date (2021,0,12,8,7,2);
// console.log(kohha)



// var intervali = setInterval(test,6000)

// function test(){
//     alert("Hello Jcoders!");
// }


// function test(){
//     console.log(count);
//     count++;
//     if(count == 10 ){
//     clearInterval(test);
// }
// }

// const User = " John";
// function greet (userName){
//     alert("Welcome" + userName)
// }
// setTimeout(greet,8000,user)



let intervalId;


function shfaqOren() {
    const clock = new Date();
    const ora = clock.toLocaleTimeString();
    document.getElementById('ora').innerHTML = ora;
    

}

function startInterval(){
    shfaqOren();
    intervalId = setInterval(shfaqOren, 1000);
}

function stopInterval(){
    clearInterval(intervalId)
}



