// game logic and controlls
// any buttons pressedd
var game_status = true;
var try_counter; // if 6- dead
var play_word;
var temp_word;
var play_score;

// handler for button being pressed
function btn_handler(btn) {
    console.log(btn.innerHTML);

    btn.disabled = true;
    if (game_status) {
        if (play_word.includes(btn.innerHTML)) {
            btn.classList.toggle('btn-primary');
            btn.classList.toggle('btn-success');
            for (i =0; i < temp_word.length; i++) {
                if (play_word[i] == btn.innerHTML) {
                    temp_word[i] = btn.innerHTML;
                    score(++play_score);
                }
            }
            if (!temp_word.includes("_")) {
                btn_toggle(true);
                game_status=false;
                console.log("u won");
                $("#winner_modal").modal()

            }
            word(temp_word);
        } else {
            btn.classList.toggle('btn-primary');
            btn.classList.toggle('btn-danger');
            if (++try_counter == 7) {
                btn_toggle(true);
                setTimeout(console.log("pp"), 2000);
                $("#loser_modal").modal();
                game_status = false;
                score(play_score=0);
            }
            picture(try_counter);
        }
    }
}

// reset button
function btn_reset() {
    btn_list = document.getElementById("keyboard").getElementsByTagName("button");
    //console.log(btn_list);
    for (i = 0; i < btn_list.length; ++i) {
        if (!btn_list[i].classList.contains('btn-primary')) {
            if (btn_list[i].classList.contains('btn-danger')) {
                btn_list[i].classList.toggle('btn-danger');
                btn_list[i].classList.toggle('btn-primary');

            } else {
                btn_list[i].classList.toggle('btn-success');
                btn_list[i].classList.toggle('btn-primary');

            }
        }
        btn_list[i].disabled = false;
    }
}

// helper function to copy word
function copy_word(w) {
    var w2 = [];
    for(i = 0; i < w.length -1 ; ++i){
        w2.push("_");
    }
    return w2;
}

// new game controller
function game(new_word) {
    btn_reset();
    game_status = true;
    try_counter = 0;
    score(play_score=0);
    
    get_defenition(new_word);
    play_word = new_word.split("");
    temp_word = copy_word(play_word);

    picture(try_counter);
    word(temp_word);

    console.log(play_word);
}

// reset game controller
function reset_game() {
    btn_reset();
    game_status = true;
    try_counter = 0;
    score(play_score=0);

    temp_word = copy_word(play_word);

    picture(try_counter);
    word(temp_word);

    console.log(play_word);
}

function next_word() {
    if (game_status) {
        game(get_word());
    } else {
        btn_reset();
        game_status = true;
        try_counter = 0;        
        new_word= get_word();
        get_defenition(new_word);
        play_word = new_word.split("");
        temp_word = copy_word(play_word);

        picture(try_counter);
        word(temp_word);

        console.log(play_word);
    }
}

readTextFile("http://phf.jhh.mybluehost.me/hangman/words.txt");
game(get_word());
