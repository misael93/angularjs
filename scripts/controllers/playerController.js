app.controller("playersController", function($scope, CrudServicePlayer) {

    $scope.player = {
        id: null,
        name: null
    };

    $scope.response = undefined;
    $scope.searching = false;
    $scope.flag = false;

    $scope.listPlayers = CrudServicePlayer.getAll();

    $scope.add = function() {
        $scope.response = CrudServicePlayer.add();
        $scope.player = {
            id: null,
            name: null
        };
    }

    $scope.deletePlayer = function(player) {
        $scope.listPlayers = CrudServicePlayer.removePlayer(player);
        $scope.player = {
            id: null,
            name: null
        };
    }

});

/*

https://www.json-generator.com/

[
  '{{repeat(20)}}',
  {
    name: '{{firstName()}} {{surname()}}',
    birth_year: function () {
      return Math.floor(Math.random() * (2000 - 1980 + 1) + 1980);
    },
    position: function () {
      var positions = ["Goalkeeper", "Full-back", "Wing-back", "Centre midfield", "Defensive midfield", "Attacking midfield", "Centre forward", "Second striker", "Winger"];
      var x = Math.floor(Math.random() * 10);
      console.log(x);
      return positions[x];
    }
  }
]

*/