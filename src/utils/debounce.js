export function debounce(fn, delay = 100) {
    var timer = null;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null
        }, delay)
    }
}