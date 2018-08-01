app.factory("CrudServicePlayer", ["localStorageService", "$http", function(localStorageService, $http) {

    var crudServicePlayer = {};

    crudServicePlayer.key = "angular-players";

    if (localStorageService.get(crudServicePlayer.key)) {
        crudServicePlayer.players = localStorageService.get(crudServicePlayer.key);
    } else {
        crudServicePlayer.players = [];
    }

    // Add players from players.json
    crudServicePlayer.add = function() {
        crudServicePlayer.players = [];
        crudServicePlayer.response = {success: false};
        $http.get("../../players.json")
            .then(data => {
                data.data.forEach(player => {
                    crudServicePlayer.players.push(player);
                });
                crudServicePlayer.refresh();
                crudServicePlayer.response.success = true;
                crudServicePlayer.response.message = "Players successfully added";
            })
            .catch(err => {
                console.log(err);
                crudServicePlayer.response.message = "Sorry, there was an error...";
            });
        return crudServicePlayer.response;
    }

    crudServicePlayer.getAll = function() {
        return crudServicePlayer.players;
    }

    crudServicePlayer.removePlayer = function(player) {
        crudServicePlayer.players = crudServicePlayer.players.filter(function(p) {
            return p !== player;
        });
        crudServicePlayer.refresh();
        return crudServicePlayer.getAll();
    }

    crudServicePlayer.refresh = function() {
        localStorageService.set(crudServicePlayer.key, crudServicePlayer.players);
    }

    return crudServicePlayer;

}]);