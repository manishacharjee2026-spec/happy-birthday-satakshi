const stars = document.getElementById("stars");
const balloons = document.getElementById("balloons");

// --------------------
// Create Stars
// --------------------

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

// --------------------
// Balloon Colors
// --------------------

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

// --------------------
// Create Balloons
// --------------------

for(let i=0;i<20;i++){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animation=
    "fly "+(8+Math.random()*10)+"s linear infinite";

    balloon.style.animationDelay=
    Math.random()*8+"s";

    balloons.appendChild(balloon);

}

// --------------------
// Celebrate Button
// --------------------

document.getElementById("celebrate").onclick=function(){

    this.innerHTML="🎉 Happy Birthday! 🎉";

    this.style.background="#00c853";

    this.style.transform="scale(1.08)";

    alert(

`🎂 Happy Birthday, Satakshi! ❤️

May your special day be filled with
love, happiness, laughter, success,
good health and unforgettable memories.

May every dream come true.

Have a wonderful birthday! 🎉`

    );

};

// --------------------
// Small Floating Effect
// --------------------

setInterval(()=>{

    document.querySelector(".photo").animate(

        [

            {transform:"translateY(0px)"},

            {transform:"translateY(-8px)"},

            {transform:"translateY(0px)"}

        ],

        {

            duration:2500,

            iterations:1

        }

    );

},2500);
