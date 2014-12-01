


stockMarketApplication.controller("stockMarketController",
['$scope', '$timeout', 'stockMarketService',
function ($scope, $timeout, stockMarketService) {
    $scope.stockTypes = [
       { Name: "Dow Jones Industrial Average", Id: 1 },
       { Name: "NASDAQ Composite", Id: 2 },
       { Name: "S & P 500", Id: 3 }
    ];


    $scope.marketUpDownSymbols = [{ Value: '+' }, { Value: '-' }];
    $scope.onSuccessfulSubmit = false;


    $scope.message = '';



    $scope.StockMarketDailys = [];
    bindGrid();
    


    function bindGrid() {
        stockMarketService.getStocks()
              .success(function (data, status, headers, config) {
                  $scope.StockMarketDailys = data;
              }).
               error(function (data, status, headers, config) {
               });
    }

    $scope.EditStockMarketDaily = function (StockMarketDaily) {

        //alert(StockMarketDaily.Id);
    }

    $scope.DeleteStockMarketDaily = function (StockMarketDaily) {

        if (StockMarketDaily.Id !== 'undefined'
            && StockMarketDaily.Id !== null
            && typeof (StockMarketDaily.Id === 'number'))
        {
            if (window.confirm('Are you sure, you want to delete this record?'))
            {
                stockMarketService.deleteStockMarketDaily(StockMarketDaily.Id)
                .success(function (data, status) {
                    $scope.onSuccessfulSubmit = true;
                    $scope.message = "Record Deleted Succesfully.";
                    $timeout(function () {
                        $scope.onSuccessfulSubmit = false;
                    }, 3000)

            bindGrid();

        });
            }
        }
    }
    $scope.addStockMarketDaily = function () {
        var stockMarketDaily = {
            StockName: $scope.currentStock,
            StockClosingValue: $scope.currentMarketValue,
            StockUpOrDownSymbol: $scope.currentSymbol,
            StockUpOrDownValue: $scope.marketUpOrDownValue,
        };


        stockMarketService.saveStockMarket(stockMarketDaily)
        .success(function (data, status) {
            $scope.message = "Record added successfully.";
            $scope.onSuccessfulSubmit = true;
            $timeout(function () {
                $scope.onSuccessfulSubmit = false;
                resetValues();
            }, 3000)

            bindGrid();
           
        });
       

       
        
        function resetValues() {
            $scope.currentStock = "";
            $scope.currentMarketValue = "";
            $scope.currentSymbol = "";
            $scope.marketUpOrDownValue = "";
        }

    }
}]);