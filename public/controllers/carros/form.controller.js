
angular.module('app')
    .controller('CarroFormController', CarroFormController);

    CarroFormController.$inject = [
    'CarroService', 
    '$stateParams', 
    '$state'
];


function CarroFormController (CarroService, $stateParams, $state){
    var regex = '';
    var vm = this;
    vm.carro = {};
    vm.titulo = 'Novo carro';
    vm.combustivelList = getCombustivel();
    vm.marcasList = getMarcasList()

    if ($stateParams.id) {
        vm.titulo = 'Editando Carro';
        CarroService.findOne($stateParams.id)
            .then(function (data) {
                vm.carro = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            CarroService
                .update($stateParams.id, vm.carro)
                .then(function() {
                    $state.go('carroList');
                });
        } else {
            CarroService
                .insert(vm.carro)
                .then(function() {
                    $state.go('carroList');
                });
        }
    }
}
function getCombustivel(){
    var combustivelList=[]
    combustivelList.push("Flex")
    combustivelList.push("Alcool")
    combustivelList.push("Gasolina")
    combustivelList.push("Diesel")
    return combustivelList
}

function getMarcasList(){
    var marcasList=[]
    marcasList.push("Subaru")
    marcasList.push("Suzuki")
    marcasList.push("Tesla")
    marcasList.push("Toyota")
    marcasList.push("Triumph")
    marcasList.push("UMM")
    marcasList.push("Volkswagen")
    return marcasList
}
