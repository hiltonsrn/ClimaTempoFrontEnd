angular.module('textInputExample', [])
    .controller('ExampleController', ['$scope', '$http', function ($scope, $http) {

        $scope.MaisQuentes = [];
        $scope.MaisFrias = [];
        $scope.Previsoes = [];
        $scope.QtdPesquisaHoje = 5;
        $scope.QtdPesquisaDias = 7;
        $scope.Cidades = [];
        $scope.Keyword = "nome";
        $scope.Cidade = {};

        //ngOnInit() {
        //    $scope.ListarMaisQuentes();
        //    $scope.ListarMaisFrias();
        //    $scope.ListarCidades();
        //}
        $scope.ListarMaisQuentes = () => {
            $scope._service.ListarMaisQuentes($scope.QtdPesquisaHoje).subscribe(
                result => {
                    if (result.success) {
                        $scope.MaisQuentes = result.data;
                        console.log($scope.MaisQuentes);
                    }
                }
            )
        }

        $scope.ListarMaisFrias = () => {
            $scope._service.ListarMaisFrias($scope.QtdPesquisaHoje).subscribe(
                result => {
                    if (result.success) {
                        $scope.MaisFrias = result.data;
                    }
                }
            )
        }
        $scope.ListarPrevisoes = () => {
            $scope._service.ListarPrevisoes($scope.QtdPesquisaDias, $scope.Cidade.id).subscribe(
                result => {
                    if (result.success) {
                        $scope.Previsoes = result.data;
                    }
                }
            )
        }
        $scope.ListarCidades = () => {
            $scope._service.ListarCidades().subscribe(
                result => {
                    if (result.success) {
                        $scope.Cidades = result.data;
                    }
                }
            )
        };
        $scope.selectEvent = (item) => {
            $scope.Cidade = item;
            $scope.ListarPrevisoes();
        };

        o$scope.nChangeSearcht = (val) => {

        };

        $scope.onFocusedt = (e) => {

        };




    }]);

