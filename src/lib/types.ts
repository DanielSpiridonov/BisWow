import { StaticImageData } from "next/image";

export type specOverview = {
  buildSpec: string;
  displayName: string;
  imageURL: StaticImageData | string;
  buildURL: string;
};

export type buildContent = {
  buildName: string;
  description: string;
  talents: string[];
  strenghts: string[];
  weaknesses: string[];
};

// Gear related types
export type GearItem = {
  id: number | string;
  name: string;
  html?: string;
  quality?:
    | "poor"
    | "common"
    | "uncommon"
    | "rare"
    | "epic"
    | "legendary"
    | "artifact";
  source?: string;
  icon?: string;
  notes?: string;
  isHeroic?: boolean;
};

export type GearSlot = {
  slot: string;
  items: GearItem[];
  collapsedByDefault?: boolean;
};

export type GearListData = GearSlot[];
