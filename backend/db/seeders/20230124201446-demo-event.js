'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Events';
    await queryInterface.bulkInsert(options, [
      {
        groupId: 1,
        venueId: 1,
        name: 'Tennis Group First Meet and Greet',
        description: 'First meet and greet event for the evening tennis on the water group! Join us online for happy times!',
        type: 'Online',
        capacity: 10,
        price: 18.50,
        startDate: new Date('2021-11-19 20:00:00'),
        endDate: new Date('2021-11-19 22:00:00'),
        numAttending: 8,
        previewImage: 'image url'
      },
      {
        groupId: 2,
        venueId: 2,
        name: 'Ball w the boisss',
        description: 'First meet and greet event for the evening bball on the water group! Join us online for happy times!',
        type: 'Online',
        capacity: 10,
        price: 18.50,
        startDate: new Date('2021-11-19 20:00:00'),
        endDate: new Date('2021-11-19 22:00:00'),
        numAttending: 8,
        previewImage: 'image url'
      },
      {
        groupId: 3,
        venueId: 3,
        name: 'Climbing w the crew',
        description: 'First meet and greet event for the evening bouldering on the water group! Join us online for happy times!',
        type: 'Online',
        capacity: 10,
        price: 18.50,
        startDate: new Date('2021-11-19 20:00:00'),
        endDate: new Date('2021-11-19 22:00:00'),
        numAttending: 8,
        previewImage: 'image url'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Events';
    await queryInterface.bulkDelete(options, {
      name: ['Tennis Group First Meet and Greet', 'Ball w the boisss', 'Climbing w the crew']
    }, {});
  }
};
