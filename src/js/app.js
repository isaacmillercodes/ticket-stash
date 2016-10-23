// sample angular code

(function() {

  'use strict';

  angular
    .module('ticketStash', [
      'ticketStash.config',
      'ui.materialize',
      'angularMoment',
      'ticketStash.components.allTickets'
    ]);

})();
