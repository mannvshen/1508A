/**
 * Created by lenovo-pc on 2017/10/9.
 */
var arr = [1,2,3,1,4,5,3,5];
function revers(arr){
    var brr = [];
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i]) === -1){
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(revers(arr));
