const CATEGORIES = [
   {
      id: 1,
      name: 'Смартфоны',
      subCategories: [
         { id: 11, name: 'Apple' },
         { id: 12, name: 'Samsung' },
         { id: 13, name: 'Xiaomi' },
         { id: 14, name: 'HUAWEI' },
         { id: 15, name: 'HONOR' },
         { id: 16, name: 'Nokia' },
         { id: 17, name: 'Oppo' },
         { id: 18, name: 'Телефоны-раскладушки' },
         { id: 19, name: 'Кнопочные телефоны' },
         { id: 10, name: 'Аксессуары для телефонов' },
      ],
      filters: [
         {
            key: 'Количество SIM-карт',
            values: [
               {
                  key: 'Количество SIM-карт',
                  value: '1 (Nano-SIM)',
               },
               {
                  key: 'Количество SIM-карт',
                  value: '2 (Nano-SIM)',
               },
            ],
         },
         {
            key: 'Оперативная память',
            values: [
               {
                  key: 'Оперативная память',
                  value: '2GB',
               },
               {
                  key: 'Оперативная память',
                  value: '3GB',
               },
               {
                  key: 'Оперативная память',
                  value: '4GB',
               },
               {
                  key: 'Оперативная память',
                  value: '6GB',
               },
               {
                  key: 'Оперативная память',
                  value: '8GB',
               },
               {
                  key: 'Оперативная память',
                  value: '12GB',
               },
               {
                  key: 'Оперативная память',
                  value: '16GB',
               },
            ],
         },
         {
            key: 'Объем памяти',
            values: [
               {
                  key: 'Объем памяти',
                  value: '8GB',
               },
               {
                  key: 'Объем памяти',
                  value: '16GB',
               },
               {
                  key: 'Объем памяти',
                  value: '32GB',
               },
               {
                  key: 'Объем памяти',
                  value: '64GB',
               },
               {
                  key: 'Объем памяти',
                  value: '128GB',
               },
               {
                  key: 'Объем памяти',
                  value: '256GB',
               },
               {
                  key: 'Объем памяти',
                  value: '512GB',
               },
            ],
         },
      ],
   },
   {
      id: 2,
      name: 'Ноутбуки',
      subCategories: [
         { id: 21, name: 'Apple' },
         { id: 22, name: 'HP' },
         { id: 23, name: 'Lenovo' },
         { id: 24, name: 'Samsung' },
         { id: 25, name: 'Dell' },
         { id: 26, name: 'Acer' },
         { id: 27, name: 'Asus' },
         { id: 28, name: 'Xiaomi' },
         { id: 29, name: 'Digma' },
         { id: 20, name: 'MSI' },
         { id: 30, name: 'Аксессуары для планшетов' },
      ],
      filters: [
         {
            key: 'Процессор',
            values: [
               'Intel Core i3',
               'Intel Core i5',
               'Intel Core i7',
               'Intel Core i9',
               'Intel Celeron',
               'Intel Pentium',
               'AMD',
               'AMD Ryzen 3 3250U',
               'AMD Ryzen 7 4700U',
            ],
         },
         {
            key: 'Разрешение экрана',
            values: [
               '1024x600',
               '1280x800',
               '1366x768',
               '1600x900',
               '1920x1080',
               '2160x1440',
               '2560x1600',
               '3072x1920',
               '3840x2160',
            ],
         },
         {
            key: 'Назначение',
            values: [
               'Для работы',
               'Мультимедийный',
               'Игровой',
               'Для бизнеса',
               'Для учебы',
               'Офисный',
            ],
         },
         {
            key: 'Объем оперативной памяти (GB) ',
            values: ['4GB', '6GB', '2GB', '16GB', '32GB', '8GB'],
         },
         {
            key: 'Размер экрана (дюйм) ',
            values: ['11.6', '13.3', '14', '15.6', '16', '16.1', '17.3"'],
         },
         {
            key: 'Объем встроенной памяти ',
            values: ['128GB', '256GB', '512GB', '1TB'],
         },
      ],
   },
   {
      id: 3,
      name: 'Планшеты',
      subCategories: [
         { id: 32, name: 'Apple' },
         { id: 33, name: 'HP' },
         { id: 34, name: 'Lenovo' },
         { id: 35, name: 'Samsung' },
         { id: 36, name: 'Dell' },
         { id: 37, name: 'Acer' },
         { id: 38, name: 'Asus' },
         { id: 39, name: 'Xiaomi' },
         { id: 30, name: 'Digma' },
         { id: 31, name: 'MSI' },
      ],
      filters: [
         {
            key: 'Разрешение экрана',
            values: [
               '1024x600',
               '1280x800',
               '1366x768',
               '1600x900',
               '1920x1080',
               '2160x1440',
               '2560x1600',
               '3072x1920',
               '3840x2160',
            ],
         },
         {
            key: 'Объем оперативной памяти (GB) ',
            values: ['2GB', '4GB', '6GB', '8GB', '16GB', '32GB'],
         },
         {
            key: 'Размер экрана (дюйм) ',
            values: ['11.6"', '7"', '7.9"', '8"'],
         },
         {
            key: 'Объем встроенной памяти (GB)',
            values: ['128GB', '256GB', '512GB', '1TB'],
         },
         {
            key: 'Емкость аккумулятора планшета, мА/ч',
            values: [
               '0 – 2399 мА/час',
               '2400 – 4799 мА/час',
               '4800 – 7199 мА/час',
               '7200 – 9599 мА/ч',
            ],
         },
      ],
   },
   {
      id: 4,
      name: 'Смарт-часы и браслеты',
      subCategories: [
         { id: 42, name: 'Аксессуары для  планшетов' },
         { id: 43, name: 'Смарт-часы Apple Watch' },
         { id: 44, name: 'Умные часы для взрослых' },
         { id: 45, name: 'Умные часы для детей' },
         { id: 46, name: 'Фитнес браслеты' },
      ],
      filters: [
         {
            key: 'Беспроводные интерфейсы',
            values: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC'],
         },
         {
            key: 'Объем памяти (GB)',
            values: ['4GB', '8GB', '16GB', '32GB'],
         },
         {
            key: 'Форма корпуса',
            values: ['Квадратная', 'Круглая', 'Овальная', 'Прямоугольная'],
         },
         {
            key: 'Материал браслета/ремешка',
            values: [
               'Силикон',
               'Кожа',
               'Резина',
               'Пластик',
               'Нейлон',
               'Из искусственной кожи ',
               'Имитация керамики',
            ],
         },
         {
            key: 'Материал корпуса',
            values: [
               'Акриловый',
               'Алюминий',
               'Керамика',
               'Пластик ',
               'Металл  ',
               'Стекло  ',
            ],
         },
         {
            key: 'Диагональ дисплея (дюйм)',
            values: ['1.2"', '1.4"', '1.44"', '1.54"'],
         },
      ],
   },
   {
      id: 5,
      name: 'Аксессуары',
      subCategories: [
         { id: 57, name: 'Ремешки для часов' },
         { id: 58, name: 'Зарядные устройства' },
         { id: 59, name: 'Защитные стекла и пленки ' },
         { id: 50, name: 'Чехлы' },
         { id: 51, name: 'Подставки' },
         { id: 52, name: 'Кабели, переходники, адаптеры' },
         { id: 53, name: 'Наушники' },
         { id: 54, name: 'Карта памяти' },
      ],
      filters: [
         {
            key: 'Тип',
            values: [
               'Сетевое',
               'Автомобильное',
               'Беспроводное ',
               'Встраиваемые USB',
               'Кабель зарядки',
            ],
         },
         {
            key: 'Подходит для',
            values: ['Смартфона', 'Планшета ', 'Смарт-часы/фитнес-браслеты '],
         },
      ],
   },
]
export default CATEGORIES

