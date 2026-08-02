*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    overflow:hidden;
    height:100vh;

    background:linear-gradient(-45deg,#6a11cb,#2575fc,#8e2de2,#4a00e0);
    background-size:400% 400%;
    animation:bgMove 15s ease infinite;
}

@keyframes bgMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.hero{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
}

.glass{

    width:850px;
    max-width:95%;

    background:rgba(255,255,255,.12);

    backdrop-filter:blur(15px);

    border-radius:25px;

    padding:40px;

    text-align:center;

    box-shadow:0 0 40px rgba(0,0,0,.3);

}

.welcome{

    color:white;
    letter-spacing:4px;
    margin-bottom:25px;
    font-weight:300;

}

.name{

    font-size:70px;
    margin-bottom:10px;

}

.name span{

    display:inline-block;

    color:white;

    margin:6px;

    animation:bounce 2s infinite;

}

.name span:nth-child(2){animation-delay:.2s;}
.name span:nth-child(3){animation-delay:.4s;}
.name span:nth-child(4){animation-delay:.6s;}
.name span:nth-child(5){animation-delay:.8s;}
.name span:nth-child(6){animation-delay:1s;}
.name span:nth-child(7){animation-delay:1.2s;}
.name span:nth-child(8){animation-delay:1.4s;}

@keyframes bounce{

0%,100%{

transform:translateY(0);

}

50%{

transform:translateY(-15px);

}

}

.birthday{

font-family:'Great Vibes',cursive;

font-size:65px;

color:#ffd54f;

margin-bottom:20px;

}

.photo{

width:260px;

height:260px;

object-fit:cover;

border-radius:50%;

border:6px solid white;

display:block;

margin:25px auto;

box-shadow:0 0 30px rgba(255,255,255,.7);

}

.message{

color:white;

font-size:20px;

line-height:1.8;

margin-top:20px;

margin-bottom:35px;

}

button{

padding:18px 45px;

font-size:20px;

border:none;

border-radius:50px;

background:#ff4081;

color:white;

cursor:pointer;

transition:.3s;

}

button:hover{

transform:scale(1.08);

background:#ff1744;

}

#stars div{

position:absolute;

background:white;

border-radius:50%;

animation:twinkle infinite alternate;

}

@keyframes twinkle{

from{opacity:.2;}

to{opacity:1;}

}

.balloon{

position:absolute;

bottom:-150px;

width:60px;

height:80px;

border-radius:50%;

}

.balloon::after{

content:"";

position:absolute;

width:2px;

height:90px;

background:white;

left:50%;

top:80px;

}

@keyframes fly{

0%{

transform:translateY(0);

}

100%{

transform:translateY(-130vh);

}

}

@media(max-width:768px){

.name{

font-size:42px;

}

.birthday{

font-size:42px;

}

.photo{

width:190px;

height:190px;

}

.message{

font-size:16px;

}

button{

font-size:18px;

padding:15px 35px;

}

}
