function solution(l1, l2) {
    if (l1===null)
        return l2;
    if (l2===null)
        return l1;
    let ret = new ListNode(Math.min(l1.value,l2.value));
    if (l1.value<l2.value)
        ret.next = solution(l1.next,l2);
    else
        ret.next = solution(l1,l2.next);
    return ret;
}