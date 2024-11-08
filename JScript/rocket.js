let timer = null;
let countdownNumber = 10;

let changeState = function (state) {
    document.body.className = `body-state${state}`;

    // Stopper eventuell eksisterende timer før en ny startes
    if (timer) {
        clearInterval(timer);
        countdownNumber = 10;
        
    }

    if (state === 2) {
        // Setter nedtelling til 10 hver gang state blir 2
        countdownNumber = 10;
        document.getElementById("countdown").innerHTML = countdownNumber;

        timer = setInterval(function() {
            countdownNumber -= 1;
            document.getElementById("countdown").innerHTML = countdownNumber; 

            // Stopper timeren når nedtellingen når null
            if (countdownNumber <= 0) {
                clearInterval(timer);
                changeState(3); // Går videre til state 3 (LIFT OFF) når nedtellingen er ferdig
            }
        }, 500);
    } else if (state==3) {
        let success = setTimeout (function () 
            {
                let randomNumber = Math.round (Math.random()*10);
                console.log("randomNumer:", randomNumber)
                //SUCCESS
                if (randomNumber >5){
                    changeState (4);
                } else {
                    changeState(5); //oh No!
                }
            },2000);
    };
}