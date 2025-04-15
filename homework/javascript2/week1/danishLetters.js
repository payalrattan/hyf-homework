function countDanishLetters(str) {
    const danishLetters = ['æ', 'ø', 'å'];
    let letterCount = { total: 0 };

    for (let char of str) {
        if (danishLetters.includes(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
            letterCount.total++;
        }
    }
    return letterCount;
}
const danishString = "Jeg har en blå bil";
countDanishLetters(danishString);