const btnSpeed = document.getElementById("speed");
let message = document.getElementById("message");

const initialMessage = "Starting the message"
message.innerText =  initialMessage;
let speed = 1000;
let count = 1;

btnSpeed.addEventListener("change", () => {
    speed = 1000/Number(btnSpeed.value);
    console.log(speed);
    clearInterval("interval");
    startInvertal();
});

startInvertal();

function startInvertal(){
 
    interval = setInterval(()=>{

        message.innerText=initialMessage.slice(0, count);

        if(count > initialMessage.length){
            count = 1;
        }else{
            count++;
        }
        
    }, speed);
}

