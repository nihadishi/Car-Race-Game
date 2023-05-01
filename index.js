let racer = document.querySelector(".race");
let car1 = document.querySelector("#merc");
let car2 = document.querySelector("#tesla");
let car3 = document.querySelector("#bmw");
let car4 = document.querySelector("#prius");
let startButton = document.querySelector("#start");
let restartButton = document.querySelector("#restart");
let depositButton = document.querySelector("#deposit");
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
    car1Speed = Math.random();
    car2Speed = Math.random();
    car3Speed = Math.random();
    car4Speed = Math.random();
    clearInterval(looprace);
    carAudio1.pause();
});

function startRace(){
    carAudio1 = document.querySelector("#caraudio1");
    carAudio1.play();
    car1dist += car1Speed;
    car2dist += car2Speed;
    car3dist += car3Speed;
    car4dist += car4Speed;
    car1.style.left = car1dist+"px";
    car2.style.left = car2dist+"px";
    car3.style.left = car3dist+"px";
    car4.style.left = car4dist+"px";
    // console.log({
    //     MERC: car1dist,
    //     TESLA: car2dist,
    //     BMW: car3dist,
    //     PRIUS: car4dist
    // });
    if(Math.max(car1dist,car2dist,car3dist,car4dist)>1200){
        clearInterval(looprace);
        carAudio1.pause();
        
    }
        return Math.max(car1dist,car2dist,car3dist,car4dist);
   
    

}

depositButton.addEventListener("click",()=>{
    let deposits =parseInt(document.querySelector("#amount").value);
    let myOption = document.querySelector("#carselect").value;
    // if(isNaN(deposits) || deposits<0) alert("Write Positive Numbers");
    // else{}
        //  document.querySelector("#depositTotal").innerHTML = myOption;
    // }
    console.log(myOption);
})