// export const phoneCharacters = [
//    {
//       id: 1,
//       key: 'Количество SIM-карт',
//       values: ['1 (Nano-SIM)', '2 (Nano-SIM)',],
//    },
//    {
//       id: 2,
//       key: 'Оперативная память',
//       values: ['2GB', '3GB', '4GB', '6GB', '8GB', '12GB', '16GB',],
//    },
//    {
//       id: 3,
//       key: 'Объем памяти',
//       values: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB',],
//    },
// ]
// export const laptopCharacters = [
//    {
//       id: 1,
//       key: 'Процессор',
//       values: [
//          'Intel Core i3',
//          'Intel Core i5',
//          'Intel Core i7',
//          'Intel Core i9',
//          'Intel Celeron',
//          'Intel Pentium',
//          'AMD',
//          'AMD Ryzen 3 3250U',
//          'AMD Ryzen 7 4700U',
//       ],
//    },
//    {
//       id: 2,
//       key: 'Разрешение экрана',
// eslint-disable-next-line max-len
//       values: ['1024x600', '1280x800', '1366x768', '1600x900', '1920x1080', '2160x1440', '2560x1600', '3072x1920', '3840x2160', X],
//    },
//    {
//       id: 3,
//       key: 'Назначение',
// eslint-disable-next-line max-len
//       values: ['Для работы', 'Мультимедийный', 'Игровой', 'Для бизнеса', 'Для учебы', 'Офисный',],
//    },
//    {
//       id: 4,
//       key: 'Объем оперативной памяти (GB) ',
//       values: ['4GB', '6GB', '2GB', '16GB', '32GB', '8GB',],
//    },
//    {
//       id: 5,
//       key: 'Размер экрана (дюйм) ',
//       values: ['11.6"', '13.3"', '14"', '15.6"', '16"', '16.1"', '17.3"',],
//    },
//    {
//       id: 6,
//       key: 'Объем встроенной памяти ',
//       values: ['128GB', '256GB', '512GB', '1TB',],
//    },
// ]
// export const tabletCharacters = [
//    {
//       id: 1,
//       key: 'Разрешение экрана',
// eslint-disable-next-line max-len
//       values: ['1024x600', '1280x800', '1366x768', '1600x900', '1920x1080', '2160x1440', '2560x1600', '3072x1920', '3840x2160',],
//    },
//    {
//       id: 2,
//       key: 'Объем оперативной памяти (GB) ',
//       values: ['2GB', '4GB', '6GB', '8GB', '16GB', '32GB',],
//    },
//    {
//       id: 3,
//       key: 'Размер экрана (дюйм) ',
//       values: ['11.6"', '7"', '7.9"', '8"',],
//    },
//    {
//       id: 4,
//       key: 'Объем встроенной памяти (GB)',
//       values: ['128GB', '256GB', '512GB', '1TB',],
//    },
//    {
//       id: 5,
//       key: 'Емкость аккумулятора планшета, мА/ч',
//       values: ['0 – 2399 мА/час',
// '2400 – 4799 мА/час', '4800 – 7199 мА/час', '7200 – 9599 мА/ч',],
//    },
// ]

