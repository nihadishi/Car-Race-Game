let racer = document.querySelector(".race");
let car1 = document.querySelector("#merc");
let car2 = document.querySelector("#tesla");
let car3 = document.querySelector("#bmw");
let car4 = document.querySelector("#prius");
let startButton = document.querySelector("#start");
let restartButton = document.querySelector("#restart");
let car1Speed = Math.random();
let car2Speed = Math.random();
let car3Speed = Math.random();
let car4Speed = Math.random();
let car1dist = 0;
let car2dist = 0;
let car3dist = 0;
let car4dist = 0;

startButton.addEventListener("click",()=>{
    this.looprace = setInterval(startRace,2);
});
restartButton.addEventListener("click",()=>{
    car1dist=0;
    car2dist=0;
    car3dist=0;
    car4dist=0;
    car1.style.left = 0;
    car2.style.left = 0;
    car3.style.left = 0;
    car4.style.left = 0;
    car1Speed = Math.random()*0.5;
    car2Speed = Math.random()*0.5;
    car3Speed = Math.random()*0.5;
    car4Speed = Math.random()*0.5;
    clearInterval(looprace);
    carAudio1.pause();
    carAudio2.pause();
});

function startRace(){
    carAudio1 = document.querySelector("#caraudio1");
    carAudio2 = document.querySelector("#caraudio2");
    carAudio1.play();
    carAudio2.play();
    car1dist += car1Speed*1.5;
    car2dist += car2Speed*1.5;
    car3dist += car3Speed*1.5;
    car4dist += car4Speed;
    car1.style.left = car1dist+"px";
    car2.style.left = car2dist+"px";
    car3.style.left = car3dist+"px";
    car4.style.left = car4dist+"px";
    if(Math.max(car1dist,car2dist,car3dist,car4dist)>550) car4Speed=Math.random()*5;

    if(Math.max(car1dist,car2dist,car3dist,car4dist)>1200){
        clearInterval(looprace);
        setTimeout(() => {
            console.log("salam");
        }, 1000);
        carAudio1.pause();
        carAudio2.pause();
        
    }
    
    
        return Math.max(car1dist,car2dist,car3dist,car4dist);
   
    

}

