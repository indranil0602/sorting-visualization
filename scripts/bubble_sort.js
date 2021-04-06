/*
    ***************************************
    DEVELOPER:  INDRANIL PAL
    E-MAIL:     indranil.pal.0602@gmail.com
    ***************************************
*/

function Bubble() {
    c_delay=0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            
            div_update(divs[j], div_sizes[j], "#ebf7ff");               //  Color (lightblue) update

            if(div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "#ab0600");           //  Color (dark-red) update
                div_update(divs[j + 1], div_sizes[j + 1], "#ab0600");   //  Color (dark-red) update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "#ab0600");           //  Height update (dark-red) 
                div_update(divs[j + 1], div_sizes[j + 1], "#ab0600");   //  Height update (dark-red) 
            }
            div_update(divs[j], div_sizes[j], "coral");                 //  Color update
        }
        div_update(divs[j], div_sizes[j], "#04ba59");                   //  Color update (light green) 
    }
    div_update(divs[0], div_sizes[0], "#04ba59");                       //  Color update (light green) 

    enable_buttons();
}
