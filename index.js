
//tab切换

$(".xfu-left ul li").click(function () {

$this = $(this);
b = setTimeout(function () {
    $('li').removeClass('xfu-left-liactive');
    $this.addClass('xfu-left-liactive');
    $('.xfu-left-search').hide();
    $('.xfu-left-search').eq($this.index()).show();
}, 300);
})


//定位布局  header
$(window).on('scroll', function () {
    var $top = $(this).scrollTop();//滚动条的距离
    if ($top >= 300) {
        var t = document.body.clientWidth;
        $('.header').css({
            'top': 0, 'z-index': 100,
            'background': '#fff',
            'position': 'fixed',
            'border-bottom': '1px solid #ededed'
        })
        $('.header-weiy-color .header .head-nav li a').css({
            'color': '#000'

        })
        $('.head-search').css({
            'background': '#fff',
            
            'opacity': '0.9',

        })
        // $('table').css({
        // 	'position':'fixed'
        // })
    }
    else if ($top < 300) {
        $('.header').css({
            'position': 'relative',
            'border': 'none',
            'z-index': 100,
            'background': 'transparent',
        })
        $('.header-weiy-color .header .head-nav li a').css({
            'color': '#fff'

        })
        $('.header-weiy-color .head-search').css({
            'background': '#e9eaeb'
        })
    }
});
//回到顶
$('#louti').on('click', 'a', function () {
    if ($(this).index() == 3) {
        $('html,body').stop(true, false).animate({
            scrollTop: 0
        });
    }
});
$('.item-jm-ys-25 li').hover(
    function () {
        $(this).find('.item-jm-ys-25-fr').show();
        $(this).find('.item-jm-ys-25-br').show();
        $(this).find('.item-jm-ys-25-br1').hide();
        $(this).find('.item-jm-ys-25-fr1').hide();
    }, function () {
        $(this).find('.item-jm-ys-25-fr').hide();
        $(this).find('.item-jm-ys-25-br').hide();
        $(this).find('.item-jm-ys-25-br1').show()
        $(this).find('.item-jm-ys-25-fr1').show()
    }
);
$('#louti').find('a').hover(
    function () {
        $(this).addClass('att')
     console.log($(this))
        if ($(this).context.id=="louti-1") {
            $(this).find('img').attr('src', 'image/zaixiankf-active.png');
        } else if ($(this).context.id=="louti-2") {
            console.log(1)
            $(this).find('img').attr('src', 'image/dianhuakf-active.png');
        } else if ($(this).context.id=="louti-3") {
            $(this).find('img').attr('src', 'image/weixin-active.png');
        } else if ($(this).context.id=="louti-4") {
            $(this).find('img').attr('src', 'image/huidaodb-active.png');
        }
    }, function () {
        $('#louti').find('a').removeClass('att')
        if ($(this).context.id=="louti-1") {
            $(this).find('img').attr('src', 'image/zaixiankf-normal.png');
        } else if ($(this).context.id=="louti-2") {
            $(this).find('img').attr('src', 'image/dianhuakf-normal.png');
        }
        else if ($(this).context.id=="louti-3") {
            $(this).find('img').attr('src', 'image/weixin-normal.png');
        }
        else if ($(this).context.id=="louti-4") {
            $(this).find('img').attr('src', 'image/huidaodb-normal.png');
        }
    })
