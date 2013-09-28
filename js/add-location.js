jQuery(document).ready(function(){
	$("select").change(function () {
		if($(this).val() == "0") 
		{
			$(this).addClass("ya-empty");
		}	
		else 
		{
			$(this).removeClass("ya-empty");
		}	
	});

	$("select").change();

	jQuery("#change-rofilr-image").click(function(){
		jQuery(".ya-location-image").slideToggle();
	});
});

