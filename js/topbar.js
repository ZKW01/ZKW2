
// 控制顶部的导航栏背景显示

// 设置定时器
setInterval(show,500)



// 定时器调用的方法
function show(){
    // console.log($(window).scrollTop());
    // console.log($("#right-menu p"));

    if($(window).scrollTop() == 0){
        $(".topbar-wrapper").css("background","none")
        $(".topbar-wrapper").css("height","110px")
        $("#logotitle").css("color","#FFF")
        $(".ap").css("color","#FFF")

    }else{
        $(".topbar-wrapper").css("background","#FFF")
        $(".topbar-wrapper").css("height","100px")
        $("#logotitle").css("color","#333")
        $(".ap").css("color","#333")
    }
}



