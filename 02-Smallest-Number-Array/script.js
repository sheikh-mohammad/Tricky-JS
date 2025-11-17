var array = [4, 2, 9, 1, 7];
var smallestNum = array[0];

for (let i = 0; i < array.length; i++) {
    if (smallestNum >= array[i]){
        smallestNum = array[i];
    }
}

console.log(smallestNum);