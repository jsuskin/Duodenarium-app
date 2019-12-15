export const weekdays = {
  Sun: 'Sunday',
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
};

export const months = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
}

export const songs = [
  {
      id: 1,
      artist: {
        name: 'Swamp Dogg'
      },
      title: 'Lonely',
      tags: [
        {
          name: 'Funk'
        },
        {
          name: 'Soul'
        },
        {
          name: 'Psychedelic'
        },
        {
          name: 'Rhythm & Blues'
        }
      ],
      url: 'https://www.youtube.com/watch?v=mmtRZnzzZlY',
      image: 'https://img.discogs.com/2tyGMCr--NYkuxxn9E0OnplUBhc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12483398-1536180745-1858.jpeg.jpg',
      externalLinks: {
        discogs: 'https://www.discogs.com/Swamp-Dogg-Love-Loss-and-Auto-Tune/release/12483398',
        bandcamp: 'https://swampdogg.bandcamp.com/album/love-loss-and-auto-tune',
        soundcloud: 'https://soundcloud.com/swampdogg/lonely'
      },
      created_at: '2019-12-14T00:05:56.454Z'
    },
      {
        id: 2,
        artist: {
          name: 'Mark A. Mitchell'
        },
        title: 'How Can I',
        tags: [
          {
            name: 'Electronic'
          },
          {
            name: 'Funk'
          },
          {
            name: 'Soul'
          },
          {
            name: 'Boogie'
          }
        ],
        url: 'https://www.youtube.com/watch?v=TCnqoqB9kIo',
        image: 'https://www.deejay.de/images/xl/6/0/338660.jpg',
        externalLinks: {
          discogs: 'https://www.discogs.com/Mark-A-Mitchell-How-Can-I-All-Your-Love/release/6928730',
          bandcamp: 'https://fantasyloverecords.bandcamp.com/album/how-can-i-all-your-love',
          soundcloud: 'https://soundcloud.com/fantasyloverecords/mark-a-mitchell-how-can-i'
        },
        created_at: '2019-12-14T00:05:56.454Z'
      },
      {
        id: 3,
        artist: {
          name: 'Fever Ray'
        },
        title: 'To The Moon And Back (NAR Remix)',
        tags: [
          {
            name: 'Electronic'
          },
          {
            name: 'Synthpop'
          },
          {
            name: 'Art Pop'
          },
          {
            name: 'Electropop'
          }
        ],
        url: 'https://www.youtube.com/watch?v=jy7EgA4dAx4',
        image: 'https://geo-media.beatport.com/image/68aa547a-6763-40c0-8655-88db343bc8b8.jpg',
        externalLinks: {
          discogs: '',
          bandcamp: '',
          soundcloud: 'https://soundcloud.com/narrokh/fever-ray-to-the-moon-and-back-nar-remix'
        },
        created_at: '2019-12-14T00:05:56.454Z'
      }
]

