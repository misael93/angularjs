app.controller("teamsController", function($scope, CrudServiceTeam, $routeParams, $location) {

    // $scope.team = {
    //     id = 1,
    //     name: "Guadalajara",
    //     website: "http://www.chivasdecorazon.com.mx/",
    //     founded: 1906,
    //     marketValue: 500
    // };

    resetTeam();

    $scope.response = undefined;
    $scope.searching = false;

    $scope.listTeams = CrudServiceTeam.getAll();

    $scope.addTeam = function() {
        $scope.response = CrudServiceTeam.add($scope.team);
        resetTeam();
    }

    $scope.deleteTeam = function(team) {
        $scope.listTeams = CrudServiceTeam.removeTeam(team);
        resetTeam();
    }

    $scope.editTeam = function() {
        $scope.response = CrudServiceTeam.save($scope.team);
        resetTeam();
    }

    var init = function() {
        if ($routeParams.id) {
            // I have to set the team values to a new variable because if a send the actual team object
            // to the view when I submit the form it instantly changes the object values and I wanted
            // to do that in my factory file so I could check for repeated names
            var t = CrudServiceTeam.getTeam($routeParams.id);
            $scope.team = {
                id: t.id,
                name: t.name,
                website: t.website,
                founded: t.founded,
                marketValue: t.marketValue
            }
        }
    }

    init();

    function resetTeam() {
        $scope.team = {
            id: null,
            name: null,
            website: null,
            founded: null,
            marketValue: null
        };
    }

});