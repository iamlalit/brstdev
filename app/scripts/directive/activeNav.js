EpageoApp.directive('activeNav', function() {
	return {
	 restrict: 'A',
	 link: function (scope, element, attrs, ctrl) {
	   scope.$watch('location.path()', function() {
	     if(window.location.pathname.split('/')[2] === element[0].href.split('/')[4]) {
	       	element.closest('li').addClass('active');
			$("#"+window.location.pathname.split('/')[2]).addClass('in');

			if(window.location.pathname.split('/')[2] === 'services'){
				$("#"+window.location.pathname.split('/')[2]).closest('.container').css({'width': '450px'});
			}else if(window.location.pathname.split('/')[2] === 'solutions'){
				$("#"+window.location.pathname.split('/')[2]).closest('.container').css({'width': '660px', 'top': '-24px'});
			}else if(window.location.pathname.split('/')[2] === 'company'){
				$("#"+window.location.pathname.split('/')[2]).closest('.container').css({'width': '490px'});
			}else if(window.location.pathname.split('/')[2] === 'contact'){
				$("#"+window.location.pathname.split('/')[2]).closest('.container').css({'width': '415px'});
			}
	     } else {
	        element.closest('li').removeClass('active');
	     }
	   });
	 }
 	};
})