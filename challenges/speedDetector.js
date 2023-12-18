function speedDet(speed) {
    if (speed < 70){
        return "Ok"
    } else if (speed > 70) {
        let demeritP = (speed - 70)/5
        return "Points: " + demeritP
    }
}


function LicSusp() {
    let demeritP = speedDet();
    // Invokes speedDet() to get demerit points
    if (demeritP > 12){
        return  'License suspended'
    }
}

