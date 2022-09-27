/*자연수 뒤집어 더하기
자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요.
예들들어 n이 12345이면 "5+4+3+2+1=15"라는 문자열을 리턴합니다.

n  result
12345 "5+4+3+2+1=15"
1532576 "6+7+5+2+3+5+1=29"

718253 "3+5+2+8+1+7=26"
*/

function solution(n) {
    let result=''
    let answer =0
    let arr = String(n).split('').reverse()

    for (let i = 0; i<arr.length; i++) {
        answer += parseInt(arr[i])
        result += `${parseInt(arr[i])}`
        
        if (i<arr.length-1) {
            result += '+'
        }
    }
     // console.log(answer)
     let b = result
     // console.log(b) 
     let final = `${b} = ${answer}`
     return final

    // return result + "=" + answer

}

console.log(solution(718253))