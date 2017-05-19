//DIRECTIVES

weatherApp.directive('forecastResults', function(){
    return{
        restrict:'E',
        templateUrl:'directives/results.htm',
        replace:true,
        scope:{
            weatherDay:"=",
            convertToStandard:"&",
            convertToDate:"&",
            dateFormat:"@"
        }
    }
})