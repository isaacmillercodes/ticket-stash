// sample angular code

(function() {

  'use strict';

  angular
    .module('ticketStash', [
      'ticketStash.config',
      'ui.materialize',
      'ticketStash.components.allTickets',
      'angularMoment'
    ]);

})();

$(document).ready(function() {
    $('select').material_select();
});
