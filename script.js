// =========================================
// STARS
// =========================================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}

// =========================================
// BALLOONS
// =========================================

const balloons=document.getElementById("balloons");

const colors=[
"#ff1744",
"#ffea00",
"#00e676",
"#2979ff",
"#ff9100",
"#d500f9",
"#00bcd4",
"#ff4081"
];

for(let i=0;i<25;i++){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animationDuration=
    (10+Math.random()*10)+"s";

    balloon.style.animationDelay=
    Math.random()*8+"s";

    balloons.appendChild(balloon);

}

// =========================================
// PHOTO FLOAT
// =========================================

const photo=document.querySelector(".photo");

setInterval(()=>{

photo.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-8px)"},

{transform:"translateY(0px)"}

],{

duration:2500,

iterations:1

});

},2500);

// =========================================
// CELEBRATE BUTTON
// =========================================

const btn=document.getElementById("celebrate");

btn.addEventListener("click",()=>{

// Button change

btn.innerHTML="🎉 Happy Birthday! 🎉";

btn.style.background="#00c853";

// Main confetti

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

// Left burst

setTimeout(()=>{

confetti({

particleCount:120,

angle:60,

spread:70,

origin:{x:0}

});

},250);

// Right burst

setTimeout(()=>{

confetti({

particleCount:120,

angle:120,

spread:70,

origin:{x:1}

});

},450);

// Firework effect

let duration=3500;

let animationEnd=Date.now()+duration;

(function frame(){

confetti({

particleCount:4,

startVelocity:35,

spread:360,

ticks:80,

origin:{

x:Math.random(),

y:Math.random()-0.2

}

});

if(Date.now()<animationEnd){

requestAnimationFrame(frame);

}

})();

// Birthday popup

setTimeout(()=>{

alert(

`🎉 Happy Birthday, Satakshi Nandi! ❤️

Wishing you a future filled with success,
happiness, good health, endless blessings,
and the fulfillment of every dream.

May each new day bring you joy,
strength, beautiful memories,
and countless reasons to smile.

Have a truly wonderful birthday
and an amazing year ahead! ❤️`

);

},1200);

});
