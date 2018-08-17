
angular.module('moduleName', [])
.controller('parentCtrl', function() {
  this.clickBtn = function() {
    alert('controller!!!!!!');
  }
}) 
.controller('childCtrl', function() {
  
})
.directive('parent', function() {
    return {
      controller: 'parentCtrl',
      controllerAs : 'parent',
      restrict: 'E',
    }
  })
  .directive('child', function() {        
      return {
        template:"<button ng-click='child.childClick()'>Press!</button>",
        controller: 'childCtrl',
        controllerAs: 'child',
        restrict: 'E',
        bindToController: {
          childClick: '&onClick'},        
      }
  });
  ;
