// JavaScript Document
 $(document).ready(function() {
        $('#fullpage').fullpage({
            verticalCentered:false,
            resize:true,
            scrollingSpeed:1000,
            anchors:['page1','page2','page3','page4','page5','page6'],
            navigation:true,
            navigationPosition:"right",
            navigationTooltips:['首页','关于我','专业技能','我的经历','我的作品','联系我'],
            slidesNavigation:true,
            slidesNavPositon:"top",
           
        });
    });
//头像切换
	$(".my_pic").mouseover(function(){
		
		$("#photo2").show();
		})
	$(".my_pic").mouseleave(function(){
		$("#photo2").hide();
		$("#photo1").show();
		})

//侧导航文字
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	});
//技能栏说明
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
//轮播经历
	var list=$(".banner");
	function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        list.css('left', -2700);
                    }
                    if(left < (-2700)) {
                        list.css('left', -900);
                    }
                });
            } 
	$("#right").bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                animate(-900);
            });
	$("#left").bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                animate(900);
            });
//QQ二维码
   