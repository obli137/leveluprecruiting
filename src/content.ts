export const roles = [
  'AI Developers',
  'Machine Learning Engineers',
  'Data Scientists',
  'DevOps',
  'MLOps',
  'Mobile',
  'Backend',
  'Frontend',
] as const;

export const nearbyRoles = [
  'Full Stack',
  'QA / SDET',
  'Data Engineering',
  'Tech Lead',
  'Engineering Manager',
  'Product',
] as const;

export const clients = [
  { name: 'Despegar', src: '/clientes/despegar-logo.webp' },
  { name: 'Digital House', src: '/clientes/digital-house-logo.png' },
  { name: 'Etermax', src: '/clientes/etermax.png' },
  { name: 'Kincarta', src: '/clientes/kincarta-logo.jpeg' },
  { name: 'Media.Monks', src: '/clientes/mediamonks-logo.jpeg' },
  { name: 'Patagonian', src: '/clientes/patagonian-logo.jpeg' },
  { name: 'Southteams', src: '/clientes/southteams-logo.png' },
  { name: 'Variacode', src: '/clientes/variacode-logo.jpeg' },
] as const;

export const steps = [
  {
    number: '01',
    title: 'Tell us the role',
    body: 'One hour with the hiring manager. Profile, must-haves, and what good looks like.',
  },
  {
    number: '02',
    title: 'Meet people worth interviewing',
    body: 'We source, screen, and send a short list. Not a folder of resumes.',
  },
  {
    number: '03',
    title: 'Hire them direct',
    body: 'They join your team. The fee is due when they start.',
  },
] as const;

export const inclusions = [
  'Profile calibration with the hiring manager',
  'A job description that matches the role',
  'A sourcing plan',
  'Active outreach and a first screen',
  'A structured short list',
  'Coordination through the process',
  'Help through the offer, the close, and the start date',
] as const;

export const CONTACT_EMAIL = 'mariano@hrlevel-up.com';
