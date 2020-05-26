'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
      'places',
      [
        {
          name: "UABCS",
              lat: "24.101493",
              long: "-110.314203",
              dir: "Universidad Autónoma de Baja California Sur, Carretera al Sur KM 5.5 Col Mezquitito. La Paz, B.C.S.",
              color: "red darken-4",
              img: "https://www.mexicoescultura.com/galerias/espacios/principal/image65.jpg",
              rank: 3.5,
              price: "$$",
              cat: "Universidad, Casa de Estudios",
              desc: "La Universidad Autónoma de Baja California Sur es una Institución pública que ofrece programas educativos de calidad; genera y divulga conocimiento científico, tecnológico y humanístico de vanguardia;",
              userId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('places', null, {})

};
