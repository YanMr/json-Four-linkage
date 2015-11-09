// JavaScript Document
$(function() {
	for (var i = 0; i < json.length; i++) {
		$("#p").append('<option value=' + i + '>' + json[i].province + '</option>');
	}
	$("#p").change(function() {
		var el = $(this).find("option:selected").val();
		//市
		if (el != null && el != "") {
			$("#c option:gt(0)").remove()
			$("#n option:gt(0)").remove();
			$("#q option:gt(0)").remove();
			for (var i = 0; i < json[el].city.length; i++) {
				$("#c").append('<option value=' + i + '>' + json[el].city[i].name + '</option>');
			}
		}
		$("#c").change(function() {
			var n = $(this).find("option:selected").val();
			//区
			if (n != null && n != "") {
				$("#n option:gt(0)").remove();
				$("#q option:gt(0)").remove();
				for (var i = 0; i < json[el].city[n].area.length; i++) {
					$("#n").append('<option value=' + i + '>' + json[el].city[n].area[i].name + '</option>');
				}
			}
			$("#n").change(function() {
				var k = $(this).find("option:selected").val();
				//街
				if (k != null && k != "") {
					$("#q option:gt(0)").remove();
					for (var i = 0; i < json[el].city[n].area[k].qu.length; i++) {
						$("#q").append('<option value=' + i + '>' + json[el].city[n].area[k].qu[i].name + '</option>');
					}
				}
			})
		})
	})

})