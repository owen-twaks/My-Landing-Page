import type { CSSProperties } from 'react';
import { imageSizes } from '../data/images';

type Props = {
  /** Path to the original image in /public, e.g. '/images/hero.jpeg'. */
  src: string;
  /** Descriptive alt text — describes the image, not the keyword. */
  alt: string;
  /** Skip lazy-loading and raise fetch priority for above-the-fold images. */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
};

/**
 * Image element that serves WebP to supporting browsers with the original JPEG
 * as a fallback, and always provides intrinsic width/height from src/data/images.ts.
 */
export function Img({ src, alt, priority = false, className, style, sizes }: Props) {
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const entry = imageSizes[src as keyof typeof imageSizes];
  const dims = (entry as { width: number; height: number } | undefined) ?? null;

  return (
    <picture>
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={dims?.width}
        height={dims?.height}
        className={className}
        style={style}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
