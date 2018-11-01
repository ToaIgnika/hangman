// graphics
var img_id = 0;

// view for image change
function picture(z) {
    btn = document.getElementById("next_word");
    //img_id++;
    //img_id = img_id%7;
    document.getElementById("hang_img").src = "img/h0" + z + ".png";
}


// view for word
function word(letter_array) {
    wrd = document.getElementById("word_display");
    console.log(wrd);
    var str = "";
    for (i = 0; i < letter_array.length; ++i) {
        str+= letter_array[i];
    }
    wrd.innerHTML = str;
}

// view for button toggle
function btn_toggle(enbld) {
    btn_list = document.getElementById("keyboard").getElementsByTagName("button");
    //console.log(btn_list);
    for (i = 0; i < btn_list.length; ++i) {
        btn_list[i].disabled = enbld;
    }
}

// view for score
function score(z) {
    sc = document.getElementById("score_display");
    sc.innerHTML = "Score: " + z;
}

// view for defenition
function defenition (d) {
    df = document.getElementById("defenition_display");
    df.innerHTML = d;
}