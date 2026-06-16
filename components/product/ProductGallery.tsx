"use client";

import { useState } from "react";
import Image from "next/image";
import type { StrapiImage } from "@/types";
import { getStrapiImageUrl } from "@/lib/utils";

interface ProductGalleryProps {
  images: StrapiImage[];
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
  const mainUrl =
    mainImage.formats?.large?.url ??
    mainImage.formats?.medium?.url ??
    mainImage.url;

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <Image
          src={getStrapiImageUrl(mainUrl)}
          alt={mainImage.alternativeText ?? productName}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 820px) 100vw, 55vw"
        />
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => {
            const thumbUrl =
              img.formats?.thumbnail?.url ??
              img.formats?.small?.url ??
              img.url;
            return (
              <button
                key={img.id}
                className={`gallery-thumb${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Image ${i + 1}`}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={getStrapiImageUrl(thumbUrl)}
                    alt={img.alternativeText ?? `${productName} ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="72px"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
