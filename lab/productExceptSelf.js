function productExceptSelf(nums) {
    let arr = [];
    let sum = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j !== i){
                sum = sum*nums[j]
            }
        }
        arr.push(sum);
        sum = 1;
    }
    return arr 
}