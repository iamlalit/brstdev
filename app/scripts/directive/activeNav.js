EpageoApp.directive('activeNav', function() {
	return {
	 restrict: 'A',
	 link: function (scope, element, attrs, ctrl) {
	   scope.$watch('location.path()', function() {
	   	//console.log(window.location.pathname.split('/pages/')[1].split('/')[0], element[0].href.split('/pages/')[1].split('/')[0])
	     if(window.location.pathname.split('/pages/')[1].split('/')[0] === element[0].href.split('/pages/')[1].split('/')[0]) {
	       	element.closest('li').addClass('active');
	       	var page = window.location.pathname.split('/pages/')[1].split('/')[0];
			$("#"+page).addClass('in');

			if(page === 'services'){
				$("#"+page).closest('.container').css({'width': '450px'});
				$("#service-page").removeClass('hide');
			}else if(page === 'solutions'){
				$("#"+page).closest('.container').css({'width': '660px', 'top': '-24px'});
			}else if(page === 'company'){
				$("#company-page").removeClass('hide');
				$("#"+page).closest('.container').css({'width': '490px'});
			}else if(page === 'contact'){
				$("#contact-page").removeClass('hide');
				$("#"+page).closest('.container').css({'width': '415px'});
			}
	     } else {
	        element.closest('li').removeClass('active');
	     }
	   });
	 }
 	};
});
EpageoApp.directive('activeSubNav', function() {
	return {
	 restrict: 'A',
	 link: function (scope, element, attrs, ctrl) {
	   scope.$watch('location.path()', function() {
	     if(window.location.pathname.split('/pages/')[1].split('/')[1].split('.')[0] === element[0].href.split('/pages/')[1].split('/')[1].split('.')[0]) {
	       	element.closest('li').addClass('active');
	     } else {
	        element.closest('li').removeClass('active');
	     }
	   });
	 }
 	};
});