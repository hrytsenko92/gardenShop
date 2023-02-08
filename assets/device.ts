const size = {
  mobileS: '375px',
  mobileM: '525px',
  tabletS: '768px',
  tabletM: '1024px',
  laptop: '1440px',
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletM})`,
  laptop: `(min-width: ${size.laptop})`,
};
export type DeviceType = {
  mobileS: string;
  mobileM: string;
  tabletS: string;
  tabletM: string;
  laptop: string;
};
