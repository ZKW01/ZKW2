
// 获取内容展示的元素
var $contents = $('#container>div')
// 给3个li加监听
var currIndex = 0 //当前显示的内容div的下标
$('#tab>li').click(function () { // 隐式遍历

  // 得到当前点击的li在兄弟中下标
  var lis = $('#tab>li')

  var index = $(this).index()


  // 移除点击类的下划线
  $('#tab>li').removeClass()
  // 添加下划线
  $($('#tab>li')[index]).addClass("line-active")


  // 调整li的误差
  if (index == 1 || index == 3) {
    return
  }

  if (index == 2) {
    index = 1
  }

  if (index == 4) {
    index = 2
  }

  // 将其他的内容DIV隐藏
  $contents[currIndex].style.display = 'none'

  // 找到对应的内容div, 并显示
  $($contents[index]).fadeIn(1200);

  // 更新下标
  currIndex = index
})
