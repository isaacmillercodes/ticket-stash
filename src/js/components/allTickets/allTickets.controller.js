(function() {

  angular.module('ticketStash.components.allTickets')
    .controller('ticketController', ticketController);

  ticketController.$inject = ['TicketService'];

  function ticketController (TicketService) {
    const vm = this;

    vm.tickets = TicketService.getAll();

    vm.search = '';

    vm.categories = [];

    //this will, ideally, become a sort function

    vm.setSort = function(input) {
      let sortTickets = [];

      // vm.tickets.map(ticket => {
      //
      //   let matchingCategory = ticket.categories.filter(ticketCategory => {
      //       return ticketCategory === input;
      //     })[0];
      //
      //   if (matchingCategory) {
      //     sortTickets.push(ticket);
      //   }
      //
      // });

    };

    //When tickets have categories key, this pushes each category to vm.categories and ignores duplicates

    vm.tickets.map(ticket => {
      ticket.categories.map(ticketCategory => {
        let matchingCategory = vm.categories.filter(vmCategory => {
          return ticketCategory === vmCategory;
        })[0];

        if (!matchingCategory) {
          vm.categories.push(ticketCategory);
        }
      });
    });

    //When tickets have mainCategory and subCategory keys, this works for filling vm.categories with objects with name and subCategory keys

    // vm.tickets.map(ticket => {
    //
    //   let matchingCategory = vm.categories.filter(category => {
    //     return ticket.mainCategory === category.name;
    //   })[0];
    //
    //   if (!matchingCategory) {
    //
    //     if (ticket.subCategory) {
    //       vm.categories.push({
    //         name: ticket.mainCategory,
    //         subCategories: [ticket.subCategory]
    //       });
    //     } else {
    //       vm.categories.push({
    //         name: ticket.mainCategory,
    //         subCategories: []
    //       });
    //     }
    //
    //   } else {
    //     if (ticket.subCategory) {
    //
    //       let existingSub = matchingCategory.subCategories.filter(subcategory => {
    //         return ticket.subCategory === subcategory;
    //       })[0];
    //
    //       if (!existingSub) {
    //         matchingCategory.subCategories.push(ticket.subCategory);
    //       }
    //
    //     }
    //   }
    //
    // });

  }
}());
