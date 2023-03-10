'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'groupsImages';
    await queryInterface.bulkInsert(options, [
      {
        groupId: 1,
        url: "https://res.cloudinary.com/dcbexnl8j/image/upload/v1677636204/meetup%20shit/31virus-tennis02-mobileMasterAt3x-v2_h8qv6x.jpg",
        preview: false
      },
      {
        groupId: 2,
        url: "https://res.cloudinary.com/dcbexnl8j/image/upload/v1677978779/meetup%20shit/funny-basketball-picture_zw1e7t.jpg",
        preview: false
      },
      {
        groupId: 3,
        url: "https://res.cloudinary.com/dcbexnl8j/image/upload/v1677636587/meetup%20shit/adam-ondra-9c-pavel-blazek_s_vez0hh.jpg",
        preview: false
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'groupsImages';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      groupId: { [Op.in]: [1] }
    }, {});
  }
};
