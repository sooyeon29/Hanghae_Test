//배열에서 중복되는 단어를 지운 후에 남은 단어들을 반환할 때는 
//각 문자열의 인덱스 n 번째 글자를 기준으로 오름차순 정렬

// function solution(arr,n) {
//     let dupl = arr.filter((item, index) => arr.indexOf(item) !== index)
    
// }
//     console.log(solution(["brush","sun","brush","bed","car"],1))
    console.log(solution(["banana","cat","car","apple","banana","banana"],0))

    function solution(arr, n) {
  let newArr = []
  const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  const duplicates = findDuplicates(arr)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] != duplicates[0]) {
      newArr.push(arr[i])
    }
  }
  let answer = newArr.sort((a, b) => {
    if(a[n] > b[n]) return 1
      if(a[n] < b[n]) return -1
        if(a[n] === b[n]){
            if(a>b) return 1
            if(a<b) return -1
            return 0
        }
    });
    return answer
}
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"]
let n = 2
console.log(solution(arr,n))