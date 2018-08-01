app.directive("hideTable", function() {
    return function(scope, element, attrs) {
        attrs.$observe('hideTable', function(value){
            if (value == 0) {
                element.empty();
                element.append("<p>There are no records.</p>");
            }
          });
    }
});