/**
 * ============================================================================
 * 🌐 SOCIAL MEDIA & DEVELOPER PROFILES — EBAYE PRAISEGOD ESE
 * ============================================================================
 * Update your Facebook and Twitter/X profile URLs below whenever ready.
 * ============================================================================
 */

export interface SocialLink {
  id: 'github' | 'linkedin' | 'facebook' | 'twitter';
  name: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ebaye713',
    label: 'Explore Ebaye PraiseGod Ese on GitHub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ebaye-praisegod-73a38b44b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'Connect with Ebaye PraiseGod Ese on LinkedIn',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    // Replace with your exact Facebook profile URL (e.g., https://www.facebook.com/your.username)
    url: 'https://www.facebook.com',
    label: 'Follow Ebaye PraiseGod Ese on Facebook',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    // Replace with your exact Twitter/X profile URL (e.g., https://x.com/yourhandle)
    url: 'https://twitter.com',
    label: 'Follow Ebaye PraiseGod Ese on Twitter',
  },
];
