
const days = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
let round = 0;
var sw = true;


const currentYear = new Date().getFullYear();

var newYearTime = new Date(currentYear+1,0,1,0,0,0);


/*'January 1 $ {currentYear+1} 00:00:00'*/


function updateCountDown(){
    const currenTime = new Date();


    const diff = newYearTime-currenTime;

    console.log(newYearTime);
    console.log(currenTime);
    
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000) % 60;
    

    days.innerHTML = d;
    hour.innerHTML = h<10?'0'+h:h;
    minute.innerHTML = m<10?'0'+m:m;
    second.innerHTML = s<10?'0'+s:s;
    if(!isNewYear()){
    switch(round){
        case 0:
            document.getElementById('seconds').style.webkitTextFillColor = 'transparent';                            
            document.getElementById('days').style.webkitTextFillColor = 'red';
            round++;
            break;
        case 1:
            document.getElementById('days').style.webkitTextFillColor = 'transparent';
            document.getElementById('hours').style.webkitTextFillColor = 'red';
            round++;
            break;
        case 2:
            document.getElementById('hours').style.webkitTextFillColor = 'transparent';
            document.getElementById('minutes').style.webkitTextFillColor = 'red';
            round++;
            break;
        case 3:
            document.getElementById('minutes').style.webkitTextFillColor = 'transparent';
            document.getElementById('seconds').style.webkitTextFillColor = 'red';
            round=0;
            break;
        default:
            round = 10;
            break;
    }

    }
    else{
        days.innerHTML = 'B';
        hour.innerHTML = 'U';
        minute.innerHTML = 'É';
        second.innerHTML = 'K';
        var confettiSettings = {target : 'my-canvas'};
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        

        if(sw){
            sw = false;             
            document.getElementById('days').style.webkitTextFillColor = 'red';
            document.getElementById('hours').style.webkitTextFillColor = 'red';
            document.getElementById('minutes').style.webkitTextFillColor = 'red';
            document.getElementById('seconds').style.webkitTextFillColor = 'red';
        }
        else{
            sw = true;
            document.getElementById('days').style.webkitTextFillColor = 'transparent';
            document.getElementById('hours').style.webkitTextFillColor = 'transparent';
            document.getElementById('minutes').style.webkitTextFillColor = 'transparent';
            document.getElementById('seconds').style.webkitTextFillColor = 'transparent';
        }
    }
}

setInterval(updateCountDown,1000);





function isNewYear(){
    console.log('CHECK');
    if(days.innerHTML>363||days.innerHTML<0)
        return true;
    else
        return false;
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{
cursor.style.left = e.clientX+'px';
cursor.style.top = e.clientY+'px';
})


