function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let cleanedStr = str.split(" ").join("");
    let upperCase = cleanedStr.toUpperCase();
    return upperCase;
}




console.log(onlyCharacters("  h e llo wor   ld")); // "HELLOWORLD"
console.log(onlyCharacters("Cy   bar- At  tac k  ")); //   "CYBAR-ATTACK"
console.log(onlyCharacters(" ha ck m e 1 @ru.c  n  ")); // "HACKME1@RU.CN"
console.log(onlyCharacters("Serv er : : Do wn"));   // "SERVER::DOWN"
console.log(onlyCharacters(["hack", "me"])); // "Invalid"
console.log(onlyCharacters(true)); // "Invalid"