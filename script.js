const hours = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");


function hareket(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    sec.style.transform = `rotate(${(180 + (second * 6))}deg)`;
    min.style.transform = `rotate(${(180 + (minute * 6))}deg)`;
    hours.style.transform = `rotate(${(180 + (hour * 30))}deg)`;

    console.log({hour,minute,second})
}
setInterval(hareket,1000)