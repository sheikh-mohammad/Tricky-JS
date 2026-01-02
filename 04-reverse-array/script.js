var arr = ["mango", "apple", "banana", "orange", "grapes", "pineapple"];
var reversedArr = []

for (var i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i])
}

arr = reversedArr

console.log(arr);
