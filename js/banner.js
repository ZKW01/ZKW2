	//页面进入加载事件
	$(function() {
    //获取轮播图片的个数
    var img_lenght = $(".bk_img").length;
    // 当前图片的索引
    var i = 1;
    //初始化调用
    p_click();
    timer();
    li_click();
    
    
    //轮播主体
    function lb() {
      
      // 设置索引校准
      if(i > img_lenght - 1) {
        i = 0;
      }

      if(i < 0) {
        i = img_lenght - 1;
      }

      //animate:jquery 方法 通过改变元素的大小，对元素进行动画
      $("#showdiv").animate({
        "left": (-i * 100) + "%"
      });
      //eq（选择li 标签） siblings() 方法返回被选元素的所有同级元素。
      $("#banner ul li").eq(i).addClass("li_bk").siblings().removeClass();
      i++;
    }
    //定时轮播
    function timer() {
      var t = setInterval(function() {
        lb();
      }, 4500);



      $("#banner p").hover(function() {
        t = clearInterval(t);
      }, function() {
        t = setInterval(function() {
          lb();
        }, 4500);
      })
    }
    //左右点击轮播
    function p_click() {
      
      $(".left").click(function() {
        i -= 2;
        lb();
      });
      $(".right").click(function() {
        lb();
      })
    }
    //点击li轮播
    function li_click() {
      $("#banner ul li").click(function() {
          i = $(this).index();
          lb();
        })
      }
    
    })
  