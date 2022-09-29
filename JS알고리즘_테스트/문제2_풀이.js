function solution(s){
    let answer = ""
    let sum = 0
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]=== ' ' ) {
        answer += ' '
        continue
      }else {
      if(sum%2===0) {
        answer += arr[i].toUpperCase() 
        sum++
      }else {
        answer += arr[i].toLowerCase()
        sum++
      }
     }
   }
   return answer
  }
  
  console.log(solution("hang hae ninety nine"))