function solution(s) {
let total = ""
let result =""
let answer = ""
let word = s.split(" ")
// let line = s.split(" ").join("")
let line = word.join("")

   for(let i = 0; i<line.length; i++) {
    if (i%2 === 0) {
        answer += line[i].toUpperCase()
    } else {
        answer += line[i].toLowerCase()
    }
} result = answer.split("")

for(let j = 0; j<word.length; j++) {
    result.splice(word[j].length,0," ")
}

// .splice(word[j].length,0," ")
 return result
}


let s ="hang hae ninety nine"

console.log(solution(s))
