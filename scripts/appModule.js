var app = angular.module("appModule", ["LocalStorageModule", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../views/teams/index.html",
        controller: "teamsController"
    })
    .when("/teams", {
        templateUrl: "../views/teams/index.html",
        controller: "teamsController"
    })
    .when("/teams/create", {
        templateUrl: "../views/teams/create.html",
        controller: "teamsController"
    })
    .when("/teams/:id", {
        templateUrl: "../views/teams/edit.html",
        controller: "teamsController"
    })
    .when("/players", {
        templateUrl: "../views/players/index.html",
        controller: "playersController"
    })
    .when("/players/create", {
        templateUrl: "../views/players/create.html",
        controller: "playersController"
    })
    .otherwise({ redirectTo: "/" });
});