app.service("CrudServiceTeam", ["localStorageService", function(localStorageService) {

    this.key = "angular-teams";

    if (localStorageService.get(this.key)) {
        this.teams = localStorageService.get(this.key);
    } else {
        this.teams = [];
    }

    this.getAll = function() {
        return this.teams;
    }

    this.add = function(team) {
        var response = {success: false};
        if (this.getTeamByName(team.name) == undefined) {
            team.id = this.nextId();
            this.teams.push(team);
            this.refresh();
            response.success = true;
            response.message = "Team successfully added";
        } else {
            response.message = "There is a team with that name already!";
        }
        return response;
    }

    // Id for next team
    this.nextId = function() {
        if (this.teams.length > 0){
            return parseInt(this.teams[this.teams.length - 1].id) + 1;
        }
        else {
            return 1;
        }
    }

    this.save = function(team) {
        var response = {success: false};
        if (this.getTeamByName(team.name, team.id) == undefined) {
            var thisTeam = this.getTeam(team.id);
            thisTeam.name = team.name;
            thisTeam.website = team.website;
            thisTeam.founded = team.founded;
            thisTeam.marketValue = team.marketValue;
            response.success = true;
            response.message = "The team info has been saved.";
        } else {
            response.message = "There is a team with that name already!";
        }
        this.refresh();
        return response;
    }

    this.removeTeam = function(team) {
        this.teams = this.teams.filter(function(t) {
            return t !== team;
        });
        this.refresh();
        return this.getAll();
    }

    this.refresh = function() {
        localStorageService.set(this.key, this.teams);
    }

    // Returns undefined if there is no team that matches
    // id parameter indicates the team that we should not compare
    // so we can edit its info
    this.getTeamByName = function(name, id) {
        for (var i = 0; i < this.teams.length; i++) {
            if (this.teams[i].name.toLowerCase() == name.toLowerCase()) {
                console.log(this.teams[i]);
                if (id == undefined || this.teams[i].id != id) {
                    return this.teams[i];
                }
            }
        }
        return undefined;
        // return this.teams.find(t => t.name.toLowerCase() == name.toLowerCase() && t.id);
    }

    this.getTeam = function(id) {
        return this.teams.find(t => t.id == id);
    }

}]);