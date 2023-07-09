var cancellable = function(fn, args, t) {
    let cancelled = false; // cancellation flag
    let timer = setTimeout(() => {
        if (cancelled == false) { // if not cancelled, call the function
            fn(...args);
        }
    }, t);
    return () => { // return a function to cancel the operation
        //below are two way to cancel.
        cancelled = true; // 1. set cancellation flag
        //or
        clearTimeout(timer); // 2. clear the timeout
    }
};
