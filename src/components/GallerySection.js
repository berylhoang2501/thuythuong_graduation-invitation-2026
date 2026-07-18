import React from "react";
import { withPrefix } from "gatsby";

const photos = [
  ["IMG_6021.JPG", "Khoảnh khắc tốt nghiệp 1"],
  ["IMG_6023.JPG", "Khoảnh khắc tốt nghiệp 2"],
  ["IMG_6026.JPG", "Khoảnh khắc tốt nghiệp 3"],
  ["IMG_6028.JPG", "Khoảnh khắc tốt nghiệp 4"],
];

export default function GallerySection() {
  return (
    <section className="section section--navy">
      <div className="container">
        <p className="eyebrow eyebrow--gold">GRADUATION MEMORIES</p>
        <h2>Khoảnh khắc tốt nghiệp</h2>
        <div className="gallery">
          {photos.map(([file, alt]) => (
            <figure className="gallery__item" key={file}>
              <img src={withPrefix(`/images/${file}`)} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
