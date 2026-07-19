import React from "react";
import { withPrefix } from "gatsby";
import { useLanguage } from "../context/LanguageContext";

const photos = [
  "IMG_6021.JPG",
  "IMG_6023.JPG",
  "IMG_6026.JPG",
  "IMG_6028.JPG",
];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="section section--gallery">
      <div className="container">
        <div className="gallery">
          {photos.map((file, index) => (
            <figure className="gallery__item" key={file}>
              <img
                src={withPrefix(`/images/${file}`)}
                alt={t.gallery.alts[index]}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
