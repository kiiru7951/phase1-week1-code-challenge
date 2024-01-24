function speedDet(speed) {
    // returns ok if speed is less than 70 otherwise if greater it returns demerit points per 5km/h
    if (speed < 70){
        return "Ok"
    } else if (speed > 70) {
        let demeritP = (speed - 70)/5
        return "Points: " + demeritP
    }
}


function LicSusp() {
    let demeritP = speedDet();
    // Invokes speedDet() to get demerit points. If demerit points are greater than 12 it prints "License Suspended"
    if (demeritP > 12){
        return  'License suspended'
    }
}

