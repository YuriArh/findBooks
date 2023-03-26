import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={450}
    viewBox="0 0 240 450"
    backgroundColor="#d4d3d3"
    foregroundColor="#dfdddd"
  >
    <rect x="33" y="42" rx="18" ry="18" width="166" height="311" />
    <rect x="0" y="370" rx="10" ry="10" width="240" height="18" />
    <rect x="0" y="395" rx="10" ry="10" width="240" height="18" />
    <rect x="0" y="420" rx="10" ry="10" width="240" height="18" />
  </ContentLoader>
);

export default MyLoader;
