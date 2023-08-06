// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    //BUTTONS
    const takeOffButton = document.getElementById("takeoff");

    //AREAS
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", function() {

        let shouldTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        //console.log(shouldTakeOff);

        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    });
});