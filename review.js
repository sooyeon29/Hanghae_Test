
function solution(n) {
    let arr = n.toString().split("").reverse()    // 숫자 -> 배열 -> 각 원소로 나눔 -> 거꾸로 만듬 [5,4,3,2,1]
    let sum = 0                                   // 합을 넣을 변수
    for(let i = 0; i<arr.length; i++) {           // arr의 길이 만큼 반복문
      sum += Number(arr[i])                       // arr 값을 형변환 하여 더해줌
    }
    let k = `${arr.join("+")} = ${sum}`           // 각 arr 값 사이에 + 넣고 sum 값이 나오도록 문장 만들어줌
    return k                                     // sum 반환
  }
  
  console.log(solution(718253))
  
  // function solution(arr1, arr2) {
  //   let sum = 0                                     // 시간 합을 받을 변수
  //   for(let i = 0 ; i <arr2.length; i++) {          // 배열의 길이 만큼 반복문
  //     if(arr2[i] >= 29) {                           // 만약 새벽5시 정각 이상이면
  //       arr2.splice(i,1,21)                         // 21로 변경
  //     }
  //     sum += arr2[i] - arr1[i]                      // sum = 뺀 값들의 합
  //   }
  //   return sum
  // }
  // let checkin = [9,9,9,9,7,9,8]
  // let checkout = [23,23,30,28,30,23,23]
  // console.log(solution(checkin, checkout))
  
  
  // function isPrime(num) {
  //   for (let i = 2; i <= Math.sqrt(num); i++) {           // 2부터 num제곱근까지의 수로 num을 나눴을 때
  //     if (num % i === 0) return false                      // 만약 2로 나누어 그건 소수가 아님
  //   }
  //   return num > 1                                        // 안 나누어 떨어지면 1보다 높은 값을은 보여주기
  // }
  
//   function solution(n) {
//     let answer = n.toString().split(" ")
//     // console.log(answer)
//     let m = []
//     let o = []
//     for(let  i = 0; i < answer.length; i++) {
//       if(isPrime(answer[i])) {
//         m.push(answer[i])
//       }
//       else {
//         o.push(answer[i])
//       }
//     }
//     let output = `${Math.min(...o)} ${Math.max(...m)}`
//     return output  
//   }
  
//   let s="97 75 88 99 95 92 73"
//   console.log(solution(s))
  