import {
  PERFORMANCES,
  SPEAKERS,
  PROFESSIONAL_WORKSHOPS,
  EXPERIENCE_WORKSHOPS,
  SIDE_HAPPENINGS
} from '@data';

export const CONTENT_MAP = {
  speakers: {
    title: 'Meet Our Speakers',
    data: SPEAKERS,
    type: 'speaker'
  },
  performances: {
    title: 'Live Performances',
    data: PERFORMANCES,
    type: 'performance'
  },
  'professional-workshops': {
    title: 'Engage in our Professional Workshops',
    data: PROFESSIONAL_WORKSHOPS,
    type: 'workshop'
  },
  'experience-workshops': {
    title: 'Engage in our Experience Workshops',
    data: EXPERIENCE_WORKSHOPS,
    type: 'workshop'
  },
  'side-happenings': {
    title: 'Get in touch with our Side Happenings',
    data: SIDE_HAPPENINGS,
    type: 'happening'
  }
};
