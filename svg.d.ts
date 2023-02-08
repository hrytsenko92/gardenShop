// declare module '*.svg' {
//   import React from 'react';
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
