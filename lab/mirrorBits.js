function solution(a) {
    let bin = a.toString(2);
    console.log(bin);
    let b = bin.split('').reverse().join('');
    console.log(b);
    let f = Number(b)
    console.log(f);
    return parseInt(f, 2);
}