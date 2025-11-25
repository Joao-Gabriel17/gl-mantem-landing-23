import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) => {
  // Extract file extension and path
  const srcWithoutExt = src.replace(/\.(jpg|jpeg|png)$/i, '');
  const ext = src.match(/\.(jpg|jpeg|png)$/i)?.[0] || '.jpg';
  
  // Generate srcset for responsive images
  const generateSrcSet = (format: 'webp' | 'original') => {
    const extension = format === 'webp' ? '.webp' : ext;
    return `
      ${srcWithoutExt}-400w${extension} 400w,
      ${srcWithoutExt}-800w${extension} 800w,
      ${srcWithoutExt}-1200w${extension} 1200w,
      ${srcWithoutExt}-1600w${extension} 1600w
    `.trim();
  };

  return (
    <picture>
      {/* WebP format with responsive sizes */}
      <source
        type="image/webp"
        srcSet={generateSrcSet('webp')}
        sizes={sizes}
      />
      
      {/* Original format fallback */}
      <source
        type={`image/${ext.replace('.', '')}`}
        srcSet={generateSrcSet('original')}
        sizes={sizes}
      />
      
      {/* Fallback img tag */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={className}
        {...props}
      />
    </picture>
  );
};
