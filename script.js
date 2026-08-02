const stars = document.getElementById("stars");

for(let i=0;i<150;i++){

    let star=document.createElement("div");

    let size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}

const balloons=document.getElementById("balloons");

const colors=[
"#ff1744",
"#ffea00",
"#00e676",
"#2979ff",
"#ff9100",
"#d500f9",
"#00bcd4"
];

for(let i=0;i<20;i++){

    let balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
        colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animation=
        "fly "+(8+Math.random()*8)+"s linear infinite";

    balloon.style.animationDelay=
        Math.random()*6+"s";

    balloons.appendChild(balloon);

}

document.getElementById("enterButton").addEventListener("click",function(){

    this.innerHTML="🎉 Happy Birthday 🎉";

    this.style.background="#00c853";

    alert(
`🎂 Happy Birthday, Satakshi! ❤️

May your special day be filled with joy,
love, laughter, success, good health,
and beautiful memories.

Wishing you a wonderful year ahead! 🎉`
);

});
