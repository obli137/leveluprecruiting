export const themes = ['AI', 'Process', 'Metrics', 'Interviews', 'Negotiation', 'ATS', 'Roles'] as const;

export const contributions = ['Framework', 'Checklist', 'How to decide', 'Field guide', 'Caution'] as const;

export type Theme = (typeof themes)[number];
export type Contribution = (typeof contributions)[number];

type ArticleTags = {
  themes: Theme[];
  contributions: Contribution[];
};

const tagsBySlug: Record<string, ArticleTags> = {
  'ai-in-recruiting-step-zero': { themes: ['AI', 'Process'], contributions: ['Framework', 'Checklist'] },
  'ai-fluency-in-recruiting': { themes: ['AI'], contributions: ['Framework'] },
  'on-hiring-feasibility-in-recruiting': { themes: ['Process'], contributions: ['Framework', 'How to decide'] },
  'negotiation-in-recruiting-arbitrate-anchor-and-hold-the-tension': {
    themes: ['Negotiation'],
    contributions: ['Field guide'],
  },
  'the-recruiters-logbook-how-to-choose-an-ats': { themes: ['ATS'], contributions: ['How to decide', 'Checklist'] },
  'from-interview-to-encounter': { themes: ['Interviews'], contributions: ['Field guide'] },
  'data-hygiene-in-the-ats': { themes: ['ATS', 'Metrics'], contributions: ['Checklist'] },
  'the-false-problem-of-time-to-hire': { themes: ['Metrics'], contributions: ['Caution', 'Framework'] },
  '7-agents-for-recruiting': { themes: ['AI'], contributions: ['Field guide'] },
  'what-is-a-forward-deployed-engineer': { themes: ['Roles'], contributions: ['Field guide'] },
  'ai-interviewers-10-tips-for-adopting-them-without-losing-the-candidate': {
    themes: ['Interviews', 'AI'],
    contributions: ['Checklist', 'Caution'],
  },
  'some-ideas-also-need-to-be-seen': { themes: ['Process'], contributions: ['Field guide'] },
  'jev-the-new-ai-model-where-it-will-change-recruiting-and-where-it-wont': {
    themes: ['AI'],
    contributions: ['Field guide', 'Caution'],
  },
};

export function tagsFor(slug: string): ArticleTags {
  return tagsBySlug[slug] ?? { themes: [], contributions: [] };
}
