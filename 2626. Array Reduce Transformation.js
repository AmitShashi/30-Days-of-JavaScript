var reduce = function(nums, fn, init) {
    let acc = init
    nums.forEach((curr)=> {
        acc = fn(acc, curr);
    });
    return acc;
};
