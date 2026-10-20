/**
 * Central gallery catalog for centre-wise photo/video galleries.
 * All current media is attributed to Sector 105 (live centre).
 */

export const centres = [
  { id: 'sector-105', name: 'Sector 105', city: 'Mohali', live: true },
  { id: 'sector-79', name: 'Sector 79', city: 'Mohali', live: false },
  { id: 'sector-127', name: 'Sector 127', city: 'Mohali', live: false },
];

export const themes = [
  { id: 'all', label: 'All' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'events', label: 'Events' },
  { id: 'daily', label: 'Daily Activities' },
];

/** albumId → display label + theme */
export const albums = {
  baisakhi: { label: 'Baisakhi', theme: 'celebrations' },
  'ganpati-rakshabandhan': { label: 'Ganpati & Rakshabandhan', theme: 'celebrations' },
  'independence-day': { label: 'Independence Day', theme: 'celebrations' },
  'mothers-day': { label: "Mother's Day", theme: 'celebrations' },
  ramleela: { label: 'Ramleela', theme: 'celebrations' },
  'friendship-day': { label: 'Friendship Day', theme: 'celebrations' },
  'easter-bunny': { label: 'Easter Bunny', theme: 'celebrations' },
  'parents-day': { label: 'Parents Day', theme: 'celebrations' },
  'sports-day': { label: 'Sports Day', theme: 'events' },
  inauguration: { label: 'Inauguration', theme: 'events' },
  'store-visit': { label: 'Store Visit', theme: 'events' },
  'van-mahotsav': { label: 'Van Mahotsav', theme: 'events' },
  'world-food-day': { label: 'World Food Day', theme: 'events' },
  'world-post-day': { label: 'World Post Day', theme: 'events' },
  'habit-awareness': { label: 'Habit Awareness', theme: 'daily' },
  'shadow-play': { label: 'Shadow Play', theme: 'daily' },
  'messy-play': { label: 'Messy Play', theme: 'daily' },
  'visit-mris': { label: 'Visit to MRIS', theme: 'daily' },
  'bloomer-camp': { label: 'Bloomer Camp', theme: 'daily' },
  'first-day': { label: 'First Day', theme: 'daily' },
  'summer-camp': { label: 'Summer Camp', theme: 'daily' },
  highlights: { label: 'Highlights', theme: 'daily' },
};

const C = 'sector-105';

function photo(id, album, title, src, extra = {}) {
  const meta = albums[album];
  return {
    id,
    centreId: C,
    theme: meta.theme,
    album,
    title,
    type: 'photo',
    src,
    alt: title,
    ...extra,
  };
}

function series(idPrefix, album, titleBase, pathPattern, count, extra = {}) {
  const items = [];
  for (let i = 1; i <= count; i++) {
    const src = pathPattern.replace('{n}', String(i));
    items.push(
      photo(
        `${idPrefix}-${i}`,
        album,
        `${titleBase} ${i}`,
        src,
        typeof extra === 'function' ? extra(i) : extra
      )
    );
  }
  return items;
}

