/*
 *  Document   : setting.js
 *  Author     : Meaglith Ma <genedna@gmail.com> @genedna
 *  Description:
 *
 */

'use strict';

//Auth Page Module
angular.module('dashboard', ['ngRoute', 'ngMessages', 'ngCookies', 'angular-growl'])
    .controller('AddRepositoryCtrl', ['$scope', '$cookies', '$http', 'growl', '$location', '$timeout', '$upload', '$window', function($scope, $cookies, $http, growl, $location, $timeout, $upload, $window) {

    }])
    .controller('PublicRepositoryCtrl', ['$scope', '$cookies', '$http', 'growl', '$location', '$timeout', '$upload', '$window', function($scope, $cookies, $http, growl, $location, $timeout, $upload, $window) {

    }])
    .controller('RepositoriesCtrl', ['$scope', '$cookies', '$http', 'growl', '$location', '$timeout', '$upload', '$window', function($scope, $cookies, $http, growl, $location, $timeout, $upload, $window) {

    }])
    .controller('PrivateRepositoryCtrl', ['$scope', '$cookies', '$http', 'growl', '$location', '$timeout', '$upload', '$window', function($scope, $cookies, $http, growl, $location, $timeout, $upload, $window) {

    }])
    .controller('StarRepositoryCtrl', ['$scope', '$cookies', '$http', 'growl', '$location', '$timeout', '$upload', '$window', function($scope, $cookies, $http, growl, $location, $timeout, $upload, $window) {

    }])
    //routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/repo', {
                templateUrl: '/static/views/dashboard/repositories.html',
                controller: 'RepositoriesCtrl'
            })
            .when('/repo/add', {
                templateUrl: '/static/views/dashboard/repositoryAdd.html',
                controller: 'AddRepositoryCtrl'
            })
            .when('/repo/public', {
                templateUrl: '/static/views/dashboard/repoPublic.html',
                controller: 'PublicRepositoryCtrl'
            })
            .when('/repo/private', {
                templateUrl: '/static/views/dashboard/repoPrivate.html',
                controller: 'PrivateRepositoryCtrl'
            })
            .when('/repo/star', {
                templateUrl: '/static/views/dashboard/repoStar.html',
                controller: 'StarRepositoryCtrl'
            })
            .when('/comments', {
                templateUrl: '/static/views/dashboard/comment.html',
                controller: 'CommentCtrl'
            })
    })
    .directive('namespaceValidator', [function() {
        var NAMESPACE_REGEXP = /^([a-z0-9_]{6,30})$/;

        return {
            require: 'ngModel',
            restrict: '',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$validators.usernames = function(value) {
                    return USERNAME_REGEXP.test(value);
                }
            }
        };
    }]);
