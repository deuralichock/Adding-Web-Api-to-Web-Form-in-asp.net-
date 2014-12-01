


stockMarketApplication.factory("stockMarketService", ['$http', '$resource',
function ($http, $resource) {
    var stockMarketDataProvider = {};
    stockMarketDataProvider.saveStockMarket = function (stockMarketDaily) {
        var apiUrl = "/api/StockMarket";
        return $http.post(apiUrl, stockMarketDaily);
    }

    stockMarketDataProvider.getStocks = function (){
        return $http.get("/api/StockMarket");
    }

    stockMarketDataProvider.deleteStockMarketDaily = function (id) {

        return $http.delete('/api/StockMarket/Delete/' + id);

        //$http.delete('/api/Delete' + roleid, {params: {userId: userID});
    }
    return stockMarketDataProvider;
}]);
