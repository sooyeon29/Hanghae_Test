// "1012345678" => "010-1234-5678"

function solution(n) {
    let arr = n.split("")
    arr.splice(0,0,'0')
    arr.splice(3,0,'-')
    arr.splice(8,0,'-')
    
return arr.join('')
}

console.log(solution("1012345678"))