ngUnderscore
============

Integration of Underscore.js with your AngularJS application

## Usage
```
angular.module('app', ['ngUnderscore'])

.controller('YourCtrl', function (underscore) {
  var users = [{...}, {...}, ...];

  $scope.users = underscore.filter(users, function (user) {
    return (user.id > 100);
  });
});
```

## Installation
```
bower install --save ng-underscore.js
```
