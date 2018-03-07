(function() {

    'use strict';

    angular
        .module('app', ['auth0.auth0', 'ui.router'])
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'angularAuth0Provider'
    ];

    function config(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        angularAuth0Provider
    ) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'app/home/home.html',
                controllerAs: 'vm'
            })
            .state('callback', {
                url: '/callback',
                controller: 'CallbackController',
                templateUrl: 'app/callback/callback.html',
                controllerAs: 'vm'
            });;

        // Initialization for the angular-auth0 library
        angularAuth0Provider.init(
            //used to cerate an instance of WebAuth object from auth0.js
            {
                // Configuration for your client and domain
                clientID: AUTH0_CLIENT_ID,
                domain: AUTH0_DOMAIN,

                // Response type, to show that you need a user's Access Token and an ID Token after authentication
                responseType: 'token id_token',

                // Audience and scope,
                // which specify that authentication must be OIDC - conformant
                audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
                redirectUri: AUTH0_CALLBACK_URL,
                scope: 'openid'
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');

        /// Comment out the line below to run the app
        // without HTML5 mode (will use hashes in routes)
        $locationProvider.html5Mode(true);
    }

})();