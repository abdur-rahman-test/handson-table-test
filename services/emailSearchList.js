emailDatabase.factory('emailSearchList', ['emailDbView', function(emailDbView){

	var emailSearchList = function (emailSearchListData) {
		angular.extend(this, {
			items: populateList(emailSearchListData)
		});
		return this;
	};
	return emailSearchList;

	function populateList(items) {
		var emailSearchItems = [];
		_.each(items, function (item) {
			emailSearchItems.push(new emailDbView(item));
		});
		return emailSearchItems;
	}
}]);