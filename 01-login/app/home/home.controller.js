(function() {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', homeController);
    console.log('HomeController....');
    homeController.$inject = ['authService'];

    function homeController(authService) {
        var vm = this;
        vm.auth = authService;
    }
})();