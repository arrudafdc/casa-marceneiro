import React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import { GalleryContainer, GalleryGrid } from "./styles";
import img1 from "/assets/gallery/img1.jpg";
import img2 from "/assets/gallery/img2.jpg";
import img3 from "/assets/gallery/img3.jpg";
import img4 from "/assets/gallery/img4.jpg";
import img5 from "/assets/gallery/img5.jpg";
import img6 from "/assets/gallery/img6.jpg";
import img7 from "/assets/gallery/img7.jpg";
import img8 from "/assets/gallery/img8.jpg";
import img9 from "/assets/gallery/img9.jpg";
import img10 from "/assets/gallery/img10.jpg";
import img11 from "/assets/gallery/img11.jpg";
import img12 from "/assets/gallery/img12.jpg";
import "yet-another-react-lightbox/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

const photos = [
  { src: img7 },
  { src: img10 },
  { src: img6 },
  { src: img11 },
  { src: img3 },
  { src: img2 },
  { src: img4 },
  { src: img9 },
  { src: img12 },
  { src: img8 },
  { src: img1 },
  { src: img5 },
];

export function Gallery() {
  const [index, setIndex] = React.useState(-1);

  function handleClick(index) {
    setIndex(index);
  }

  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia AOS com duração de 1 segundo
  }, []);

  return (
    <div>
      <GalleryContainer>
        <h1 data-aos="fade-up">
          AQUI <span>MILAGRES</span> <br /> ACONTECEM
        </h1>
      </GalleryContainer>
      <GalleryGrid
        data-aos="zoom-out"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        {photos.map((img, index) => (
          <div onClick={() => handleClick(index)} key={index}>
            <img loading="lazy" src={img.src} />
          </div>
        ))}
      </GalleryGrid>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </div>
  );
}
