/*
    ***************************************
    DEVELOPER:  INDRANIL PAL
    E-MAIL:     indranil.pal.0602@gmail.com
    ***************************************
*/

function Quick() {
    c_delay = 0;
    quick_sort(0, array_size - 1);
    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start] ;                                //  make the first element as pivot element.
    div_update(divs[start], div_sizes[start], "#ebf7ff");       //  Color update

    for (var j = start + 1; j <= end; j++ ) {
                                                                    
        if (div_sizes[j] < piv) {                               //  re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            div_update(divs[j], div_sizes[j], "#ebf7ff");       //  Color update

            div_update(divs[i], div_sizes[i], "#ab0600");       //  Color update
            div_update(divs[j], div_sizes[j], "#ab0600");       //  Color update

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "#ab0600");       //  Height update
            div_update(divs[j], div_sizes[j], "#ab0600");       //  Height update

            div_update(divs[i], div_sizes[i], "coral");         //  Height update
            div_update(divs[j], div_sizes[j], "coral");         //  Height update

            i += 1;
        }
    }
    div_update(divs[start], div_sizes[start], "#ab0600");       //  Color update
    div_update(divs[i - 1], div_sizes[i - 1], "#ab0600");       //  Color update
    
    var temp = div_sizes[start];                                //  put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "#ab0600");       //  Height update
    div_update(divs[i - 1], div_sizes[i - 1], "#ab0600");       //  Height update

    for (var t = start; t <= i; t++)
        div_update(divs[t], div_sizes[t], "#04ba59");           //  Color update

    return i - 1;                                               //  return the position of the pivot
}

function quick_sort (start, end) {
    if (start < end) {
        var piv_pos = quick_partition (start, end);             //  stores the position of pivot element
        quick_sort (start, piv_pos - 1);                        //  sorts the left side of pivot.
        quick_sort (piv_pos + 1, end);                          //  sorts the right side of pivot.
    }
 }

