/**
 * Operational centre / franchisee profiles.
 * Swap director photo, message, and testimonials when the client provides real assets.
 */

export const franchiseeProfiles = [
  {
    id: 'sector-105',
    slug: 'sector-105',
    name: 'Sector 105',
    city: 'Mohali',
    status: 'operational',
    galleryCentreId: 'sector-105',
    tagline: 'Flagship learning home at Emaar',
    director: {
      name: 'Mandeep Sharma',
      role: 'Centre Director',
      image: '/images/carousel-staff.jpg',
      message:
        'Welcome to our Sector 105 family. Every morning I watch little learners arrive curious and leave a little braver — whether they are painting, singing, or sharing snack time with a new friend. My promise to parents is simple: a safe, joyful space where Indian values and playful discovery grow side by side. We would love to show you around.',
    },
    photos: [
      { src: '/images/Inauguration/Inauguration-1.webp', alt: 'Sector 105 centre inauguration' },
      { src: '/images/Inauguration/Inauguration-3.webp', alt: 'Warm welcome at the centre' },
      { src: '/images/gallery-1.jpg', alt: 'Joyful group activity' },
      { src: '/images/gallery-4.jpg', alt: 'Yoga and mindfulness' },
      { src: '/images/gallery-5.jpg', alt: 'Art and craft corner' },
      { src: '/images/preschool-group.png', alt: 'Preschool friends together' },
    ],
    activities: [
      { label: 'Sports Day', themeId: 'events', albumId: 'sports-day' },
      { label: 'Messy Play', themeId: 'learning', albumId: 'messy-play' },
      { label: 'Summer Camp', themeId: 'daily', albumId: 'summer-camp' },
      { label: 'Independence Day', themeId: 'celebrations', albumId: 'independence-day' },
      { label: 'Habit Awareness', themeId: 'learning', albumId: 'habit-awareness' },
      { label: 'World Food Day', themeId: 'events', albumId: 'world-food-day' },
    ],
    testimonials: [
      {
        quote:
          'Our daughter settled within a week. The teachers know every child by name, and the daily updates make us feel part of her day even when we are at work.',
        parentName: 'Neha & Rohit Malhotra',
        childNote: 'Parents of Aarohi, Nursery',
      },
      {
        quote:
          'What stood out was how thoughtfully festivals and play are woven into learning. She comes home humming songs and asking to “do messy play like school”.',
        parentName: 'Simran Kaur',
        childNote: 'Parent of Kabir, Playgroup',
      },
      {
        quote:
          'Safe premises, warm staff, and a Centre Director who actually listens. Choosing Sector 105 was the best decision we made for our toddler’s first school years.',
        parentName: 'Vikram & Priya Joshi',
        childNote: 'Parents of Anaya, Daycare',
      },
      {
        quote:
          'The daycare hours are flexible and the classroom feels calm, never chaotic. Our son looks forward to Mondays — that says everything.',
        parentName: 'Meera Sethi',
        childNote: 'Parent of Reyansh, Toddler',
      },
      {
        quote:
          'From the first tour we felt the care in every detail — hygiene, communication, and the way teachers speak with children. Highly recommend.',
        parentName: 'Arjun & Divya Nair',
        childNote: 'Parents of Myra, Nursery',
      },
      {
        quote:
          'Parent events are warm and well organised. We have watched our shy daughter open up through music and outdoor play. Grateful for this team.',
        parentName: 'Harleen Gill',
        childNote: 'Parent of Ishaan, Playgroup',
      },
    ],
  },
];

/** Centres not yet open — shown as muted chips on the profiles page */
export const comingSoonCentres = [
  { id: 'sector-79', name: 'Sector 79', city: 'Mohali' },
  { id: 'sector-127', name: 'Sector 127', city: 'Mohali' },
  { id: 'zirakpur', name: 'Zirakpur', city: 'Punjab' },
  { id: 'panchkula', name: 'Panchkula', city: 'Haryana' },
  { id: 'ambala', name: 'Ambala', city: 'Haryana' },
];

export function getOperationalProfiles() {
  return franchiseeProfiles.filter((p) => p.status === 'operational');
}

export function getComingSoonCentres() {
  return comingSoonCentres;
}

export function getProfileBySlug(slug) {
  return franchiseeProfiles.find((p) => p.slug === slug) || null;
}

export function galleryHref(profile, activity) {
  const centre = profile.galleryCentreId || profile.id;
  const params = new URLSearchParams({ centre });
  if (activity?.themeId) params.set('theme', activity.themeId);
  if (activity?.albumId) params.set('album', activity.albumId);
  return `/gallery?${params.toString()}`;
}
