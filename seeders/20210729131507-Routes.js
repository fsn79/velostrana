'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('route', [{
      name: 'Троицкая площадь - сквер Малые Гаванцы',
      likes: 28,
      comment: 'Прикольный маршрут с Петроградки до Галерной гавани',
      userId: 3,
      startPoint: '59.953909, 30.324804',
      endPoint: '59.939854, 30.220458',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Михайловский сад - Смольный',
      likes: 17,
      comment: 'Интересный маршрут через центр города',
      userId: 5,
      startPoint: '59.940250, 30.335495',
      endPoint: '59.948920, 30.392383',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Полюстровский парк - Новая Голландия',
      likes: 32,
      comment: 'Весьма протяженный маршрут по историческому центру',
      userId: 4,
      startPoint: '59.959747, 30.422542',
      endPoint: '59.930437, 30.290197',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Никольский сад - сад 30-летия Октября',
      likes: 8,
      comment: 'Так себе прогулочка...',
      userId: 2,
      startPoint: '59.923435, 30.299313',
      endPoint: '59.914349, 30.403757',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  
     await queryInterface.bulkInsert('route', [{
      name: 'Екатигноф - Стрельна',
      likes: 34,
      comment: 'Интересный и продолжительный маршрут',
      userId: 5,
      startPoint: '59.903198, 30.259908',
      endPoint: '59.853947, 30.043910',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});


     await queryInterface.bulkInsert('route', [{
      name: 'Полежаевский парк - Парк Декабристов',
      likes: 19,
      comment: 'Средненький маршрутец, на любителя. Мне не зашел((',
      userId: 1,
      startPoint: '59.845707, 30.204374',
      endPoint: '59.954321, 30.243060',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
      
     await queryInterface.bulkInsert('route', [{
      name: 'Южно-Приморский парк - Парк им.Бабушкина',
      likes: 3,
      comment: 'Длинный маршрут через промзоны и спальники города. Не айс..',
      userId: 2,
      startPoint: '59.847675, 30.175320',
      endPoint: '59.881318, 30.437712',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Удельный парк - Большое озеро',
      likes: 17,
      comment: 'Интересный маршрут, в конце которого можно освежиться в озере',
      userId: 3,
      startPoint: '60.003904, 30.302657',
      endPoint: '60.116426, 30.240565',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Парк 300-летия - Ленинский шалаш',
      likes: 54,
      comment: 'Освежающий маршрут, пролегающий вдоль побережья. Круто!',
      userId: 1,
      startPoint: '59.984653, 30.200457',
      endPoint: '60.079638, 30.027686',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('route', [{
      name: 'Крестик - Репинские пенаты',
      likes: 41,
      comment: 'Фуххх... чуть не умер пока доехал.. Но маршрут - огонь!!',
      userId: 4,
      startPoint: '59.972012, 30.242387',
      endPoint: '60.156152, 29.894665',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('route', null, {});
  }
};
