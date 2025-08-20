function totalFine( fare ) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }

    let charge = fare * 0.20;
    let serviceCharge = 30;
    let total = fare + charge + serviceCharge;

    return total;
}




function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let cleanedStr = str.split(" ").join("");
    let upperCase = cleanedStr.toUpperCase();
    
    return upperCase;
}





function bestTeam(player1, player2) {
    if (typeof player1 !== "object" ||
         typeof player2 !== "object" ||
          player1 === null ||
          player2 === null)
    {
        return "Invalid";
    }

    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if (score1 < score2) {
        return player1.name;
    } else if (score2 < score1) {
        return player2.name;
    } else {
        return "Tie";
    }
}




function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}




function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];

        if (marks[i] >= 40) {
            passCount++;

        } else {
            failCount++;
        }
    }

    let avg = marks.length === 0 ? 0 : total / marks.length;

    return {
        finalScore: avg,
        pass: passCount,
        fail: failCount
    };
}






