import React from 'react';
import MediaCover from './MediaCover'; // Assuming the MediaCover component is in the same directory as GallerySection

const GallerySection = () => {
  return (
    <section className="my-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">My Gallery</h2>
    <div>
      <MediaCover />
    </div>
    </section>
  );
};

export default GallerySection;
