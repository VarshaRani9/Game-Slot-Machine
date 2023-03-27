let value1=document.getElementById('value1');
let value2=document.getElementById('value2');
let value3=document.getElementById('value3');

let inpSpeed = document.getElementById('inpSpeed');

let values = ['😂','😱','🙄','👩‍🎓','✌️','🤣','👍','🫡','🤷‍♀️','👩‍💻','😴','🤩','🙏','🤞','🫰','🤌'];

function getRandomValue(){
    return values[Math.floor(Math.random()*values.length)]
}

let animationId; 

function updateAnimation(newSpeed){
    if(animationId)clearInterval(animationId);
    animationId = setInterval(()=>{
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
    },1000/newSpeed)
}

inpSpeed.onchange = function(ev){
    // document.documentElement => this is ":root" of CSS
    document.documentElement.style.setProperty('--speed',ev.target.value);
    updateAnimation(ev.target.value);
}