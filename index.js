
// 今何回戦なのかを表示する。 
let press = 0;   // pressという変数を宣言
function count(){   //関数count()を宣言
    press++; //グーチョキパーいずれかのボタンが押された時にpressに1を加える
    // document.getElementById("press-btn").innerHTML = press; //class=press-btnにpressの数を表示する
    $("#press-btn").html(press) //上の行をJQueryの記法で書き直した
}

// 勝ち負けあいこの数を保存する変数3つを宣言
let win = 0;
let lose = 0;
let draw = 0;


// プレイヤーがグーチョキパーいずれかのボタンを押した時から開始
function jkn(playerselect){
    let playernote; //プレイヤーの手を宣言。0、1、2のいずれかを入れるよ。
    let comnote;    //コンピューターの手を宣言。こちらも0、1、2のいずれかを入れるよ。
    if(playerselect === 0){ //グーのボタンが押された時
        playernote = 0
        let player = document.getElementById("player")
            player.src = "images/guu.png"  
    }else if(playerselect === 1){ //チョキのボタンが押された時
        playernote = 1;
        let player = document.getElementById("player")
            player.src = "images/choki.png"
    }else if(playerselect === 2){ //パーのボタンが押された時
        playernote = 2;
        let player = document.getElementById("player")
            player.src = "images/paa.png"
    }

    //コンピューターの手をランダムで作成する
    random = Math.floor(Math.random() * 3); //乱数を発生
    if(random === 0){                       //0の時
        comnote = random                    //comnoteという変数にrandomを入れる
        let com = document.getElementById("com") //id=comのimgタグを指定
            com.src = "images/sazae_gu.jpeg" //srcに代入
    }else if(random === 1){
        comnote = random
        let com = document.getElementById("com")
            com.src = "images/sazae_choki.jpeg"
    }else if(random === 2){
        comnote = random
        let com = document.getElementById("com")
            com.src = "images/sazae_pa.jpeg"
    }


    //勝敗を決める
    if(playernote === comnote){ //プレイヤーの手とコンピューターの手が同じだったら
        $(".result").text("あいこ") //class="result"に「あいこ」を入れる
        draw++;                    //変数drawに1加える
    }else if(playernote === 0 && comnote === 1){
        $(".result").text("あなたの勝ち")
        win++;
    }else if(playernote === 0 && comnote === 2){
        $(".result").text("あなたの負け")
        lose++;
    }else if(playernote === 1 && comnote === 2){
        $(".result").text("あなたの勝ち")
        win++;
    }else if(playernote === 1 && comnote === 0){
        $(".result").text("あなたの負け")
        lose++;
    }else if(playernote === 2 && comnote === 0){
        $(".result").text("あなたの勝ち")
        win++;
    }else if(playernote === 2 && comnote === 1){
        $(".result").text("あなたの負け")
        lose++;
    }

    
    //勝ち負けあいこの結果をhtmlに表示させる
    // document.getElementById("draw_count").innerHTML = draw
    // document.getElementById("lose_count").innerHTML = lose
    // document.getElementById("win_count").innerHTML = win

    $("#draw_count").html(draw)  //JQueryの記法で書き直した
    $("#lose_count").html(lose)
    $("#win_count").html(win)

}
