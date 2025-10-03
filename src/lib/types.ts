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
