import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = () => (
  <ContentLoader
    speed={2}
    width={286}
    height={340}
    viewBox="0 0 286 340"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="284" height="280" />
    <rect x="0" y="300" rx="4" ry="4" width="102" height="40" />
  </ContentLoader>
);

export default ImageLoader;