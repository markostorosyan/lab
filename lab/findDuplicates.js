function findDuplicates(nums) {
    let obj = {};
    let count = 0;
    let j = 1;
    for(let i = 0; i < nums.length; i++) {
        while(j < nums.length) {
            if(nums[i] === nums[j]) {
                obj[nums[i]] = ++count;
            }
            j++;
        }
        j = 0;
        count = 0
    }
    let arr = [];

    for(let h in obj) {
        if(obj[h] !== 1) {
            arr.push(Number(h));
        }
    }

    return arr;
}