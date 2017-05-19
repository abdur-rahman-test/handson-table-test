emailDatabase.factory('emailDbView', function(){
	var emailDbViewModel = function (viewModelData) {
		angular.extend(this, {
			id: viewModelData.dt,
			name: viewModelData.temp.morn,
			from: viewModelData.temp.night,
			sentTo: viewModelData.temp.min,
			mailSent: viewModelData.temp.max,
			reasonForFailiure: viewModelData.rain,
			resend: 'www.google.com'
		});
	};
	return emailDbViewModel;
});