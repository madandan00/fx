
	//支付密码判断
function checkPay(id) {
	var userPwd = $("#" + id).val() || $("#" + id).html();
	if((/^[0-9]{6}$/.test(userPwd))) {
		return true;
	} else {
		return false;
	}
}

//确认密码
$(".qrmm").on("click", function() {
	var payPsw = $("#payPsw").val();
	var againPayPsw = $("#againPayPsw").val();
	if(checkPay("payPsw")) {
		if(payPsw == againPayPsw) {
			$.ajax({
				type: "get",
				url: "",
				data: {
					"payPsw": payPsw
				},
				async: true,
				success: function() {

				}
			});
		} else {
			$(".tip").html("两次输入的密码不一致").show();
			setTimeout(function() {
				$(".tip").hide();
			}, 2000)

		}
	} else {
		$(".tip").html("支付密码格式错误").show();
		setTimeout(function() {
			$(".tip").hide();
		}, 2000)

	}

})