function windChill(intemp, inwindspeed) {
         if (intemp > 50 || inwindspeed < 3) {
        return 'N/A';
}
        return ((Math.round(parseFloat(
                35.74 + 0.6215 * 
                intemp - 35.75 * 
                Math.pow(inwindspeed,0.16) + 
                0.4275 * intemp * 
                Math.pow(inwindspeed,0.16))))) + '° F'
    }

