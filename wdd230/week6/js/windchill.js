function inputoutput() {
    let intemp = 30 
    let inwindspeed = 7 
    
    let windChillFinal = windChill(intemp, inwindspeed);
    let windChillRound = (Math.round(parseFloat(windChillFinal)));
    document.getElementById('windchill').innerHTML = windChillRound
}

function windChill(intemp, inwindspeed) {
        let f = 35.74 + 0.6215 * intemp - 35.75 * Math.pow(inwindspeed,0.16) + 0.4275 * intemp * Math.pow(inwindspeed,0.16);
        return f;
    }
window.onload = inputoutput;
    