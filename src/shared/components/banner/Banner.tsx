import React from 'react';
import styles from "./banner.module.scss";

interface IBanner {
  image?: string;
  tint?: string;
}


const Banner: React.FC<IBanner> = ({image, tint}) => {
  const BannerStyles = {
    backgroundImage: `url('${image}')`,
  };
  const TintStyles = {
    backgroundColor: tint,
  };
  return (
    <>
      <div className={styles.banner} style={BannerStyles} />
      {tint && <div className={styles.tint} style={TintStyles} />}
    </>
  )
}

export default Banner;