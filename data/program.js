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
    title: '1st Session',
    allHappenings: [
      {
        time: '11:00-11:10',
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
        time: '11:10-11:25',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: '',
            slug: 'lah-porella-and-lorqa-and-wera',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '11:25-11:45',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'ioannis-pantazopoulos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '11:45-12:05',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'george-gougoulakis',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '12:05-12:25',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'rosario-moscato',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '1st Break',
    allHappenings: [
      {
        time: '12:25-13:40',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: '',
            slug: 'weaving-workshop ',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'delta',
            room: ROOM_MAPPING.ROOM_2
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'dei',
            room: ROOM_MAPPING.ROOM_3
          }
        ]
      }
    ]
  },
  {
    title: '2nd Session',
    allHappenings: [
      {
        time: '13:40-13:55',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: '',
            slug: 'cilia-katrali-and-spiros-paraskevakos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '13:55-14:15',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'antonia-and-kimon-vogt',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '14:15-14:35',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'xenia-mastoraki',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '14:35-14:55',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'vangelis-simakis',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '2nd Break',
    allHappenings: [
      {
        time: '14:55-16:25',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: '',
            slug: 'mount-moss',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'archidoron',
            room: ROOM_MAPPING.ROOM_2
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'oliver-wyman',
            room: ROOM_MAPPING.ROOM_3
          }
        ]
      }
    ]
  },
  {
    title: '3rd Session',
    allHappenings: [
      {
        time: '16:25-16:40',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: '',
            slug: 'evita-tsakalaki-and-maria-kritsotaki',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '16:40-17:00',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'eva-kotta',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '17:00-17:20',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'eva-kotta1',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '17:20-17:40',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: '',
            slug: 'otra-rota-and-alexandros-daikos',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  },
  {
    title: '3rd Break',
    allHappenings: [
      {
        time: '17:35-18:50',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.EXPERIENCE_WORKSHOP,
            title: '',
            slug: 'doodling-by-soteur',
            room: ROOM_MAPPING.ROOM_1
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'be-wise',
            room: ROOM_MAPPING.ROOM_2
          },
          {
            type: HAPPENING_TYPE_MAPPING.PROFESSIONAL_WORKSHOP,
            title: '',
            slug: 'deree',
            room: ROOM_MAPPING.ROOM_3
          }
        ]
      }
    ]
  },
  {
    title: '4th Session',
    allHappenings: [
      {
        time: '18:50-19:10',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'test1',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:10-19:30',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'test2',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:30-19:50',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.TALK,
            title: '',
            slug: 'test3',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      },
      {
        time: '19:50-20:15',
        timeSpecificHappenings: [
          {
            type: HAPPENING_TYPE_MAPPING.PERFORMANCE,
            title: '',
            slug: 'papazo-and-amal',
            room: ROOM_MAPPING.MAIN_STAGE
          }
        ]
      }
    ]
  }
];
