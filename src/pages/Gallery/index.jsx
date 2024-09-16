import { Lightbox } from "yet-another-react-lightbox";
import { MainContainer } from "../../styles/global";
import { GalleryContainer, GalleryGrid } from "./styles";
import img1 from "/assets/gallery/img1.jpg";
import img2 from "/assets/gallery/img2.jpg";
import img3 from "/assets/gallery/img3.jpg";
import "yet-another-react-lightbox/styles.css";
import React from "react";

const photos = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img2 },
  { src: img1 },
  { src: img3 },
  { src: img3 },
  { src: img2 },
  { src: img1 },
  { src: img1 },
  { src: img3 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img3 },
];

export function Gallery() {
  const [index, setIndex] = React.useState(-1);

  function handleClick(index) {
    setIndex(index);
  }

  return (
    <MainContainer>
      <GalleryContainer>
        <h1>
          AQUI MILAGRES <br /> ACONTECEM
        </h1>
      </GalleryContainer>
      <GalleryGrid>
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
    </MainContainer>
  );
}
