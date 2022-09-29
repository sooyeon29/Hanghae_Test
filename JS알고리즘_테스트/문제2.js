function solution(s) {
    
    let answer = ""
    let word = s.split(" ")    
    let line = word.join("")
    console.log(line)
    
       for(let i = 0; i<line.length; i++) {
        if (i%2 === 0) {
            answer += line[i].toUpperCase()
        } else {
            answer += line[i].toLowerCase()
        }
    } answer
    

    return answer;
}
let s = "hang hae ninety nine"
console.log(solution(s))