// export const smartWathchesCharacters = [
//    {
//       id: 1,
//       key: 'Беспроводные интерфейсы',
//       values: ['Bluetooth', 'Wi-Fi', 'GPS', 'NFC',],
//    },
//    {
//       id: 1,
//       key: 'Объем памяти (GB)',
//       values: ['4GB', '8GB', '16GB', '32GB',],
//    },
//    {
//       id: 3,
//       key: 'Форма корпуса',
//       values: ['Квадратная', 'Круглая', 'Овальная', 'Прямоугольная',],
//    },
//    {
//       id: 4,
//       key: 'Материал браслета/ремешка',
//       values: ['Силикон', 'Кожа', 'Резина',
// 'Пластик', 'Нейлон', 'Из искусственной кожи ', 'Имитация керамики',],
//    },
//    {
//       id: 5,
//       key: 'Материал корпуса',
//       values: ['Акриловый', 'Алюминий', 'Керамика', 'Пластик ', 'Металл  ', 'Стекло  ',],
//    },
//    {
//       id: 6,
//       key: 'Диагональ дисплея (дюйм)',
//       values: ['1.2"', '1.4"', '1.44"', '1.54"',],
//    },
// ]

// // export const accessoriesCharacters = [
// //    {
// //       id: 1,
// //       key: 'Тип',
// //       values: ['Сетевое', 'Автомобильное',
// 'Беспроводное ', 'Встраиваемые USB', 'Кабель зарядки',],
// //    },
// //    {
// //       id: 2,
// //       key: 'Подходит для',
// //       values: ['Смартфона', 'Планшета ', 'Смарт-часы/фитнес-браслеты ',],
// //    },
// // ]
