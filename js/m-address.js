//默认地址
$(".choose").on("click", function() {
	if($(this).hasClass("icon-yuan")) {
		$(".choose").removeClass("icon-chuangyikongjianICON_fuzhi-").addClass("icon-yuan");
		$(this).removeClass("icon-yuan").addClass("icon-chuangyikongjianICON_fuzhi-");
		var name = $(this).parents(".listBox").find(".name").html();
		var address1 = $(this).parents(".listBox").find(".addres1").html();
		var address2 = $(this).parents(".listBox").find(".addres2").html();
		var phone = $(this).parents(".listBox").find(".phone").html();

		$.ajax({
			type: "get",
			data: {},
			url: "",
			success: function() {

			}
		});
	} else {
		$(this).removeClass("icon-chuangyikongjianICON_fuzhi-").addClass("icon-yuan")
	}
})
//编辑
$(".edit").on("click",function(){
	var name=$(this).parents(".listBox").find(".name").html();
	var address1=$(this).parents(".listBox").find(".addres1").html();
	var address2=$(this).parents(".listBox").find(".addres2").html();
	var phone=$(this).parents(".listBox").find(".phone").text();
	 $.ajax({
    	type:"get",
    	data:"",
    	url:"",
    	success:function(){
    		
    	}
    });

})
//删除
$(".remove").on("click",function(){
	var name=$(this).parents(".listBox").find(".name").html();
	var address1=$(this).parents(".listBox").find(".addres1").html();
	var address2=$(this).parents(".listBox").find(".addres2").html();
	var phone=$(this).parents(".listBox").find(".phone").html();
    $.ajax({
    	type:"get",
    	data:"",
    	url:"",
    	success:function(){
    		
    	}
    });
})


