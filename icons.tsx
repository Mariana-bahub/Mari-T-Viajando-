// Ícones simples em SVG inspirados no guia de marca (traço fino, estilo outline)
import { SVGProps } from "react";

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 3.5 12 2l1.5 1.5-1 4.2 5.7 3.3c.9.5 1.3 1.6.8 2.5l-.1.2-6-1.7-1.2 4.2 2 1.4-.4 1.3-3-1-3 1-.4-1.3 2-1.4-1.2-4.2-6 1.7-.1-.2c-.5-.9-.1-2 .8-2.5l5.7-3.3-1-4.2Z"
      />
    </svg>
  );
}

export function HotelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="7" y="3" width="10" height="18" rx="1" />
      <path d="M4 21h16M9.5 7h1M13.5 7h1M9.5 10.5h1M13.5 10.5h1M9.5 14h1M13.5 14h1M10 21v-3.5h4V21" />
    </svg>
  );
}

export function SignpostIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path d="M11 3v18M11 6h6l-1.5 2L17 10h-6M5 6h4v4H5l1.5-2L5 6Z" strokeLinejoin="round" />
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 16.5 6 11a2 2 0 0 1 1.9-1.4h8.2A2 2 0 0 1 18 11l1.5 5.5M4.5 16.5h15M4.5 16.5V19h2.2v-1.5M19.5 16.5V19h-2.2v-1.5"
      />
      <circle cx="7.5" cy="16.5" r="1.3" />
      <circle cx="16.5" cy="16.5" r="1.3" />
    </svg>
  );
}

export function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 3.5 8 8a1.5 1.5 0 0 1 0 2.1l-5.9 5.9a1.5 1.5 0 0 1-2.1 0l-8-8V4a.5.5 0 0 1 .5-.5h7.5Z"
      />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-1.5h7L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z"
      />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path strokeLinecap="round" d="m20 20-4.3-4.3" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
}
