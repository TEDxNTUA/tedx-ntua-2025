const ROOM_MAPPING = {
  MAIN_STAGE: 0,
  ROOM_1: 1,
  ROOM_2: 2,
  ROOM_3: 3
};

const HAPPENING_TYPE_MAPPING = {
  TALK: 0,
  PERFORMANCE: 1,
  EXPERIENCE_WORKSHOP: 2,
  PROFESSIONAL_WORKSHOP: 3,
  OTHER: 4
};

export const PROGRAM = [
  {
    title: 'Converge - 1st Session',
    type: 'session',
    allHappenings: [
      {
        time: '11:20-11:35',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: 'Lah Porella, Lorqa & Wera',
            slug: 'lah-porella-and-lorqa-and-wera',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '11:35-11:45',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.OTHER,
            title: 'Opening',
            slug: '',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '11:45-12:05',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Vangelis Simakis',
            slug: 'vangelis-simakis',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '12:05-12:25',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Rosario Moscato',
            slug: 'rosario-moscato',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '1st Break (1.20 h)',
    type: 'break',
    allHappenings: [
      {
        time: '12:25-13:45',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: 'Weaving Workshop',
            slug: 'weaving-workshop',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: 'Workshop by Deree',
            slug: 'deree',
            room: ROOM_MAPPING.ROOM_2
          }
        ]
      }
    ]
  },
  {
    title: 'Connect (2nd Session)',
    type: 'session',
    allHappenings: [
      {
        time: '13:45-14:00',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: 'Cilia Katrali & Spiros Paraskevakos',
            slug: 'cilia-katrali-and-spiros-paraskevakos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '14:00-14:20',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'George Gougoulakis',
            slug: 'george-gougoulakis',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '14:20-14:40',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Antonia & Kimon Vogt',
            slug: 'antonia-and-kimon-vogt',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '14:40-15:00',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Eva Kotta',
            slug: 'eva-kotta',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '2nd Break - Lunch (1.15 h)',
    type: 'break',
    allHappenings: [
      {
        time: '15:00-15:15',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: 'Workshop by Soteur',
            slug: 'soteur',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: 'Workshop by Oliver Wyman',
            slug: 'oliver-wyman',
            room: ROOM_MAPPING.ROOM_2
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: 'Workshop by Dei',
            slug: 'dei',
            room: ROOM_MAPPING.ROOM_3
          }
        ]
      }
    ]
  },
  {
    title: '3rd Session',
    type: 'session',
    allHappenings: [
      {
        time: '16:15-16:30',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: 'Otra Rota & Alexandros Daikos',
            slug: 'otra-rota-and-alexandros-daikos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '16:30-16:50',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Aristides G. Eliopoulos',
            slug: 'aristides-g-eliopoulos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '16:50-17:20',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Gogo Delogianni',
            slug: 'gogo-delogianni',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '17:10-17:25',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: 'Evita Tsakalaki & Maria Kritsotaki',
            slug: 'evita-tsakalaki-and-maria-kritsotaki',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '3rd Break',
    type: 'break',
    allHappenings: [
      {
        time: '17:35-18:50',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: 'Workshop by Momix',
            slug: 'workshop-momix',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: 'Workshop by Archidoron',
            slug: 'archidoron',
            room: ROOM_MAPPING.ROOM_2
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: 'Workshop by Be Wise',
            slug: 'be-wise',
            room: ROOM_MAPPING.ROOM_3
          }
        ]
      }
    ]
  },
  {
    title: '4th Session',
    type: 'session',
    allHappenings: [
      {
        time: '18:40-19:00',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Zografos',
            slug: 'zografos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:00-19:20',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Xenia Mastoraki',
            slug: 'xenia-mastoraki',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:20-19:40',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: 'Ioannis Pantazopoulos',
            slug: 'ioannis-pantazopoulos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:40-20:00',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: 'Papazo & Amal',
            slug: 'papazo-and-amal',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  }
  // {
  //   title: 'After Party',
  //   type: 'general',
  //   allHappenings: [
  //     {
  //       time: '19:55-20:10',
  //       timeSpecificHappenings: [
  //         {
  //           type: HAPPENING_TYPE_MAPPING.OTHER,
  //           title: 'Closing',
  //           slug: 'closing',
  //           room: ROOM_MAPPING.ROOM_1
  //         }
  //       ]
  //     },
  //     {
  //       time: '20:10-20:25',
  //       timeSpecificHappenings: [
  //         {
  //           type: HAPPENING_TYPE_MAPPING.OTHER,
  //           title: 'After Party',
  //           slug: 'after-party',
  //           room: ROOM_MAPPING.ROOM_1
  //         }
  //       ]
  //     }
  //   ]
  // }
];

// export const PROGRAM = [
//   {
//     title: '1st Session',
//     type: 'session',
//     allHappenings: [
//       {
//         time: '11:00-11:10',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.OTHER,
//             title: 'Opening',
//             slug: '',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '11:10-11:25',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
//             title: '',
//             slug: 'lah-porella-and-lorqa-and-wera',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '11:25-11:45',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'ioannis-pantazopoulos',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '11:45-12:05',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'george-gougoulakis',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '12:05-12:25',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'rosario-moscato',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '1st Break',
//     type: 'break',
//     allHappenings: [
//       {
//         time: '12:25-13:40',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
//             title: '',
//             slug: 'weaving-workshop ',
//             room: ROOM_MAPPING.ROOM_1
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'delta',
//             room: ROOM_MAPPING.ROOM_2
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'dei',
//             room: ROOM_MAPPING.ROOM_3
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '2nd Session',
//     type: 'session',
//     allHappenings: [
//       {
//         time: '13:40-13:55',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
//             title: '',
//             slug: 'cilia-katrali-and-spiros-paraskevakos',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '13:55-14:15',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'antonia-and-kimon-vogt',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '14:15-14:35',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'xenia-mastoraki',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '14:35-14:55',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'vangelis-simakis',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '2nd Break',
//     type: 'break',
//     allHappenings: [
//       {
//         time: '14:55-16:25',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
//             title: '',
//             slug: 'mount-moss',
//             room: ROOM_MAPPING.ROOM_1
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'archidoron',
//             room: ROOM_MAPPING.ROOM_2
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'oliver-wyman',
//             room: ROOM_MAPPING.ROOM_3
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '3rd Session',
//     type: 'session',
//     allHappenings: [
//       {
//         time: '16:25-16:40',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
//             title: '',
//             slug: 'evita-tsakalaki-and-maria-kritsotaki',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '16:40-17:00',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'eva-kotta',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '17:00-17:20',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'eva-kotta1',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '17:20-17:40',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
//             title: '',
//             slug: 'otra-rota-and-alexandros-daikos',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '3rd Break',
//     type: 'break',
//     allHappenings: [
//       {
//         time: '17:35-18:50',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
//             title: '',
//             slug: 'doodling-by-soteur',
//             room: ROOM_MAPPING.ROOM_1
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'be-wise',
//             room: ROOM_MAPPING.ROOM_2
//           },
//           {
//             type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
//             title: '',
//             slug: 'deree',
//             room: ROOM_MAPPING.ROOM_3
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: '4th Session',
//     type: 'session',
//     allHappenings: [
//       {
//         time: '18:50-19:10',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'test1',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '19:10-19:30',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'test2',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '19:30-19:50',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.TALK,
//             title: '',
//             slug: 'test3',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       },
//       {
//         time: '19:50-20:15',
//         timeSpecificHappenings: [
//           {
//             type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
//             title: '',
//             slug: 'papazo-and-amal',
//             room: ROOM_MAPPING.MAIN_STAGE
//           }
//         ]
//       }
//     ]
//   }
// ];
