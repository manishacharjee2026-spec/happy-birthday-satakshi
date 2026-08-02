const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

let s=document.createElement("div");

let size=Math.random()*3+1;

s.style.width=size+"px";
s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=(1+Math.random()*3)+"s";

stars.appendChild(s);

}

const balloons=document.getElementById("balloons");

const colors=[
"#ff1744",
"#ffea00",
"#00e676",
"#2979ff",
"#ff9100",
"#d500f9",
"#00b8d4"
];

for(let i=0;i<25;i++){

let b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"vw";

b.style.background=colors[Math.floor(Math.random()*colors.length)];

b.style.animationDuration=(8+Math.random()*10)+"s";

b.style.animationDelay=Math.random()*8+"s";

balloons.appendChild(b);

}

document.getElementById("enterButton").onclick=function(){

alert("Welcome to Satakshi's Birthday Celebration! 🎉\n\nPart 2 will begin with fireworks, confetti and the grand celebration.");

}
