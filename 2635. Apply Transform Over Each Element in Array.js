/*
If not today then tomorrow, this is how you will eventually write. because its the best way👍

Explanation:
just learn how to use map method on
https://www.w3schools.com/js/js_array_iteration.asp
no explanation is required after that.
*/

var map = function(arr, fn) {
    return arr.map((val,idx)=>{ return fn(val,idx) });
};
