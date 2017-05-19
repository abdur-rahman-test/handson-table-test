//CONTROLLERS

emailDatabase.controller('homeController', ['$scope', 'emailListService', function($scope, emailListService){

    var column_array = [
        {key: 'id', name: 'ID', common_name: 'id'},
        {key: 'name', name: 'Name', common_name: 'name'},
        {key: 'from', name: 'From', common_name: 'from'},
        {key: 'sentTo', name: 'Sent To', common_name: 'sentTo'},
        {key: 'mailSent', name: 'Email Sent', common_name: 'mailSent'},
        {key: 'reasonForFailiure', name: 'Reason For Failiure', common_name: 'reasonForFailiure'}
    ];
    var temp_column = {data: "", readOnly: true};
    var actionRenderer = function (instance, td, row, col, prop, value, cellProperties) {
        var $button = $('<a href="' + value + '" class="btn btn-info btn-sm" >');
        $button.html("Resend");
        $(td).empty().append($button); //empty is needed because you are rendering to an existing cell
    };

    $scope.emailData = emailListService.getEmailList();

    function bindData() {
        tableHeader = [];
        table_columns = [];
        _.each(column_array, function (parentItem) {
            var col = angular.copy(temp_column);
            col.data = parentItem.key;
            table_columns.push(col);
            tableHeader.push(parentItem.name);
        });
        tableHeader.push('Action');
        var primary_column = {data: 'resend', readOnly: true, renderer: actionRenderer};
        table_columns.push(primary_column);
    }

    bindData();

    function handSonTableSetting() {
        container1 = document.getElementById('hot');
        $("#hot").empty();
        $("#hot").removeClass('hand-son-table-scroll');
        handSonTable = new Handsontable(container1, {
            data: $scope.emailData,
            colHeaders: tableHeader,
            columns: table_columns,
            columnSorting: false,
            sortIndicator: false,
            colWidths: [146, 146, 146, 146, 146, 146, 150, 150]
            // afterSelection: function (row, col, row2, col2) {
            //     if (col == 0) {
            //         var getSelectedData = this.getDataAtRow(row);
            //         var filterSelectedData = _.findWhere($scope.searchVouchers, {folioNo: getSelectedData[0]});
            //         $scope.redirectToViewVoucher(filterSelectedData);
            //     }
            // }
        });
        $("#voucherTable").addClass('hand-son-table-scroll');
    }

    handSonTableSetting();

}]);