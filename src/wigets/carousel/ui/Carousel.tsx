/* eslint-disable*/

import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import React, { type ReactNode } from 'react';

type PropType = {
  children?: ReactNode | ReactNode[];
  options?: EmblaOptionsType;
};

export default function Carousel({ children, options }: PropType) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {React.Children.map(children, (child, index) => (
            <div className="embla__slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
