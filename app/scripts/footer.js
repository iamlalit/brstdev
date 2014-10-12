
$(document).ready(function(){
	$('#goToTop').on('click', function(){
		console.log('here');	
	})
});
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});