function max(numbers){
let maxNumber = 0;
for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
return maxNumber;
}


max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);
