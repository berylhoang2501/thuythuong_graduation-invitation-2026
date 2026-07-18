import React from 'react';
import photo1 from '../images/IMG_6021.JPG';
import photo2 from '../images/IMG_6022.JPG';
import photo3 from '../images/IMG_6023.JPG';
import photo4 from '../images/IMG_6028.JPG';

const photos = [
  { src: photo1, alt: 'Ảnh tốt nghiệp của Hoàng Ngọc Thủy Thương 1' },
  { src: photo2, alt: 'Ảnh tốt nghiệp của Hoàng Ngọc Thủy Thương 2' },
  { src: photo3, alt: 'Ảnh tốt nghiệp của Hoàng Ngọc Thủy Thương 3' },
  { src: photo4, alt: 'Ảnh tốt nghiệp của Hoàng Ngọc Thủy Thương 4' },
];

export default function GallerySection() {
  return (
    <section className="section section-cream graduation-gallery">
      <div className="container center">
        <p className="eyebrow dark">Graduation memories</p>
        <h2 className="section-title">Khoảnh khắc tốt nghiệp</h2>
        <p className="lead narrow">
          Một cột mốc đáng nhớ trên hành trình trưởng thành, và sẽ càng ý nghĩa hơn khi có bạn cùng chia sẻ ngày đặc biệt này.
        </p>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
