import React from "react";
import ContentLoader from "react-content-loader";

const InfoLoader = () => (
  <ContentLoader
    speed={2}
    width={870}
    height={280}
    viewBox="0 0 870 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="5" ry="5" width="148" height="22" />
    <rect x="0" y="300" rx="4" ry="4" width="102" height="40" />
    <rect x="157" y="0" rx="5" ry="5" width="92" height="22" />
    <rect x="257" y="0" rx="5" ry="5" width="83" height="22" />
    <rect x="0" y="36" rx="0" ry="0" width="870" height="247" />
  </ContentLoader>
);

export default InfoLoader;