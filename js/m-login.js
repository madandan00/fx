//验证手机号
function checkPhone(id) {
	var userPhone = $("#" + id).html() || $("#" + id).val();
	if((/^1[34578]\d{9}$/.test(userPhone))) {
		return true;
	} else {
		return false;
	}
}

$("#dh").on("blur",function(){
	var val=$(this).val();
	if(val!=""){
		if(!checkPhone("dh")){
			alert("手机号码格式错误");
		}
	}
	
})
//发送手机号到后台
function sentPhone(id1, id2) {
	//dtime()
	if(checkPhone(id1) == true) {
		var phone = $("#" + id1).html() || $("#" + id1).val();
		//console.log(phone)
		dtime(id2)
			//	    	$.ajax({
			//	    		type:"get",
			//	    		data:{"user_name":phone},
			//	    		url:"",
			//	    		dataType: "json",
			//	    		async:true,
			//	    		success:function(data){
			//	    			
			//	    			console.log(data)
			////	    			alert(1)
			//	    			
			//	    		}
			//	    		
			//	    	});
	} else {
		$(".tip").html("手机号码格式错误").show();
		setTimeout(function() {
			$(".tip").hide();
		}, 3000)
	}
}
//验证码获取后倒计时事件函数	
function dtime(id) {
	var s = 60;
	var timer = setInterval(function() {
		s--;
		$("#" + id).html("还剩" + s + "秒");
		$("#" + id).css({
			"color": "#fff",
			"background": "rgba(246,186,119,0.6)",
			"border": "none"
		})
		if($("#" + id).html() == "还剩0秒") {
			clearInterval(timer);
			$("#" + id).html("重新获取");
			$("#" + id).css({
				"color": "#b2b2b2",
				"background": "#fff",
				"border": "1px solid #ddd"
			})
		}
	}, 1000)
}
//触发获取验证码事件	
$("#hq").bind("click", function() {

	if($("#hq").html() == "获取验证码") {
		sentPhone("phoneNumber", "hq");
	} else if($("#hq").html() == "重新获取") {
		sentPhone("phoneNumber", "hq");
	} else {
		return false;
	}
})

$("#tj").on("click", function() {
		if(checkPhone("phoneNumber")) {
			var phone = $("#phoneNumber").val();
			var yzm = $("#yzm").val();
			if(phone && yzm) {
				$.ajax({
					type: "get",
					data: {
						"phone": phone,
						"yzm": yzm
					},
					url: "",
					success: function(data) {
						if(data == 0) { //验证码错误
							$(".tip").html("验证码错误").show();
							setTimeout(function() {
								$(".tip").hide();
							}, 3000)
						} else if(data == 1) { //成功
							location.href = "Lost-pwd1.html";
						}
					}
				});
			} else {
				if(phone == "") {
					$(".tip").html("请输入手机号").show();
					setTimeout(function() {
						$(".tip").hide();
					}, 3000)
					return false;
				}
				if(yzm == "") {
					$(".tip").html("请输入验证码").show();
					setTimeout(function() {
						$(".tip").hide();
					}, 3000)
					return false;
				}
			}
		} else {
			$(".tip").html("手机号码格式错误").show();
			setTimeout(function() {
				$(".tip").hide();
			}, 3000)
			return false;
		}
	})
	//修改密码
function checkPwd() {
	var userPwd = $(".newPsw").val();
	if((/^[a-zA-Z0-9_]{6,20}$/.test(userPwd))) {
		return true;
	} else {
		return false;
	}
}
//点击修改密码
$("#tj1").on("click", function() {
	if(checkPwd()) {
		if($(".newPsw").val() == $(".SPsw").val()) {
			var newPwd = $(".newPsw").val();
			$.ajax({
				type: "post",
				url: "",
				data: {
					"newPwd": newPwd
				},
				success: function(data) {
					if(data == 0) {
						$(".tip").html("系统繁忙").show();
						setTimeout(function() {
							$(".tip").hide();
						}, 3000)
					}
				}
			});

		} else {
			$(".tip").html("两次密码输入不一致").show();
			setTimeout(function() {
				$(".tip").hide();
			}, 3000)
			return false;
		}
	} else {
		$(".tip").html("密码格式错误").show();
		setTimeout(function() {
			$(".tip").hide();
		}, 3000)
	}

})