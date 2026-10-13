// Build-time search index for the static site search (src/pages/search.astro).
import lab from '../data/lab.json';
import pubs from '../data/publications.json';
import people from '../data/people.json';
import { url, visibleAreas } from '../utils';

export function GET() {
  const items = [
    { type: 'Page', title: 'About', text: lab.about.join(' '), href: url('about/') },
    { type: 'Page', title: 'Research', text: `${lab.researchSummary} ${lab.interests.join(' ')}`, href: url('research/') },
    { type: 'Page', title: 'Join Us', text: lab.join.intro, href: url('join/') },
    ...visibleAreas(lab.researchAreas).map((a) => ({ type: 'Research area', title: a.title, text: a.desc, href: url(`research/#${a.id}`) })),
    { type: 'Person', title: lab.pi.name, text: `${lab.pi.title.join(' ')} ${lab.pi.affiliation} ${lab.pi.email}`, href: url('people/') },
    ...people.map((p) => ({ type: 'Person', title: p.name, text: [p.role, p.status === 'current' ? 'Current student' : 'Alumni', p.email, p.next].filter(Boolean).join(' '), href: url('people/') })),
    ...pubs.map((p) => ({ type: 'Publication', title: p.title, text: `${p.authors} ${p.venue} ${p.abbr ?? ''} ${p.year}`, href: url(`publications/#${p.id}`) })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
