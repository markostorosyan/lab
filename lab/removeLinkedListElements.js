var removeElements = function(head, val) {
     while(head !== null && head.val === val){
        head = head.next;
    }
    if(head === null){
        return head;
    }
    let pre = head;
    while(pre !== null && pre.next !== null){
        let cur = pre.next;
        if(cur.val !== val){
            pre = cur;
            continue;
        }
        pre.next = cur.next;
    }
    
    return head;
};