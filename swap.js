/* exported move */
/* eslint-env browser */
/* eslint no-console:0 */

function move(a, start, stop) {

    var len = a.length;
    if (start < 0) {
        start = start + len;
    }
    if (stop < 0) {
        stop = stop + len;
    }
    var temp = a[start];
    var i = 0;
    if (start < stop) {
        while (i < stop) {
            a[i] = a[i + 1];
            i++;
        }

    } else {
i=len-1;
        while (i >= stop) {
            a[i] = a[i - 1];
            i--;
        }

    }
    a[stop] = temp;
    return a;
}
