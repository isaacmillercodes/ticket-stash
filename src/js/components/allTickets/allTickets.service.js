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
        imageUrl: 'http://cbsdenver.files.wordpress.com/2014/05/texans-bronos-logo.png?w=420&h=237',
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
        imageUrl: 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2015/04/03/amy-schumer-9999.jpg?itok=4LdNiFpO',
        categories: ['Comedy']
      },
      {
        id: 3,
        name: 'Snoop Dogg',
        date: new Date('December 4, 2016 19:00:00'),
        price: 49.99,
        venue: 'Fillmore Auditorium',
        venueCapacity: 3700,
        quantityRemaining: 569,
        soldOut: false,
        imageUrl: 'http://img0.gtsstatic.com/wallpapers/aae482bd20caf2fd0c7d71fcf996137a_large.jpeg',
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
        imageUrl: 'http://www.altitudetickets.com/media/2447/avalanchematchups_1000x1000_winnipegjets.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
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
        imageUrl: 'http://s1.bwallpapers.com/wallpapers/2014/04/11/kings-of-leon-background_113200397.jpg',
        categories: ['Music', 'Rock']
      },
      {
        id: 6,
        name: 'Denver Broncos vs. San Diego Chargers',
        date: new Date('October 30, 2016 14:05:00'),
        price: 125.00,
        venue: 'Sports Authority Field at Mile High',
        venueCapacity: 75000,
        quantityRemaining: 5984,
        soldOut: false,
        imageUrl: 'http://cbsdenver.files.wordpress.com/2014/05/chargers-broncos-logo.png?w=420&h=237',
        categories: ['Sports', 'Denver Broncos']
      },
      {
        id: 7,
        name: 'Denver Broncos vs. Kansas City Chiefs',
        date: new Date('November 27, 2016 14:25:00'),
        price: 125.00,
        venue: 'Sports Authority Field at Mile High',
        venueCapacity: 75000,
        quantityRemaining: 9284,
        soldOut: false,
        imageUrl: 'http://cbsdenver.files.wordpress.com/2014/05/chiefs-broncos-logo.png?w=420&h=234',
        categories: ['Sports', 'Denver Broncos']
      },
      {
        id: 8,
        name: 'Denver Broncos vs. New England Patriots',
        date: new Date('December 18, 2016 14:25:00'),
        price: 125.00,
        venue: 'Sports Authority Field at Mile High',
        venueCapacity: 75000,
        quantityRemaining: 429,
        soldOut: false,
        imageUrl: 'http://cbsdenver.files.wordpress.com/2015/10/new-england-patriots-denver-broncos-logo1.jpg?w=420&h=234',
        categories: ['Sports', 'Denver Broncos']
      },
      {
        id: 9,
        name: 'Denver Broncos vs. Oakland Raiders',
        date: new Date('January 1, 2017 14:25:00'),
        price: 125.00,
        venue: 'Sports Authority Field at Mile High',
        venueCapacity: 75000,
        quantityRemaining: 2389,
        soldOut: false,
        imageUrl: 'http://cbsdenver.files.wordpress.com/2014/05/raiders-broncos-logo.png?w=420&h=236',
        categories: ['Sports', 'Denver Broncos']
      },
      {
        id: 10,
        name: 'Colorado Avalanche vs. Nashville Predators',
        date: new Date('November 1, 2016 19:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 8413,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2462/avalanchematchups_1000x1000_nashvillepredators.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 11,
        name: 'Colorado Avalanche vs. Minnesota Wild',
        date: new Date('November 5, 2016 13:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 4912,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2460/avalanchematchups_1000x1000_minnesotawild.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 12,
        name: 'Colorado Avalanche vs. Arizona Coyotes',
        date: new Date('November 8, 2016 19:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 10923,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2439/avalanchematchups_1000x1000_phoenixcoyotes.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 13,
        name: 'Colorado Avalanche vs. Boston Bruins',
        date: new Date('November 13, 2016 17:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 10923,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2449/avalanchematchups_1000x1000_bostonbruins.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 14,
        name: 'Colorado Avalanche vs. Los Angeles Kings',
        date: new Date('November 15, 2016 19:00:00'),
        price: 59.99,
        venue: 'Pepsi Center',
        venueCapacity: 18000,
        quantityRemaining: 5231,
        soldOut: false,
        imageUrl: 'http://www.altitudetickets.com/media/2459/avalanchematchups_1000x1000_losangeleskings.jpg?anchor=center&mode=crop&width=358&height=160&rnd=131115863940000000',
        categories: ['Sports', 'Colorado Avalanche']
      },
      {
        id: 15,
        name: 'Daniel Koren',
        date: new Date('October 28, 2016 19:30:00'),
        price: 22.00,
        venue: 'Comedy Works Downtown',
        venueCapacity: 324,
        quantityRemaining: 129,
        soldOut: false,
        imageUrl: 'http://danielkoren.net/wp-content/uploads/2014/03/danielkoren9.jpg',
        categories: ['Comedy']
      },
      {
        id: 16,
        name: 'Brad Williams',
        date: new Date('November 5, 2016 19:30:00'),
        price: 23.00,
        venue: 'Comedy Works Downtown',
        venueCapacity: 324,
        quantityRemaining: 58,
        soldOut: false,
        imageUrl: 'http://www.tvinsider.com/wp-content/uploads/images/content/promos/Brad_Williams_Fun_Size.jpg',
        categories: ['Comedy']
      },
      {
        id: 17,
        name: 'Jackie Kashian',
        date: new Date('November 11, 2016 21:45:00'),
        price: 22.00,
        venue: 'Comedy Works South',
        venueCapacity: 500,
        quantityRemaining: 293,
        soldOut: false,
        imageUrl: 'http://www.jackiekashian.com/images/backgrounds/jackie_kashian_stage.jpg',
        categories: ['Comedy']
      },
      {
        id: 18,
        name: 'An Evening with Kevin Smith',
        date: new Date('December 12, 2016 21:45:00'),
        price: 35.00,
        venue: 'Comedy Works South',
        venueCapacity: 500,
        quantityRemaining: 15,
        soldOut: false,
        imageUrl: 'http://static5.comicvine.com/uploads/original/10/100647/3025606-smithkindy.jpg',
        categories: ['Comedy']
      },
      {
        id: 19,
        name: 'Josh Blue',
        date: new Date('December 22, 2016 20:00:00'),
        price: 35.00,
        venue: 'Comedy Works South',
        venueCapacity: 500,
        quantityRemaining: 215,
        soldOut: false,
        imageUrl: 'http://images1.westword.com/imager/u/745x420/7331390/joshblue.jpg',
        categories: ['Comedy']
      },
      {
        id: 20,
        name: 'Young the Giant',
        date: new Date('November 2, 2016 19:00:00'),
        price: 25.00,
        venue: 'Ogden Theatre',
        venueCapacity: 1600,
        quantityRemaining: 111,
        soldOut: false,
        imageUrl: 'http://d1ya1fm0bicxg1.cloudfront.net/2016/07/young-the-giant-tickets_11-03-16_17_57801a366c210.jpg',
        categories: ['Music', 'Rock']
      },
      {
        id: 21,
        name: 'Rae Sremmurd',
        date: new Date('November 3, 2016 19:00:00'),
        price: 34.50,
        venue: 'Ogden Theatre',
        venueCapacity: 1600,
        quantityRemaining: 354,
        soldOut: false,
        imageUrl: 'http://d1ya1fm0bicxg1.cloudfront.net/2016/09/rae-sremmurd-tickets_11-04-16_17_57eaddf924bc9.jpg',
        categories: ['Music', 'Hip Hop']
      },
      {
        id: 22,
        name: 'Lupe Fiasco',
        date: new Date('December 15, 2016 20:00:00'),
        price: 29.99,
        venue: 'Fillmore Auditorium',
        venueCapacity: 3700,
        quantityRemaining: 1843,
        soldOut: false,
        imageUrl: 'http://www.fillmoreauditorium.org/wp-content/uploads/2016/10/300-X-220px-1-1.jpg',
        categories: ['Music', 'Hip Hop']
      },
      {
        id: 23,
        name: 'The Faint',
        date: new Date('October 29, 2016 19:00:00'),
        price: 29.50,
        venue: 'Gothic Theatre',
        venueCapacity: 1100,
        quantityRemaining: 132,
        soldOut: false,
        imageUrl: 'http://d1ya1fm0bicxg1.cloudfront.net/2016/08/the-faint-tickets_10-30-16_17_57a3c7a695c98.jpg',
        categories: ['Music', 'Electronic']
      },
      {
        id: 24,
        name: 'Prayers',
        date: new Date('November 3, 2016 20:00:00'),
        price: 22.00,
        venue: 'Bluebird Theater',
        venueCapacity: 550,
        quantityRemaining: 164,
        soldOut: false,
        imageUrl: 'http://lasallerecords.com/wp-content/uploads/2015/07/PrayersPress1-1.jpg',
        categories: ['Music', 'Electronic']
      },
      {
        id: 25,
        name: 'Animals As Leaders',
        date: new Date('December 13, 2016 20:00:00'),
        price: 20.00,
        venue: 'Gothic Theatre',
        venueCapacity: 1100,
        quantityRemaining: 254,
        soldOut: false,
        imageUrl: 'http://www.metalsucks.net/wp-content/uploads/2016/03/Animals-As-Leaders.jpg',
        categories: ['Music', 'Rock']
      }

    ];

    this.getAll = () => {
      return allTickets;
    };

  }

}());
