(function() {

  angular.module('ticketStash.components.allTickets')
    .controller('ticketController', ticketController);

  ticketController.$inject = ['TicketService'];

  function ticketController (TicketService) {
    const vm = this;

    vm.tickets = TicketService.getAll();

    vm.categories = [];

    vm.tickets.map(ticket => {

      let matchingCategory = vm.categories.filter(category => {
        return ticket.mainCategory === category.name;
      })[0];

      if (!matchingCategory) {

        if (ticket.subCategory) {
          vm.categories.push({
            name: ticket.mainCategory,
            subCategories: [ticket.subCategory]
          });
        } else {
          vm.categories.push({
            name: ticket.mainCategory,
            subCategories: []
          });
        }

      } else {
        if (ticket.subCategory) {

          let existingSub = matchingCategory.subCategories.filter(subcategory => {
            return ticket.subCategory === subcategory;
          })[0];

          if (!existingSub) {
            matchingCategory.subCategories.push(ticket.subCategory);
          }

        }
      }

    });

  }
}());
