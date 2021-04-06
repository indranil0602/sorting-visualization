/*
    ***************************************
    DEVELOPER:  INDRANIL PAL
    E-MAIL:     indranil.pal.0602@gmail.com
    ***************************************
*/

function Insertion() {
    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "#ebf7ff");                   //  Color update

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "#ab0600");               //  Color update
            div_update(divs[i + 1], div_sizes[i + 1], "#ab0600");       //  Color update

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "#ab0600");               //  Height update
            div_update(divs[i + 1], div_sizes[i + 1], "#ab0600");       //  Height update
    
            div_update(divs[i], div_sizes[i], "coral");                 //  Color update
            if(i == (j - 1))
                div_update(divs[i + 1], div_sizes[i + 1], "#ebf7ff");   //  Color update
            else 
                div_update(divs[i + 1], div_sizes[i + 1], "coral");     //  Color update
            
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for(var t = 0; t < j; t++)
            div_update(divs[t], div_sizes[t], "#04ba59");               //  Color update
    }
    div_update(divs[j - 1], div_sizes[j - 1], "#04ba59");               //  Color update

    enable_buttons();
}

