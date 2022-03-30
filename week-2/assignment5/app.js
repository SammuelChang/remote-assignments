function twoSum(nums, target){
    // your code here
    let index = [];
    for ( let i = 0; i < nums.length; i++){
        for ( let j = 0; j < nums.length; j++){
            if ( arr[i] !== arr[j] && (arr[i] + arr[j]) === target && i < j){
                index = [i,j]
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
