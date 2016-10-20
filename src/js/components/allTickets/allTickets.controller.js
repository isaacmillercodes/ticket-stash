(function() {

  angular.module('ticketStash.components.allTickets')
    .controller('ticketController', ticketController);

  ticketController.$inject = ['TicketService'];

  function ticketController (TicketService) {
    const vm = this;

    vm.tickets = TicketService.getAll();
  }
}());
