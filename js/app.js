//画像の出し入れの定義
    $("#likea").slideDown(180);
    $("#likea").slideUp(600);

//ベースとなる値を置く（ランダムによるジャンケンの値）
    const my_hands=1
    const cpu_hands1 =Math.ceil(Math.random()*3);
    const cpu_hands2 =Math.ceil(Math.random()*3);
    const cpu_hands3 =Math.ceil(Math.random()*3);
    const cpu_hands4 =Math.ceil(Math.random()*3);
    const cpu_hands5 =Math.ceil(Math.random()*3);
    const cpu_hands6 =Math.ceil(Math.random()*3);
//ベースとなる値を置く（表示場所）
    let view0="";
    let view1="";
    let view2="";
    let view3="";
    let view4="";
    let view5="";
    let view6="";
//ベースとなる値を置く（成功の条件たるグー数のカウント）
    let gunum=1

// 参加人数を召喚
// 別記載案「$("#join1, #join2,#join3〜")」あるも、シンプルなキャレットで対応
// 参加人数を召喚インデックスで指定、もともと参加するプレイヤー（自身＋CPU1名）に加える形で登録。
    $("[id^='join']").on("click",function(){
        const index = $(this).attr("id").replace("join", "");

// 対象要素のクラス名とIDをリストに格納
        const targets = [
            {class: ".player1", id: "#cpu_hands1"},
            {class: ".player2", id: "#cpu_hands2"},
            {class: ".player3", id: "#cpu_hands3"},
            {class: ".player4", id: "#cpu_hands4"},
            {class: ".player5", id: "#cpu_hands5"},
            {class: ".player6", id: "#cpu_hands6"},
        ];
// 繰り返し処理で、インデックスに応じたリスト（クラスとIDの2点）を表示
        for (let i = 0; i < index; i++) {
            $(targets[i].class + "," + targets[i].id).fadeIn(i * 500);
            $("#add" + (i+1)).fadeIn(500);
            }
    });

//上記の参考までに、forを使わないバージョンを明記（old）
// $("#join1").on("click",function(){
//         $(".player2,#cpu_hands2").fadeIn(2500);
//         $("#add1").fadeIn(1500);
//     });
//     $("#join2").on("click",function(){
//         $(".player2,#cpu_hands2,.player3,#cpu_hands3").fadeIn(1500);
//         $("#add1,#add2").fadeIn(1500);
//     });
//     $("#join3").on("click",function(){
//         $(".player2,#cpu_hands2,.player3,#cpu_hands3,.player5,#cpu_hands5").fadeIn(500);
//         $("#add1,#add2,#add3").fadeIn(1500);
//     });
//     $("#join4").on("click",function(){
//         $(".player2,#cpu_hands2,.player3,#cpu_hands3,.player5,#cpu_hands5,.player6,#cpu_hands6").fadeIn(3000);
//         $("#add1,#add2,#add3,#add4").fadeIn(1500);
//     });
//     $("#join5").on("click",function(){
//         $(".player2,#cpu_hands2,.player3,#cpu_hands3,.player5,#cpu_hands5,.player6,#cpu_hands6,.player7,#cpu_hands7").fadeIn(2000);
//         $("#add1,#add2,#add3,#add4,#add5").fadeIn(1500);
//     });

//１人と対戦する場合（自身とCPU１人の計２名で対戦）
    $("#add1").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(my_hands==cpu_hands1){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});
//２人と対戦する場合（自身とCPU２人の計３名で対戦）
    $("#add2").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add0,#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }
    if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(my_hands==cpu_hands1==cpu_hands2){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});

//３人と対戦する場合（自身とCPU３人の計４名で対戦）
$("#add3").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add0,#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }
    if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands3==1){
        view3='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
        gunum+=1;
    }
    if(cpu_hands3==2){
        view3='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands3==3){
        view3='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(my_hands==cpu_hands1==cpu_hands2==cpu_hands3){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});

//４人と対戦する場合（自身とCPU４人の計５名で対戦）
$("#add4").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add0,#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }
    if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands3==1){
        view3='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
        gunum+=1;
    }
    if(cpu_hands3==2){
        view3='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands3==3){
        view3='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands4==1){
        view4='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
        gunum+=1;
    }
    if(cpu_hands4==2){
        view4='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }
    if(cpu_hands4==3){
        view4='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }

    if(my_hands==cpu_hands1==cpu_hands2==cpu_hands3==cpu_hands4){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});

//５人と対戦する場合（自身とCPU５人の計６名で対戦）
$("#add5").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add0,#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }
    if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands3==1){
        view3='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
        gunum+=1;
    }
    if(cpu_hands3==2){
        view3='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands3==3){
        view3='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands4==1){
        view4='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
        gunum+=1;
    }
    if(cpu_hands4==2){
        view4='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }
    if(cpu_hands4==3){
        view4='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }
    if(cpu_hands5==1){
        view5='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
        gunum+=1;
    }
    if(cpu_hands5==2){
        view5='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
    }
    if(cpu_hands5==3){
        view5='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
    }

    if(my_hands==cpu_hands1==cpu_hands2==cpu_hands3==cpu_hands4==cpu_hands5){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});

//５人と対戦する場合（自身とCPU５人の計６名で対戦）
$("#add6").on("click",function(){
        view0='<img src="img/gu.png" alt="" width="100px">';
        $("#my_hands").html(view0);
        $("#add0,#add1,#add2,#add3,#add4,#add5,#add6").fadeOut(0);
        $("#reset-button").fadeIn(1000);

    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }
    if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }
    if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands3==1){
        view3='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
        gunum+=1;
    }
    if(cpu_hands3==2){
        view3='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands3==3){
        view3='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands3").html(view3);
    }
    if(cpu_hands4==1){
        view4='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
        gunum+=1;
    }
    if(cpu_hands4==2){
        view4='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }
    if(cpu_hands4==3){
        view4='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands4").html(view4);
    }
    if(cpu_hands5==1){
        view5='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
        gunum+=1;
    }
    if(cpu_hands5==2){
        view5='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
    }
    if(cpu_hands5==3){
        view5='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands5").html(view5);
    }
    if(cpu_hands6==1){
        view6='<img src="img/gu.png" alt="" width="100px">';
        $("#cpu_hands6").html(view6);
        gunum+=1;
    }
    if(cpu_hands6==2){
        view6='<img src="img/cho.png" alt="" width="100px">';
        $("#cpu_hands6").html(view6);
    }
    if(cpu_hands6==3){
        view6='<img src="img/par.png" alt="" width="100px">';
        $("#cpu_hands6").html(view6);
    }

    if(my_hands==cpu_hands1==cpu_hands2==cpu_hands3==cpu_hands4==cpu_hands5==cpu_hands6){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#gunum").html(gunum);
    }
});

    $('#reset-button').click(function() {
    location.reload();
    $("#likea").hide();
});

let gamenum=0;
$("#reset-button").on("click",function(){
    gamenum+=1;
    localStorage.setItem("実施回数",gamenum);
});
