function solution(arr1){
	let answer=0;
    let arr2 = []
    //찾을 수 없는 두개의 숫자를 찾아서 넣어줄 배열arr2를 만듭니다.

    //0부터 9까지 수 중 있는지 없는지 확인하기 위하여 i를 0부터 9까지 돌려주는 for 문을 만듭니다.
    for( let i = 0; i<10; i++) {
        // 부정표현인 !를 사용하여 arr1에 포함되어있지 않은 i를 찾아서 미리 만들어둔 arr2배열에 넣어줍니다.
        if (!arr1.includes(i)) {
            arr2.push(i)
            // console.log(arr2)
            // [ 6 ]
            // [ 6, 7 ]

            //찾을 수 없는 숫자는 2개라고 문제에서 주어져 있으므로
            //arr2[0] ~ arr2[1] 번째 숫자를 더해줄것입니다.
            //arr2[1] 숫자와 같은 숫자까지 arr2[0] 숫자 + arr2[0]+1 의 숫자 + arr2[0]+1+1의 숫자 ...으로 더해져 나갑니다
            for( arr2[0]; arr2[0]<=arr2[1]; arr2[0]++ ) {
                answer += arr2[0]
            }        
        }
    } 

	return answer;
}

let arr1=[1,3,5,9,2,4,8,0];
console.log(solution(arr1))
console.log(solution([1,2,4,6,7,8,9,0]))
console.log(solution([7,8,3,5,6,1,2,4]))


//=====================다른풀이=============================
function solution(checkin) {
    let answer = []
    let sum = 0
    for(let i = 0; i < 10; i++) {
      if (!checkin.includes(i)) {
        answer.push(i)
      }
    }
    sum = answer.reduce((a,b) => { return (a+b)*(Math.abs(b-a)+1)/2 })
    return sum
  }
  
  let checkin=[7,8,3,5,6,1,2,4];
  console.log(solution(checkin))