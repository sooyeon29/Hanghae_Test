function solution(arr, n){
	let answer=[];
    //let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
    let finddupl = arr => 
                   arr.filter((item, i) => arr.indexOf(item) !== i)
                   //filter함수는 화살표의 오른쪽이 true인 것을 찾아준다.
                   
                   //arr.indexOf ---> arr에서 검색하고 싶은 문자열의 위치하는 첫번째 값의 index를 반환한다
                   //그러므로 같은 단어가 있는 경우에는 해당 단어가 있는 가장 앞의 index값이 나오게 된다.
                   //(여기서 0,1,2,3,5,6) 그러므로 i와 같지 않은 경우는 4 이다

    // console.log(finddupl)
    // [Function: finddupl]
    let dupl = finddupl(arr)
    // console.log(dupl)
    // [ 'dog' ]

    //아래 for 문을 통하여 배열에서 [ 'dog' ]와 불일치하는 것을 찾고 이를 미리 지정해둔 answer = []에 .push를 통해 넣어준다.
    for (let i = 0; i< arr.length; i++) {
        if(arr[i] != dupl[0]) {
            answer.push(arr[i])
            // console.log(answer)
            // [ 'coke' ]
            // [ 'coke', 'water' ]
            // [ 'coke', 'water', 'glass' ]
            // [ 'coke', 'water', 'glass', 'yogurt' ]
            // [ 'coke', 'water', 'glass', 'yogurt', 'vitamin' ]            
        }
    }

    //이제 이 배열을 단어의 n번째 알파벳을 비교하여 오름차순으로 나열해야 한다.

    // function compare(a, b) {
    //     if (a is less than b by some ordering criterion) {
    //       return -1;
    //     }
    //     if (a is greater than b by the ordering criterion) {
    //       return 1;
    //     }
    //     // a must be equal to b
    //     return 0;
    //   }
	return answer.sort((a,b) => {
        if(a[n] >b[n]) return 1
        if(a[n] <b[n]) return -1
        if(a[n] === b[n]) {

            // n번째 단어가 같은 경우에는 사전순으로 앞선 문자열이 앞쪽에 위치 한다고 하였으므로
            // a와 b를 비교해준다.
            if(a>b) return 1
            if(a<b) return -1
            if(a === b) return 0}
        }
    )
}
let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n=2;
console.log(solution(arr, n))