var isPalindrome = function(s) {
    let str = s.toLowerCase().split('');
    let fil = str.filter((val) => {
        if(val.charCodeAt(0) >= 97 && val.charCodeAt(0) <= 122 || val.charCodeAt(0) >= 48 && val.charCodeAt(0) <= 57) {
            return val;
        }
    })
    let a = fil.join('');
    let re = fil.reverse().join('');
    if(re === a) {
        return true
    }
    return false 
};