var firstUniqChar = function(s) {
    let arr = [];
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(s[i] === s[j]) {
                arr[i] = ++count
            }
        }
        count = 0;
    }
    
    return arr.findIndex((val) => {
        return val === 1
    })
    
};