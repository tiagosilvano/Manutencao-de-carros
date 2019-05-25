angular.module('app')
    .controller('ManutencaoListController', ManutencaoListController);
    ManutencaoListController.$inject = ['ManutencaoService'];

    function ManutencaoListController(ManutencaoService){
    var vm = this;
    vm.manutencao = [];


function _load() {
    ManutencaoService.findAll()
        .then(function (dados) {
            vm.manutencao = dados;
        });
}
_load();

vm.excluir = function (id) {
    if (confirm('Deseja realmente excluir?')) {
        ManutencaoService.remove(id)
            .then(function() {
                _load();
            });
    }
}
}