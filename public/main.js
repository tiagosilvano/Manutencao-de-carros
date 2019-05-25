angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'carroList',
            url: '/carros',
            templateUrl: '/views/carros/list.html',
            controller: 'CarroListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'carroNovo',
            url: '/carros/novo',
            templateUrl: '/views/carros/form.html',
            controller: 'CarroFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'carroEditar',
            url: '/carros/:id',
            templateUrl: '/views/carros/form.html',
            controller: 'CarroFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'manutencaoEditar',
            url: '/manutencao/:id',
            templateUrl: '/views/manutencao/form.html',
            controller: 'ManutencaoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'manutencaoList',
            url: '/manutencao',
            templateUrl: '/views/manutencao/list.html',
            controller: 'ManutencaoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'manutencaoNovo',
            url: '/manutencao/novo',
            templateUrl: '/views/manutencao/form.html',
            controller: 'ManutencaoFormController',
            controllerAs: 'vm'
        });
} 