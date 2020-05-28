(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemBuyer = this;

        itemBuyer.toBuyList = ShoppingListCheckOffService.getToBuyItems();
        itemBuyer.itemName;


        // remove item when bought
        itemBuyer.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };

        
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var checkoffKeeper = this;
        checkoffKeeper.boughtItems = ShoppingListCheckOffService.getBoughtItems();   
    }

    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items
        service.toBuyItems = [
            { name: "milk", quantity: 1 },
            { name: "water", quantity: 2 },
            { name: "cookies", quantity: 3 },
            { name: "bread", quantity: 1 },
            { name: "butter", quantity: 2 }];

        service.boughtItems = [];
      
        service.removeItem = function (itemIndex) {
            // add el to bought list
            service.boughtItems.push(service.toBuyItems[itemIndex]);

            // remove el from toBuyList
            service.toBuyItems.splice(itemIndex, 1);
        };

        service.getBoughtItems = function () {
            return service.boughtItems;
          };

          service.getToBuyItems = function () {
            return service.toBuyItems;
          };


      }


})();