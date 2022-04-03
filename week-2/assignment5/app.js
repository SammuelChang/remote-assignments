//2022-04-03 將迴圈內曾加入break條件

function twoSum(nums, target){
    // your code here
    let index = [];
    for ( let i = 0; i < nums.length; i++){
        for ( let j = 0; j < nums.length; j++){
            if ( nums[i] !== nums[j] && (nums[i] + nums[j]) === target && i < j){
                index = [i,j];
                break;
                console.log(`${i},${j}`); //測試有無正確break
            }
        }
    }
    console.log(index)
    }

    twoSum([2, 7, 11, 15], 9)
    /*
    For example:
        twoSum([2, 7, 11, 15], 9); 
        Should returns:[0, 1] 
        Because:nums[0]+nums[1] is 9
    */
