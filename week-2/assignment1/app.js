// 2022-04-03 將maxNumber從0修正為-50000，避免輸入陣列包含負數時，最大值判斷失準
// 2022-04-04 將maxNumber從-50000修正為numbers[0]，避免-50000以下無法比較

function max(numbers){
let maxNumber = numbers[0];
for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
return maxNumber;
}


max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);
