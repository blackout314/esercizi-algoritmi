/**
 * insert sort
 */

function sort(myarray) {
    "use strict";
    var i = 0,
        j = 0,
        k = 0;

    if (typeof myarray !== "object" || myarray.length < 1 || typeof myarray.length === "undefined") {
        return false;
    }

    for (i = 0; i < myarray.length; i++) {
        k = myarray[i];
        for (j = i; j > 0 && k < myarray[j - 1]; j--) {
            myarray[j] = myarray[j - 1];
            // console.log(JSON.stringify(myarray));
        }
        myarray[j] = k;
    }
    return myarray;
}

/*
    "[45,56,56,33,6,9]"
    "[45,45,56,33,6,9]"
    "[21,45,56,56,6,9]"
    "[21,45,45,56,6,9]"
    "[21,33,45,56,56,9]"
    "[21,33,45,45,56,9]"
    "[21,33,33,45,56,9]"
    "[21,21,33,45,56,9]"
    "[6,21,33,45,56,56]"
    "[6,21,33,45,45,56]"
    "[6,21,33,33,45,56]"
    "[6,21,21,33,45,56]"
    "[6,9,21,33,45,56]"
*/
