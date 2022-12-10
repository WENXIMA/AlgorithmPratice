var addTwoNumbers = function(l1, l2) {
    var l3;
    let i=0;
    var Node;
    if(l1.length<l2.length){
        l3=l2.length;
    }else{
        l3=l1.length;
    }
    while(i<l3){
        const sum = l1.next+l2.next;
        Node.next = sum;
        Node = Node.next;
        i++;
    }
    return Node;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));