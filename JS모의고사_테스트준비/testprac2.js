/*두 행렬의 절댓값을 차례로 담은 정수 배열 arr1, arr2와 행렬의 부호를 차례로 담은 불리언 배열 signs가 매개변수로 주어진다
두행렬의 부호는 같다
실제 행렬 덧셈의 결과를 반환하는 함수?
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

arr1    arr2    arr3               result
[5,7,1] [5,1,6] [true,true,false]  [10,8,-7]
[2,3,5] [7,5,6] [false,true,false] [10,8,-7]
*/

// function solution(arr1, arr2, arr3) {
//   let answer = []
//   for(let i = 0 ; i <arr3. length; i++) {
//     if (arr3[i] === true) {
//       answer.push(arr1[i]+arr2[i])
//     }
//     else {
//       answer.push(-(arr1[i]+arr2[i]))
//     }
//   }
//   return answer
// }

// console.log(solution([5,7,1],[5,1,6],[true,true,false]))

// 행렬의 덧셈인데 다 더하고 false이면 - 붙이기
// [5,7,1] [5,1,6] [true, true, false] [10,8,-7]
// [2,3,5] [7, 5, 6] [false, true, false] [-9,8,-11]

function solution(arr1, arr2, arr3) {
  let answer = []
  for(let i = 0 ; i <arr3. length; i++) {
    if (arr3[i] === true) {
      answer.push(arr1[i]+arr2[i])
    }
    else {
      answer.push(-(arr1[i]+arr2[i]))
    }
  }
  return answer
}

console.log(solution([5,7,1], [5,1,6], [true, true, false]))
console.log(solution([2,3,5], [7,5,6], [false, true, false]))