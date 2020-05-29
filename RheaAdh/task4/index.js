let startmin=25;
let time=startmin*60;


const pomodoro=document.getElementById('pomodoro');
function start(){
    setInterval(updateCount,1000);

    function updateCount(){
        const minutes=Math.floor(time/60);
        let seconds=time%60;
        seconds=seconds<10?'0'+seconds:seconds;
        pomodoro.innerHTML=`${minutes}:${seconds}`
        time--;
    }
           
}
 
 
    

