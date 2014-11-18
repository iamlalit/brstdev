EpageoApp.directive('hoverLogo', function() {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs, ctrl) {
			var max = 7;
			var min = 1;
			elem.bind('mouseover', function() {
			  var flag = Math.floor(Math.random() * (max - min + 1)) + min;
			  $(this).closest("span.navbar-brand").css('background-image', 'url("../../.tmp/img/animated'+flag+'.gif")');  
			});

			elem.bind('mouseout', function(){
  				$(this).closest("span.navbar-brand").css('background-image', 'none');
			})
		}
	}    
});