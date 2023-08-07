// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;



    //BUTTONS
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");

    //AREAS
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    //ROCKET IMAGE
    const rocket = document.getElementById("rocket");

    takeOffButton.addEventListener("click", function() {
        let shouldTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        //console.log(shouldTakeOff);

        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
        
    });

    abortMission.addEventListener("click", function() {
        let shouldAbortMission = window.confirm("Confirm that you want to abort the mission.");
        
        if (shouldAbortMission) {
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket();
        }
    });

    //Use event delegation for directional buttons
    document.addEventListener("click", function(event){
        let bgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
           // console.log('background width is', bgWidth);
    
        if(event.target.id === "left" && rocketPosX > -(bgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }

        if(event.target.id === "right" && rocketPosX < (bgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }

        if(event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }

        if(event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    function resetRocket() {
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    }


});