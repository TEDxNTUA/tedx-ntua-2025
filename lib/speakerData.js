import {SPEAKERS} from '@data/speakers';
import {notFound} from 'next/navigation';

export async function getSpeakerBySlug(slug) {
  const speaker = SPEAKERS.find(s => s.slug === slug);

  if (!speaker) {
    notFound();
  }
  return speaker;
}

export async function getAllSpeakerSlugs() {
  return SPEAKERS.map(s => s.slug);
}
