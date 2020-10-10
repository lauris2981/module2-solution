( function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

      var toBuy = this;

      toBuy.items = ShoppingListCheckOffService.getToBuyList();

      toBuy.removeItem = function (itemIndex, itemName, quantity) {
        ShoppingListCheckOffService.addToBoughtList(itemName, quantity);
        ShoppingListCheckOffService.removeFromToBuyList(itemIndex);
      };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      bought.items = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {

      var service = this;

      var shoppingList = [
        {
          name: "cookies", quantity: "10"
        },
        {
          name: "chocolate cakes", quantity: "3"
        },
        {
          name: "banana", quantity: "8"
        },
        {
          name: "water-melon", quantity: "5"
        },
        {
          name: "raspberry marmalade", quantity: "22"
        }
      ];

      var toBuyList = shoppingList;

      var boughtList = [];

      service.getToBuyList = function () {
        return toBuyList;
      };

      service.removeFromToBuyList = function (itemIndex) {
        toBuyList.splice(itemIndex, 1);
      };

      service.getBoughtList = function () {
        return boughtList;
      };

      service.addToBoughtList = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        boughtList.push(item);
      };

    }

  })();
