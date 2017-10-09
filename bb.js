/**
 * Created by lenovo-pc on 2017/10/9.
 */
var arr = [1,2,4,3,5,1,5,6,4,3];
var brr = [];
for(var i=arr.length-1;i>0;i--){
    if(brr.indexOf(arr[i]) === -1){
        brr.unshift(arr[i]);
    }
}
console.log(brr)
