/* 소수의 개수와 덧셈
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫사 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 
"(최소값)(최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

-s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
-문자열에는 소수가 한개 이상 섞여있으며, 음수는 없습니다.

s                          result
"2 3 4 5"                  "4 5"
"15 3 10 9 7 8"            "8 7"

"97 75 88 99 95 92 73"     "75 97"
*/

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {           // 2부터 num제곱근까지의 수로 num을 나눴을 때
      if (num % i === 0) return false                      // 만약 2로 나누어 그건 소수가 아님
    }
    return num > 1                                        // 안 나누어 떨어지면 1보다 높은 값을은 보여주기
  }                                                       // ---> 소수
  
  function solution(n) {
    let answer = n.toString().split(" ")                  //n을 문자열로 바꾼후 split을 통해 배열로 변경해준다
    // console.log(answer)                                //["97", "75", "88", "99", "95", "92", "73"]
    let m = []                                            //변수를 만들어줌 
    let o = []
    for(let  i = 0; i < answer.length; i++) {             
      if(isPrime(answer[i])) {
        m.push(answer[i])                                 //위의 배열중 소수라면 변수 m에 넣어줌
      }
      else {
        o.push(answer[i])                                 //소수가 아니라면 변수 o에 넣어줌
      }
    }
    let output = `${Math.min(...o)} ${Math.max(...m)}`     //소수가 아닌 수의 최소값 & 소수중의 최대값을 찾아서 output이라는 변수로 지정
    return output                                          //output 값을 받아준다
  }
  
  let s="97 75 88 99 95 92 73"
  console.log(solution(s))
  