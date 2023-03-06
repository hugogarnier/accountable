export type Team = {
  team: {
    id: string;
    uid: string;
    slug: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    name: string;
    nickname: string;
    location: string;
    color: string;
    alternateColor: string;
    isActive: boolean;
    isAllStar: boolean;
    logos: {
      href: string;
      alt: string;
      rel: string[];
      width: number;
      height: number;
    }[];
    links: {
      language: string;
      rel: string[];
      href: string;
      text: string;
      shortText?: string;
      isExternal: boolean;
      isPremium: boolean;
    }[];
  };
};

export type LightTeam = {
  shortDisplayName: string;
  logoHref: string;
};
