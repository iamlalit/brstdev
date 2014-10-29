EpageoApp.directive('hoverLogo', function() {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs, ctrl) {
			var flag = 0;

			elem.bind('mouseover', function() {
			  if(flag == 0){
			    $(this).parent("a.navbar-brand").css('background-image', 'url("img/animated2.gif")');  
			    flag = 1;
			  }else{
			    $(this).parent("a.navbar-brand").css('background-image', 'url("img/animated-circle.gif")');  
			    flag = 0;
			  }				
			});

			elem.bind('mouseout', function(){
  				$(this).parent("a.navbar-brand").css('background-image', 'none');
			})
		}
	}    
});
