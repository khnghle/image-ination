import React from 'react';
import SingleImage from './singleImg';

function Images (props) {
  const {images, onDelete} = props

    return (
      <section className="flex flex-row flex-wrap p-5">
        {images.length ? images.map(currImg => <SingleImage info={currImg} key={currImg.id} onDelete={onDelete}/>) : 'No images found'}
      </section>
    );

}

export default Images;
