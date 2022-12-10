//Reverse string Question

//Example: WEnxi Ma -> AM IXNEW

function reverse(str){
    var arr  = str.split('');
    var reversearr = [];
    for(let i=arr.length-1;i>=0;i--){ //Complexity O(n)
        reversearr+=arr[i];
    }
    return reversearr;
};
 //function reverse2(str){
//     return str.split('').reverse().join(''); 
//  }

console.log(reverse("HELLO"));