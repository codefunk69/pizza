import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="257" rx="10" ry="10" width="265" height="18" /> 
    <rect x="0" y="284" rx="10" ry="10" width="265" height="88" /> 
    <rect x="0" y="388" rx="10" ry="10" width="92" height="30" /> 
    <rect x="125" y="379" rx="22" ry="22" width="145" height="45" />
  </ContentLoader>
)

export default Skeleton