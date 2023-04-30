
let racer = document.querySelector(".race");
// console.log(racer);
let car1 = document.querySelector("#bmw");
let car2 = document.querySelector("#merc");
let car3 = document.querySelector("#prius");
let startButton = document.querySelector("#start");
let restartButton = document.querySelector("#restart");
let car1Speed = Math.random();
let car2Speed = Math.random();
let car3Speed = Math.random();
let car1dist = 0;
let car2dist = 0;
let car3dist = 0;



startButton.addEventListener("click",()=>{
    this.looprace = setInterval(startRace,2);
});
restartButton.addEventListener("click",()=>{
    car1dist=0;
    car2dist=0;
    car3dist=0;
    car1.style.left = 0;
    car2.style.left = 0;
    car3.style.left = 0;
    car1Speed = Math.random();
    car2Speed = Math.random();
    car3Speed = Math.random();
});


function startRace(){
    // console.log("FUNCTION");
    // console.log(car1dist,car2dist,car3dist);
    car1dist += car1Speed;
    car2dist += car2Speed;
    car3dist += car3Speed;
    car1.style.left = car1dist+"px";
    car2.style.left = car2dist+"px";
    car3.style.left = car3dist+"px";
    console.log({
        BMW: car1dist,
        MERC: car2dist,
        PRIUS: car3dist
    });
    if(Math.max(car1dist,car2dist,car3dist)>1200){
        clearInterval(looprace);
    }
    return Math.max(car1dist,car2dist,car3dist);
    

}