// export const songs = [
//   {
//     id: 1,
//     artist: 'Mark A. Mitchell',
//     song: 'How Can I',
//     tags: ['Electronic', 'Funk', 'Soul', 'Boogie'],
//     url: 'https://www.youtube.com/watch?v=TCnqoqB9kIo',
//     image: 'https://www.deejay.de/images/xl/6/0/338660.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Mark-A-Mitchell-How-Can-I-All-Your-Love/release/6928730',
//       bandcamp: 'https://fantasyloverecords.bandcamp.com/album/how-can-i-all-your-love',
//       soundcloud: 'https://soundcloud.com/fantasyloverecords/mark-a-mitchell-how-can-i'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 2,
//     artist: 'Fever Ray',
//     song: 'To The Moon And Back (NAR Remix)',
//     tags: ['Electronic', 'Synthpop', 'Art Pop', 'Electropop'],
//     url: 'https://www.youtube.com/watch?v=jy7EgA4dAx4',
//     image: 'https://geo-media.beatport.com/image/68aa547a-6763-40c0-8655-88db343bc8b8.jpg',
//     externalLinks: {
//       discogs: '',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/narrokh/fever-ray-to-the-moon-and-back-nar-remix'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 3,
//     artist: 'Kay Cee Jones',
//     song: 'The Japanese Farewell Song',
//     tags: ['Pop', 'Oldies'],
//     url: 'https://www.youtube.com/watch?v=-H9l4tovIWk',
//     image: 'https://img.discogs.com/alvRPbqf84w05UScpOWFLGRfydU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8906202-1471199140-4400.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Kay-Cee-Jones-The-Japanese-Farewell-Song/release/6366076',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 4,
//     artist: 'Tre Oh Fie',
//     song: 'On Beat',
//     tags: ['Electronic', 'Dance'],
//     url: 'https://soundcloud.com/treohfie/tre-oh-fie-on-beat',
//     image: 'https://i1.sndcdn.com/artworks-000476722821-da6dj5-t500x500.jpg',
//     externalLinks: {
//       discogs: '',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/treohfie/tre-oh-fie-on-beat'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 5,
//     artist: 'Sandra Hamilton',
//     song: 'Parang Jam',
//     tags: ['Electronic', 'Latin', 'Disco', 'Soca'],
//     url: 'https://www.youtube.com/watch?v=yd1GjM8jDiQ',
//     image: 'https://f4.bcbits.com/img/a1019276614_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Sandra-Hamilton-Parang-Jam-Happy-New-Year/release/7658723',
//       bandcamp: 'https://soundwayrecords.bandcamp.com/album/latin-parang-parang-jam',
//       soundcloud: ''
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 6,
//     artist: 'Rosalía',
//     song: 'A Palé',
//     tags: ['Electronic', 'Latin', 'Pop'],
//     url: 'https://www.youtube.com/watch?v=5zwpwbdGNIk',
//     image: 'https://img.discogs.com/sJf4MCttaphdomD8osDY-iHp-ao=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14369199-1573151443-3178.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Rosal%C3%ADa-A-Pal%C3%A9/release/14369199',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/rosaliaofficial/a-pale'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 7,
//     artist: 'The J. Arthur Keenes Band',
//     song: 'String You Along',
//     tags: ['Electronic', 'Pop'],
//     url: 'https://www.youtube.com/watch?v=PpCLPH63K5I',
//     image: 'https://img.discogs.com/HbovfrKjNwQ0A-1b2hJMa2VoS9I=/fit-in/600x566/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12093028-1528142723-8758.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/The-J-Arthur-Keenes-Band-Seven-Magic-Words/release/12093028',
//       bandcamp: 'https://thejarthurkeenesband.bandcamp.com/track/string-you-along',
//       soundcloud: ''
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 8,
//     artist: 'Night Moves',
//     song: 'Country Queen',
//     tags: ['Rock', 'Pop', 'Psychedelic', 'Soul', 'Country', 'Electronic', 'Indie'],
//     url: 'https://www.youtube.com/watch?v=pYQWnMac-40',
//     image: 'https://f4.bcbits.com/img/a3246235605_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Night-Moves-Colored-Emotions/release/4004974',
//       bandcamp: 'https://nightmoves.bandcamp.com/album/colored-emotions',
//       soundcloud: 'https://soundcloud.com/creamsleeve/country-queen'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 9,
//     artist: 'Haram',
//     song: 'Drescher Clock',
//     tags: ['Rock', 'Punk', 'Post-Hardcore'],
//     url: 'https://www.youtube.com/watch?v=MshcfCUJ7nc',
//     image: 'https://img.discogs.com/VUa15ueV4PXfSSDIWu5D_awej7k=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1349801-1366811190-4300.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Haram-Drescher/release/1349801',
//       bandcamp: 'https://haramdc.bandcamp.com/album/drescher',
//       soundcloud: ''
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 10,
//     artist: 'The Brooks Brothers',
//     song: 'Looking For A Woman',
//     tags: ['Soul'],
//     url: 'https://www.youtube.com/watch?v=-8lyw04uA0c',
//     image: 'https://img.discogs.com/8F7g8x08irwD22EuwdGtWLhoeR0=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1815312-1426736894-8772.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Brooks-Bros-Lookin-For-A-Woman/release/1815312',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/kevin-johnson-220/the-brooks-brothers-looking'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 11,
//     artist: 'Sheek Louch',
//     song: 'What You Want the Money For (feat. Swizz Beatz)',
//     tags: ['Rap', 'Hip Hop'],
//     url: 'https://www.youtube.com/watch?v=o-S1gLq_S4w',
//     image: 'https://f4.bcbits.com/img/a1110418149_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Sheek-Louch-Silverback-Gorilla-2/release/7811851',
//       bandcamp: 'https://sheeklouch.bandcamp.com/track/what-you-want-the-money-for-feat-swizz-beatz',
//       soundcloud: 'https://soundcloud.com/tommyboy/whatyouwantthemoneyfor'
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 12,
//     artist: 'Dorothy Ashby',
//     song: 'The Windmills of your Mind',
//     tags: ['Jazz'],
//     url: 'https://www.youtube.com/watch?v=IaQ-c4QhJnk',
//     image: 'https://img.discogs.com/85_WSpRnAPqYNknP9Zwt2P_Czdc=/fit-in/600x580/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1134616-1374066092-1340.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Dorothy-Ashby-Dorothys-Harp/release/1134616',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Friday, December 13, 2019'
//   },
//   {
//     id: 13,
//     artist: 'Mandrill',
//     song: 'Children of the Sun',
//     tags: ['Funk', 'Soul'],
//     url: 'https://www.youtube.com/watch?v=GcN09gVsiDw',
//     image: 'https://img.discogs.com/uiavOK894Erh5XaRaEaD8ZwgHes=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2700631-1402815202-7568.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Mandrill-Mandrill-Is/release/2700631',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 14,
//     artist: 'Car Seat Headrest',
//     song: 'Bodys',
//     tags: ['Indie', 'Rock', 'Indie Pop', 'Lo-Fi', 'Alternative', 'Psychedelic'],
//     url: 'https://www.youtube.com/watch?v=NvsQPCbgJOA&t=0s&list=PLpmqPSmVy5ZrUukhfHHinnCdn75dl192Y&index=6',
//     image: 'https://img.discogs.com/_ka9Bz0AVQyPetppUXWfsCMx2zg=/fit-in/545x487/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11713550-1541437642-6353.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Car-Seat-Headrest-Twin-Fantasy/release/11713550',
//       bandcamp: 'https://carseatheadrest.bandcamp.com/album/twin-fantasy-2',
//       soundcloud: 'https://soundcloud.com/car-seat-headrest/bodys-1'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 15,
//     artist: 'You And I',
//     song: 'Playing Off The Story',
//     tags: ['Hardcore Punk', 'Emo', 'Screamo'],
//     url: 'https://www.youtube.com/watch?v=XuKbg4iVnAc',
//     image: 'https://img.discogs.com/GhbUKpgtpxixjuoqft4hvwbIuIs=/fit-in/598x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3017614-1315536105.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/You-And-I-The-Curtain-Falls/release/3017614',
//       bandcamp: 'https://youandi.bandcamp.com/album/the-curtain-falls',
//       soundcloud: ''
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 16,
//     artist: 'Delroy Edwards',
//     song: 'WHATS YO HOOD LIKE',
//     tags: ['Hip Hop', 'G-Funk', 'Lo-Fi'],
//     url: 'https://www.youtube.com/watch?v=NMcngRgZnaU',
//     image: 'https://img.discogs.com/C1GdAn8PZKOXOikVfZtdC7wLSv0=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5711246-1400596584-3654.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Delroy-Edwards-Slowed-Down-Funk-Vol-1/master/701715',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 17,
//     artist: 'Pygmy Lush',
//     song: 'It\'s A Good Day To Hide',
//     tags: ['Ambient', 'Indie', 'Psychedelic Folk', 'Punk'],
//     url: 'https://www.youtube.com/watch?v=O0YcfiSR-wg',
//     image: 'https://f4.bcbits.com/img/a4087585757_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Pygmylush-Turboslut-Pygmylush-Turboslut/release/2016031',
//       bandcamp: 'https://pygmylush.bandcamp.com/album/split-lp-w-turboslut',
//       soundcloud: 'https://soundcloud.com/hkcko/pygmy-lush-its-a-good-day-to-hide'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 18,
//     artist: 'Clarence Clarity',
//     song: 'Law Of Fives',
//     tags: ['Electronic', 'Pop', 'Alternative'],
//     url: 'https://www.youtube.com/watch?v=k3MDwn0EfJ0',
//     image: 'https://img.discogs.com/DZ8Spe-q4vbtoO-awU7Hj3UcQM0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12770343-1541610214-1988.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Clarence-Clarity-Think-Peace/release/12770343',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/clarence-clarity/10-law-of-fives'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 19,
//     artist: 'Sandro Perri',
//     song: 'Double Suicide',
//     tags: ['Experimental', 'Ambient', 'Folk', 'Pop'],
//     url: 'https://www.youtube.com/watch?v=d0eQWzrS3OY',
//     image: 'https://f4.bcbits.com/img/a1563792736_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Sandro-Perri-Tiny-Mirrors/master/181192',
//       bandcamp: 'https://sandroperri.bandcamp.com/album/tiny-mirrors',
//       soundcloud: 'https://soundcloud.com/alan-williamson/sandro-perri-double-suicide'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 20,
//     artist: 'The Dahmers',
//     song: 'Creepiest Creep',
//     tags: ['Rock & Roll', 'Garage Rock', 'Punk'],
//     url: 'https://www.youtube.com/watch?v=866AkOXVKRU',
//     image: 'https://f4.bcbits.com/img/a3766429273_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/The-Dahmers-Creepiest-Creep/master/1385044',
//       bandcamp: 'https://thedahmers.bandcamp.com/album/creepiest-creep-ep',
//       soundcloud: 'https://soundcloud.com/gaphals/sets/the-dahmers-creepiest-creep-ep-1'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 21,
//     artist: 'Zegota',
//     song: 'Ohio',
//     tags: ['Hardcore Punk'],
//     url: 'https://www.youtube.com/watch?v=-3EfHpxpRP0',
//     image: 'https://img.discogs.com/UPegRhdvBgyjOCpbhjn3809Svhc=/fit-in/250x250/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1150777-1260210914.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/%C5%BBegota-Namast%C3%A9/release/1150777',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 22,
//     artist: 'Omar Khorshid',
//     song: 'Laylet Hob',
//     tags: ['Folk', 'World'],
//     url: 'https://www.youtube.com/watch?v=n7puHS_aLtk',
//     image: 'https://img.discogs.com/v8CWM47Tabnh_K13n59QvR5q8go=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3471888-1448388862-9025.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Omar-Khorshid-Rhythms-From-The-Orient/release/3471888',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 23,
//     artist: 'Epic B',
//     song: 'Magazine (feat. Kiyano)',
//     tags: ['Dancehall'],
//     url: 'https://www.youtube.com/watch?v=kXnrRmYGpWA',
//     image: 'https://f4.bcbits.com/img/a3652001396_10.jpg',
//     externalLinks: {
//       discogs: '',
//       bandcamp: 'https://itsjustepicb.bandcamp.com/album/magazine-riddim',
//       soundcloud: 'https://soundcloud.com/immortal-instruments/magazine-ft-kiyano'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 24,
//     artist: 'Dip In The Pool',
//     song: 'On Retinae (West Version)',
//     tags: ['Electronic', 'Pop', 'Synthpop'],
//     url: 'https://www.youtube.com/watch?v=HNhIJ10cX5s',
//     image: 'https://img.discogs.com/w7sW6NrbkW3fCRkoLtPDXNdtn_s=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7933454-1451929825-8436.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Dip-In-The-Pool-On-Retinae/release/7933454',
//       bandcamp: 'https://music-from-memory.bandcamp.com/album/on-retinae',
//       soundcloud: 'https://soundcloud.com/music-from-memory/dip-in-the-pool-on-retinae-west-version'
//     },
//     created_at: 'Thursday, December 12, 2019'
//   },
//   {
//     id: 25,
//     artist: '††† (Crosses)',
//     song: 'Goodbye Horses',
//     tags: [],
//     url: 'https://www.youtube.com/watch?v=dR_Wr-MwYGI',
//     image: 'https://images.daytrotter.com/concerts/320/21021111-37385656.jpg',
//     externalLinks: {
//       discogs: '',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 26,
//     artist: 'Jeanette',
//     song: 'In The Morning',
//     tags: ['New Wave', 'Synthpop', 'Minimal'],
//     url: 'https://www.youtube.com/watch?v=P1ccfMGPVms',
//     image: 'https://img.discogs.com/t5UbGIzv4aIvckModzi2vnz8e-s=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2552860-1304945542.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Jeanette-In-The-Morning/release/2552860',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 27,
//     artist: 'Womack & Womack',
//     song: 'MPB (Missin\' Persons Bureau) (Folk Version)',
//     tags: ['Soul', 'Rhythm & Blues', 'Electronic', 'Downtempo'],
//     url: 'https://www.youtube.com/watch?v=v0MS9q0hYvo',
//     image: 'https://img.discogs.com/iFda61V7ZXbXpBImqR7as2uYnAw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-327484-1466447201-2429.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Womack-Womack-MPB-Missin-Persons-Bureau/release/327484',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 28,
//     artist: 'Washed Out',
//     song: 'A Dedication',
//     tags: ['Electronic', 'Chillwave', 'Synthpop', 'Alternative', 'Downtempo', 'Indie Rock'],
//     url: 'https://www.youtube.com/watch?v=noS61QN9nag',
//     image: 'https://f4.bcbits.com/img/a1162704109_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Washed-Out-Within-And-Without/master/351919',
//       bandcamp: 'https://washedout.bandcamp.com/album/within-and-without',
//       soundcloud: 'https://soundcloud.com/washedoutofficial/a-dedication'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 29,
//     artist: 'Cocoa Brovaz',
//     song: 'The Rude Awakening',
//     tags: ['Hip Hop'],
//     url: 'https://www.youtube.com/watch?v=7oQ16gwttyQ',
//     image: 'https://img.discogs.com/wj_IQ_n87KEzwjL5qBrLBXtnsx4=/fit-in/441x449/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1571181-1229707464.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Cocoa-Brovaz-The-Rude-Awakening/release/1571181',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 30,
//     artist: 'Pond',
//     song: 'Hand Mouth Dancer',
//     tags: ['Alternative', 'Rock', 'Psychedelic Pop', 'Neo-Psychedelia'],
//     url: 'https://www.youtube.com/watch?v=yVKcn782BtI',
//     image: 'https://img.discogs.com/46ivTkHbZEf4F6xv_rfonNd08gs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13289767-1551467828-2244.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Pond-Tasmania/master/1510126',
//       bandcamp: 'https://pondling.bandcamp.com/album/tasmania-explicit',
//       soundcloud: 'https://soundcloud.com/pondling/hand-mouth-dancer'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 31,
//     artist: 'lym.',
//     song: 'CARACOL',
//     tags: ['Electronic'],
//     url: 'https://www.youtube.com/watch?v=FbvUmfs3Ij4',
//     image: 'https://f4.bcbits.com/img/a0760495696_10.jpg',
//     externalLinks: {
//       discogs: '',
//       bandcamp: 'https://bruksounds.bandcamp.com/album/lym-musgo-ep',
//       soundcloud: 'https://soundcloud.com/xxiiibeats/lym-caracol'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 32,
//     artist: 'Swamp Dogg',
//     song: 'Lonely',
//     tags: ['Funk', 'Soul', 'Psychedelic', 'Rhythm & Blues'],
//     url: 'https://www.youtube.com/watch?v=mmtRZnzzZlY',
//     image: 'https://img.discogs.com/2tyGMCr--NYkuxxn9E0OnplUBhc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12483398-1536180745-1858.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Swamp-Dogg-Love-Loss-and-Auto-Tune/release/12483398',
//       bandcamp: 'https://swampdogg.bandcamp.com/album/love-loss-and-auto-tune',
//       soundcloud: 'https://soundcloud.com/swampdogg/lonely'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 33,
//     artist: 'Céline Gillain',
//     song: 'I Can\'t Connect',
//     tags: ['Electronic'],
//     url: 'https://www.youtube.com/watch?v=jP6HWpMMVLs',
//     image: 'https://f4.bcbits.com/img/a1377712409_10.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/C%C3%A9line-Gillain-What-Happens-If-I-Open-My-Mouth/release/10494638',
//       bandcamp: 'https://celinegillain.bandcamp.com/album/what-happens-if-i-open-my-mouth',
//       soundcloud: 'https://soundcloud.com/crevettedistribution/i-cant-connect'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 34,
//     artist: 'Karen Smith',
//     song: 'Pillow Talk',
//     tags: ['Reggae'],
//     url: 'https://www.youtube.com/watch?v=UmPcPARSy1o',
//     image: 'https://img.discogs.com/II2EjymD5ygQhbD9ifDNgrm1q20=/fit-in/600x618/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2154453-1458559030-6774.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Karen-Smith-Pillow-Talk/release/2154453',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 35,
//     artist: 'Amps For Christ',
//     song: 'Edward',
//     tags: ['Folk Rock', 'Experimental'],
//     url: 'https://www.youtube.com/watch?v=FQmJR9Aoh8o',
//     image: 'https://img.discogs.com/TBlsQ8ummc0_Uh1OFvav1q0DIE8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3571322-1335726389.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Amps-For-Christ-Circuits/release/3571322',
//       bandcamp: '',
//       soundcloud: ''
//     },
//     created_at: 'Saturday, December 14, 2019'
//   },
//   {
//     id: 36,
//     artist: 'Pharoahe Monch',
//     song: 'Queens',
//     tags: ['Hip Hop'],
//     url: 'https://www.youtube.com/watch?v=71ZXC7N1F9E',
//     image: 'https://img.discogs.com/r5vdBM5Sa7iw77V9V9DYMQwt0UY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-395683-1268157972.jpeg.jpg',
//     externalLinks: {
//       discogs: 'https://www.discogs.com/Pharoahe-Monch-Internal-Affairs/master/50758',
//       bandcamp: '',
//       soundcloud: 'https://soundcloud.com/user-422424021/pharoahe-monch-queens'
//     },
//     created_at: 'Saturday, December 14, 2019'
//   }
// ]
