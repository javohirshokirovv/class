function correctData(date) {
    if (date < 10) {
        return "0" + date;
    }
    else{
        return date
    }
}

function saleData(){
    let now = new Date ();
    let saleDate = new Date(2024, 5, 29);
    let finish = saleDate - now;

    let days = Math.floor(finish / (24 * 60 *60 * 1000));
    let hours = Math.floor((finish % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((finish % (60 * 60 * 1000))) / (60 *1000);
    

    let timerValue = document.querySelectorAll(".timer_cards .hours");
    timerValue[0].innerHTML = days
    timerValue[1].innerHTML = hours
    timerValue[2].innerHTML = minutes
    console.log(days, hours, minutes, seconds);

    if(finish <)
}
    
    saleData();
    setInterval(()=>{
        saleData();
    },1000)
