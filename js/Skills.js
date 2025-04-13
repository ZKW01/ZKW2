


// 控制技能展示列表的进度条的加载
// 定义进度条鼠标移入事件
// 移入时调用
$(".Skills-and-Goals").mouseover(function () {
    // console.log("移入")
    $(".g-progress1").css("width" , "80%");
    $(".g-progress2").css("width" , "70%");
    $(".g-progress3").css("width" , "60%");
    $(".g-progress4").css("width" , "20%");
    $(".g-progress5").css("width" , "5%");

  })


// 移出时调用
  $(".Skills-and-Goals").mouseout(function () {
    // console.log("移出")
    $(".g-progress1").css("width" , "0%");
    $(".g-progress2").css("width" , "0%");
    $(".g-progress3").css("width" , "0%");
    $(".g-progress4").css("width" , "0%");
    $(".g-progress5").css("width" , "0%");


  })
