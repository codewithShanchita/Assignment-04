function totalFine( fare ) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }

    let charge = fare * 0.20;
    let serviceCharge = 30;
    let total = fare + charge + serviceCharge;
    return total;
}
console.log(totalFine("fsd"));