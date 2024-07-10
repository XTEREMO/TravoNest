/* eslint-disable no-unused-vars */
import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import g1 from '../res/gallary/CUST001_01.jpg'
import g2 from '../res/gallary/CUST001_02.jpg'
import g3 from '../res/gallary/CUST001_03.jpg'
import g4 from '../res/gallary/CUST001_04.jpg'
import g5 from '../res/gallary/CUST001_05.jpg'
import g6 from '../res/gallary/CUST001_06.jpg'
import g7 from '../res/gallary/CUST002_01.jpg'
import g8 from '../res/gallary/CUST002_02.jpg'
import g9 from '../res/gallary/CUST002_03.jpg'
import g10 from '../res/gallary/CUST002_05.jpg'
import g11 from '../res/gallary/CUST002_06.jpg'
import g12 from '../res/gallary/CUST002_04.jpg'

const galleryImages = [g1,g2,g3,g4,g5,g6,g11,g8,g9,g10,g7,g12]


const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            className="masonry_img"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;