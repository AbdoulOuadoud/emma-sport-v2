"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="product-gallery">
        <div className="gallery-main">
          <div className="ph" style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}>
            <span>{productName}</span>
          </div>
        </div>
      </div>
    );
  }

  const mainImage = images[active];

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <Image
          src={mainImage.url}
          alt={mainImage.alt ?? productName}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 820px) 100vw, 55vw"
        />
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={img.id}
              className={`gallery-thumb${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={img.url}
                  alt={img.alt ?? `${productName} ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="72px"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
