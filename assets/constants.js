// exporting constants from here -> like categories, navbar names/links, etc.

export const imageFolder = '~/assets/images/'

export const routes = [
  {
    path: '/',
    name: 'Home',
    id: 0,
    hasSublinks: false
  },
  {
    path: '/',
    name: 'Competitions',
    sublinks: [
      {
        path: '/competitions/aerove',
        name: 'Aerove',
        id: 1
      },
      {
        path: '/competitions/sedrica',
        name: 'Sedrica',
        id: 2
      },
      {
        path: '/competitions/asme',
        name: 'ASME',
        id: 3
      },
      {
        path: '/competitions/others',
        name: 'Others',
        id: 4
      }
    ],
    id: 1,
    hasSublinks: true
  },
  // {
  //   path: '/events',
  //   name: 'Events',
  //   id: 2
  // },
  {
    path: '/projects',
    name: 'Projects',
    id: 3,
    hasSublinks: false
  },
  {
    path: '/teams',
    name: 'Teams',
    id: 4,
    hasSublinks: false
  },
  {
    path: '/contact',
    name: 'Contact Us',
    id: 5,
    hasSublinks: false
  },
  {
    path: '/gallery',
    name: 'Gallery',
    id: 6,
    hasSublinks: false
  }
  // {
  //   path: '/sponsors',
  //   name: 'Sponsors',
  //   id: 7
  // }
]
