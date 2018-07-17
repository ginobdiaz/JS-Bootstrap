// student score, total possible score
// output: 15/20 -> You got a C (75%)!
// A = 100-90, B = 89-80, C = 79-70, D = 69-60, F >= 59

const gradeCalc = function (score, totalScore) {
        if (typeof score !== 'number' || typeof totalScore !== 'number'){
            throw Error('the score or totalScore is not a number');
        }
        const percent = (score / totalScore) * 100
        let letterGrade = ''

        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }

        return `You got a ${letterGrade} (${percent}%)!`
}

try{
    const result = gradeCalc('ds', 12)
    console.log(result)
}catch (e){
    console.log(e.message);
    
}
