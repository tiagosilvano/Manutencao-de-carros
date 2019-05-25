angular.module('app')
    .controller('ManutencaoFormController', ManutencaoFormController);
ManutencaoFormController.$inject = ['$state','$stateParams','ManutencaoService' ,'CarroService', 'UtilService' ]

function ManutencaoFormController($state,$stateParams,  ManutencaoService, CarroService, UtilService) {
    var vm = this;
    vm.manutencao = {};
    vm.titulo = 'Nova manutenção';
    vm.tipoServicoList = gettipoServico()
    vm.veiculosFiltrados = []
    vm.manutencao.dtManutencao = UtilService.getDataAtual();

    if ($stateParams.id) {
        vm.titulo = 'Editando Manutenção';
        ManutencaoService.findOne($stateParams.id)
            .then(function (data) {
                vm.manutencao = data;
            });
    }

    vm.save = function() {  
              
        if ($stateParams.id) {
            ManutencaoService
                .update($stateParams.id, vm.manutencao)
                .then(function() {
                    $state.go('manutencaoList');
                });
        } else {
            ManutencaoService
                .insert(vm.manutencao)
                .then(function() {
                    $state.go('manutencaoList');
                });
        }
    }

    vm.buscaVeiculos = function (placa) {
        vm.veiculoSelecionado = null
        if (placa) {
            if (placa.length <= 2) {
                vm.hideList = true
            } else {
                vm.hideList = false;
                vm.veiculosFiltrados = []
                CarroService.getByPlaca(placa)
                    .then(function (veiculosList) {                                         
                        if (veiculosList) {
                            angular.forEach(veiculosList, function (veiculo) {
                                vm.veiculosFiltrados.push(veiculo)                                   
                            })
                            
                        }
                    })
            }
           
        }
    }
    vm.setVeiculoSelecionado = function(veiculo){
        vm.manutencao.placa = veiculo.placa;
        vm.hideList=true;
        vm.veiculoSelecionado=veiculo;
    }

}

function gettipoServico() {
    var tipoServicoList = []
    tipoServicoList.push("Lataria e pintura")
    tipoServicoList.push("Mecânica")
    tipoServicoList.push("Pneus")
    tipoServicoList.push("Lavação")
    return tipoServicoList
}