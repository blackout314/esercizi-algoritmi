/**
 * insert sort
 */

function sort(myarray) {
    "use strict";
    var i = 0,
        j = 0;
    function ciclo (myarray) {
        var key = 0;
        for (j = 0; j < myarray.length; j++) {
            i = j - 1;

            console.log('## i:'+i+' j:'+j);

            while(i > 0 && myarray[i] > myarray[j]) {
                console.log(' # '+myarray[i]+' '+myarray[j]);
                myarray[i + 1] = myarray[i];
                i = i - 1;
            }

            myarray[i + 1] = myarray[j];
        }
        return myarray;
    };

    if (typeof myarray !== "object" || myarray.length < 1 || typeof myarray.length === "undefined") {
        return false;
    }
    return ciclo(myarray);
}
/*
j = 1, i = 0, o[1] = a[1]
j = 2, i = 1, (a[1]>a[2])
*/
