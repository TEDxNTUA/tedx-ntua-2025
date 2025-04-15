import {
  SPEAKERS,
  PERFORMANCES,
  EXPERIENCE_WORKSHOPS,
  PROFESSIONAL_WORKSHOPS,
  SIDE_HAPPENINGS
} from '@data';

export async function getSpeakerBySlug(slug) {
  const speaker = SPEAKERS.find(s => s.slug === slug);

  return speaker;
}

export async function getAllSpeakerSlugs() {
  return SPEAKERS.map(s => s.slug);
}

export async function getPerformanceBySlug(slug) {
  const performance = PERFORMANCES.find(s => s.slug === slug);

  return performance;
}

export async function getAllPerformancesSlugs() {
  return PERFORMANCES.map(s => s.slug);
}

export async function getExperienceWorkshopBySlug() {
  return EXPERIENCE_WORKSHOPS.map(s => s.slug);
}

export async function getAllExperienceWorkshops() {
  return EXPERIENCE_WORKSHOPS.map(s => s.slug);
}

export async function getProfessionalWorkshopsBySlug() {
  return PROFESSIONAL_WORKSHOPS.map(s => s.slug);
}

export async function getAllProfessionalWorkshops() {
  return PROFESSIONAL_WORKSHOPS.map(s => s.slug);
}

export async function getSideHappeningsBySlug() {
  return SIDE_HAPPENINGS.map(s => s.slug);
}

export async function getAllSideHappenings() {
  return SIDE_HAPPENINGS.map(s => s.slug);
}
