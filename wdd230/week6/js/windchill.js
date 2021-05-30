function inputoutput() {
    let intemp = parseFloat(document.getElementById('temp').textContent);
    let inwindspeed = parseFloat(document.getElementById('windspeed').textContent);
    
    let windChillFinal = windChill(intemp, inwindspeed);
        document.getElementById('windchill').innerHTML = windChillFinal
}

function windChill(intemp, inwindspeed) {
         if (intemp > 50 || inwindspeed < 3) {
        return 'no chill';
}
        return ( (Math.round(parseFloat(
                35.74 + 0.6215 * 
                intemp - 35.75 * 
                Math.pow(inwindspeed,0.16) + 
                0.4275 * intemp * 
                Math.pow(inwindspeed,0.16)))))
    }
window.onload = inputoutput;

/* function inputoutput() {
    let intemp = parseFloat(document.getElementById('temp').textContent);
    let inwindspeed = parseFloat(document.getElementById('windspeed').textContent);
    
    let windChillFinal = windChill(intemp, inwindspeed);
    let windChillRound = (Math.round(parseFloat(windChillFinal)));
    document.getElementById('windchill').innerHTML = windChillRound
}

function windChill(intemp, inwindspeed) {
        let f = 35.74 + 0.6215 * intemp - 35.75 * Math.pow(inwindspeed,0.16) + 0.4275 * intemp * Math.pow(inwindspeed,0.16);
        return f;
    }

window.onload = inputoutput; */