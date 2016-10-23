// 1. Write an IIFE
// 2. Create/Access your module
// 3. $inject
// 4. Named function and write the function
// 5. Connect in app.js
// 6. connect in index.html

(function() {
  'use strict';

  angular.module('ticketStash.components.allTickets')
    .directive('ticket', TicketDirective);

  TicketDirective.$inject = [];

  function TicketDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'ticketController',
      controllerAs: 'vm',
      templateUrl: './js/components/allTickets/allTickets.html'
    };
  }
}());
