// 2022-04-03 將maxNumber從0修正為-50000，避免輸入陣列包含負數時，最大值判斷失準

function max(numbers){
let maxNumber = -50000;
for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
return maxNumber;
}


max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);
