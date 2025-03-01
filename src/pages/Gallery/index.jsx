import { useEffect, useState, useRef } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import { GalleryContainer, GalleryGrid } from "./styles";
import "yet-another-react-lightbox/styles.css";

// Importando imagens dinamicamente
const images = Array.from({ length: 98 }, (_, i) => ({
  src: `/assets/gallery/img${i + 1}.jpg`,
}));

export function Gallery() {
  useEffect(() => {
    document.title = "Casa Marceneiro - Galeria";
  }, []);

  const [index, setIndex] = useState(-1);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 20)); // Começa com 20 imagens
  const loaderRef = useRef(null);

  // Função para carregar mais imagens
  const loadMoreImages = () => {
    setTimeout(() => {
      setVisibleImages((prev) => [
        ...prev,
        ...images.slice(prev.length, prev.length + 20), // Carrega mais 20 imagens
      ]);
    }, 500); // Simula um pequeno delay para carregamento
  };

  // Intersection Observer para detectar quando o usuário chega ao final
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div>
      <GalleryContainer>
        <h1>
          AQUI <span>MILAGRES</span> <br /> ACONTECEM
        </h1>
      </GalleryContainer>
      <GalleryGrid>
        {visibleImages.map((img, i) => (
          <div onClick={() => setIndex(i)} key={i}>
            <img loading="lazy" src={img.src} alt={`Imagem ${i + 1}`} />
          </div>
        ))}
        <div ref={loaderRef} style={{ height: 20, width: "100%" }} />
      </GalleryGrid>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={visibleImages}
      />
    </div>
  );
}
