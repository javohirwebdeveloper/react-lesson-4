import React from 'react';

const Gallery = ({ gallery }) => {
  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {gallery.map((image, index) => (
          <li key={index}><img class="gallery" src={image}alt="Grapefruit slice atop a pile of other slices"/> </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
