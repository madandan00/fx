//(function($) {
//	$.fn.userCp = function(options) { //定义插件的名称，这里为userCp
//		var dft = {
//			//以下为该插件的属性及其默认值
//			cpBy: "网易", //版权所有者
//			url: "http://www.163.com", //所有者链接
//			size: "12px", //版权文字大小
//			align: "left" //版权文字位置，left || center || right
//		};
//		var ops = $.extend(dft, options);
//		var style = 'style="font-size:' + ops.size + ';text-align:' + ops.align + ';"'; //调用默认的样式
//		var cpTxt = '
//		此文章版权归 ' + ops.cpBy + '
//		所有
//			'; //生成版权文字的代码
//		$(this).append(cpTxt); //把版权文字加入到想显示的div
//	}
//})(jQuery);

(function($) {
	$.fn.mdd = function(op) {
		var dft = {
			size_x: "80px",
			size_y:"80px",
			fsize: "40px",
			icon:"icon-jia1",
			color: "#bfbfbf",
			background: "#fff",
			length:"1"
		};
		var ops = $.extend(dft, op);
		var style1 = 'width:' + dft.size_x + ';height:' + dft.size_y + ';font-size:' + dft.fsize + ';line-height:' + dft.size_y +
			';text-align:center;position:relative;cursor:pointer;' + 'color:' + dft.color + ';background:' + dft.background + ';border:1pxdotted#ddd;border-radius:4px;overflow:hidden;display:inline-block;*display:inline;*zoom:1;'

		var style2 = 'position:absolute;width:' + dft.size + ';height:' + dft.size + ';right:0;top:0;opacity:0;filter:alpha(opacity=0);cursor:pointer;'

		var pics = '<b  class="pic iconfont '+dft.icon+'" style=' + style1 + '><img style="width:100%;height:100%"/><input type="file" class="picture" style=' + style2 + '/></b>'
		$(this).append(pics);
		var that=this;
		$(that).delegate(".picture", "change", function() {
			
			if($(that).find(".picture1").length < dft.length-1) {
				var path = $(this).val();
				var type = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
				if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {

					$(this).parents('.pic').find("img").attr("src", window.URL.createObjectURL($(this)[0].files[0]));

					var pic = pics;
					$(this).parents('.pic').removeClass("icon-jia1").before(pic);
					$(this).removeClass("picture").addClass("picture1");
					//$(".picNum").html($(".add-pic .picture1").length);
				} else {
					alert("请上传正确的图片格式");
					return false;
				}
			} else {
				var path = $(this).val();
				var type = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
				if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {
					$(this).parents('.pic').removeClass("icon-jia1");
					$(this).parents('.pic').find("img").attr("src", window.URL.createObjectURL($(this)[0].files[0]));
					$(this).removeClass("picture").addClass("picture1");
					$(".picNum").html($(".add-pic .picture1").length);
				} else {
					alert("请上传正确的图片格式");
					return false;
				}

			}

		})
		$(that).delegate(".picture1", "change", function() {
			var path = $(this).val();
			//alert(path)
			var type = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
			if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {
				$(this).parents('.pic').find("img").attr("src", window.URL.createObjectURL($(this)[0].files[0]));
			} else {
				alert("请上传正确的图片格式");
				return false;
			}
		})
	}
})(jQuery)