export const galleryItems = [
  // Celebrations
  ...series('baisakhi', 'baisakhi', 'Baisakhi', '/images/events/baisakhi-{n}.jpg', 14, (i) =>
    [1, 2, 3, 4, 5, 12, 13].includes(i) ? { rotate: 270 } : {}
  ),
  photo('ganpati-1', 'ganpati-rakshabandhan', 'Ganpati Celebration 1', '/images/Ganpati-rakshabandhan/Ganpati-1.webp'),
  photo('ganpati-2', 'ganpati-rakshabandhan', 'Ganpati Celebration 2', '/images/Ganpati-rakshabandhan/Ganpati-2.webp'),
  photo('ganpati-3', 'ganpati-rakshabandhan', 'Ganpati Celebration 3', '/images/Ganpati-rakshabandhan/Ganpati-3.webp'),
  photo('rakhi-1', 'ganpati-rakshabandhan', 'Rakshabandhan', '/images/Ganpati-rakshabandhan/Rakshabandhan-1.webp'),
  ...series('independence', 'independence-day', 'Independence Day', '/images/IndependenceDay/IndependenceDay-{n}.webp', 5),
  ...series('mothers-day', 'mothers-day', "Mother's Day", '/images/events/mothers-day-{n}.png', 12),
  ...series('ramleela', 'ramleela', 'Ramleela', '/images/events/ramleela-{n}.jpg', 4),
  photo('ramleela-5', 'ramleela', 'Ramleela Scene', '/images/events/ramleela-5.png'),
  photo('ramleela-6', 'ramleela', 'Ramleela Performer', '/images/events/ramleela-6.png'),
  photo('ramleela-7', 'ramleela', 'Ramleela Ravan', '/images/events/ramleela-7.png'),
  photo('ramleela-8', 'ramleela', 'Ramleela Dance', '/images/events/ramleela-8.png'),
  photo('ramleela-9', 'ramleela', 'Ramleela Moment 9', '/images/events/ramleela-9.png'),
  photo('ramleela-10', 'ramleela', 'Ramleela Moment 10', '/images/events/ramleela-10.png'),
  photo('ramleela-11', 'ramleela', 'Ramleela Moment 11', '/images/events/ramleela-11.png'),
  photo('ramleela-12', 'ramleela', 'Ramleela Moment 12', '/images/events/ramleela-12.png'),
  ...series('friendship', 'friendship-day', 'Friendship Day', '/images/activities/friendship-day-{n}.jpg', 7),
  ...series('easter', 'easter-bunny', 'Easter Bunny', '/images/activities/easter-bunny-{n}.jpg', 7),
  ...series('ptm', 'parents-day', 'Parents Day', '/images/events/ptm-{n}.jpg', 13),

  // Events
  ...series('sports', 'sports-day', 'Sports Day', '/images/events/sports-{n}.jpg', 16),
  ...series('inauguration', 'inauguration', 'Inauguration', '/images/Inauguration/Inauguration-{n}.webp', 6),
  ...series('storevisit', 'store-visit', 'Store Visit', '/images/Storevisit/Storevisit-{n}.webp', 3),
  ...series('van-mahotsav', 'van-mahotsav', 'Van Mahotsav', '/images/activities/van-mahotsav-{n}.jpg', 5),
  ...series('world-food', 'world-food-day', 'World Food Day', '/images/activities/world-food-day-{n}.jpg', 6),
  ...series('world-post', 'world-post-day', 'World Post Day', '/images/activities/world-post-day-{n}.jpg', 13),

  // Daily Activities (includes former Classroom Learning albums)
  ...series('habit', 'habit-awareness', 'Habit Awareness', '/images/HabitAwareness/HabitAwareness-{n}.webp', 5),
  ...series('shadow', 'shadow-play', 'Shadow Play', '/images/activities/shadow-play-{n}.jpg', 8),
  ...series('messy', 'messy-play', 'Messy Play', '/images/activities/messy-play-{n}.jpg', 5),
  ...series('mris', 'visit-mris', 'Visit to MRIS', '/images/activities/visit-mris-{n}.jpg', 6),
  ...series('bloomer', 'bloomer-camp', 'Bloomer Camp', '/images/activities/bloomer-camp-{n}.jpg', 4),

  // Daily Activities
  ...series('first-day', 'first-day', 'First Day', '/images/activities/first-day-{n}.jpg', 7),
  ...series('summer', 'summer-camp', 'Summer Camp', '/images/activities/summer-camp-{n}.jpg', 12),
  photo('highlight-1', 'highlights', 'Joyful group activity', '/images/gallery-1.jpg'),
  photo('highlight-2', 'highlights', 'World Post Day moment', '/images/gallery-2.jpg'),
  photo('highlight-3', 'highlights', 'Happy students', '/images/gallery-3.jpg'),
  photo('highlight-4', 'highlights', 'Yoga and mindfulness', '/images/gallery-4.jpg'),
  photo('highlight-5', 'highlights', 'Art and craft', '/images/gallery-5.jpg'),
  photo('highlight-6', 'highlights', 'Pirate party fun', '/images/gallery-6.jpg'),
  photo('highlight-preschool', 'highlights', 'Preschool friends', '/images/preschool-group.png'),
  photo('highlight-daycare', 'highlights', 'Daycare smiles', '/images/daycare-group.png'),
];

/** Albums available for a given theme (excluding 'all') */
export function getAlbumsForTheme(themeId) {
  if (!themeId || themeId === 'all') return [];
  return Object.entries(albums)
    .filter(([, meta]) => meta.theme === themeId)
    .map(([id, meta]) => ({ id, label: meta.label }));
}

export function filterGalleryItems({ centreId, themeId, albumId } = {}) {
  let items = galleryItems;

  if (centreId) {
    items = items.filter((item) => item.centreId === centreId);
  }

  if (themeId && themeId !== 'all') {
    items = items.filter((item) => item.theme === themeId);
  }

  if (albumId) {
    items = items.filter((item) => item.album === albumId);
  }

  return items;
}

export function getCentreById(id) {
  return centres.find((c) => c.id === id) || centres[0];
}
