(function() {
  'use strict';

  angular.module('ticketStash.components.allTickets')
    .service('TicketService', TicketService);

  function TicketService () {

    const allTickets = [
      {
        id: 1,
        name: 'Denver Broncos vs. Houston Texans',
        date: new Date('October 24, 2016 18:30:00'),
        price: 125.00,
        venue: 'Sports Authority Field at Mile High',
        venueCapacity: 75000,
        quantityRemaining: 3296,
        soldOut: false,
        imageUrl: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAZ_AAAAJDg3NWFmMGVjLTRmYTctNDk1Ny05MTk4LWRmMjEzNjk2YjkyZg.jpg',
        categories: ['Sports', 'Denver Broncos']
      },
      {
        id: 2,
        name: 'Amy Schumer',
        date: new Date('November 5, 2016 20:00:00'),
        price: 99.99,
        venue: 'Bellco Theatre',
        venueCapacity: 5000,
        quantityRemaining: 1249,
        soldOut: false,
        imageUrl: 'http://www.dinnerpartydownload.org/wp-content/uploads/2014/04/IAS-S2-06-red-dress_0540_12.jpg',
        categories: ['Comedy']
      },
      {
        id: 3,
        name: 'Snoop Dogg',
        date: new Date('December 4, 2016 19:00:00'),
        price: 49.99,
        venue: 'Fillmore Auditorium',
        venueCapacity: 3700,
        quantityRemaining: 2109,
        soldOut: false,
        imageUrl: 'http://www.fillmoreauditorium.org/wp-content/uploads/2016/10/snoop-dogg-city-sound-milano-festival-18-1.png',
        categories: ['Music', 'Hip Hop']
      },
      {
        id: 4,
        name: 'Colorado Avalanche vs. Winnipeg Jets',
        date: new Date('October 28, 2016 19:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 11983,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2447/avalanchematchups_1000x1000_winnipegjets.jpg',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 5,
        name: 'Kings of Leon',
        date: new Date('January 25, 2017 20:00:00'),
        price: 35.00,
        venue: '1st Bank Center',
        venueCapacity: 6500,
        quantityRemaining: 1532,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2702/kings-of-leon-event-2017.jpg',
        categories: ['Music', 'Rock']
      }
    ];

    this.getAll = () => {
      return allTickets;
    };

  }

}());
