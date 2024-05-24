import React from 'react';
import MediaCover from './MediaCover'; // Assuming the MediaCover component is in the same directory as GallerySection

const GallerySection = () => {

  return (
    <section id="gallery" className="my-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">My Gallery</h2>
          <p className="text-white mb-5">
            Welcome to my personal photo gallery, a curated collection of moments captured through my lens. Each image tells a unique story, reflecting the beauty and essence of different places, people, and experiences that I&apos;ve encountered on my journey. Below each photograph, you&apos;ll find my own captions—intimate thoughts and reflections that add depth and meaning to each visual narrative. These captions are a glimpse into the emotions and inspirations that shaped these shots, inviting you to see the world through my eyes. Enjoy exploring my gallery and let each image and caption resonate with your own experiences and memories.</p>

          <p className="text-white mb-5">Click the images to see a full view. Happy Exploring!</p>
    <div>
      <MediaCover />
    </div>
    </section>
  );
};

export default GallerySection;
