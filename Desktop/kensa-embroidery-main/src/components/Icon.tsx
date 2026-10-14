import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'phone'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'arrowRight'
  | 'arrowUp'
  | 'check'
  | 'star'
  | 'chevronLeft'
  | 'chevronRight'
  | 'plus'
  | 'close'
  | 'whatsapp'
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'linkedin'
  | 'tiktok'
  | 'factory'
  | 'shield'
  | 'boxes'
  | 'handshake'
  | 'briefcase'
  | 'sparkle'
  | 'embroidery'
  | 'dtf'
  | 'sublimation'
  | 'display'
  | 'gifts'
  | 'truck'
  | 'users'
  | 'palette'
  | 'quote'
  | 'mapPin'
  | 'send';

const paths: Record<IconName, ReactNode> = {
  phone: <path d="M6.6 2.5 4 5.1c-.9.9-.6 2.6.5 4.6 1.6 2.8 3.9 5.1 6.7 6.7 2 1.1 3.7 1.4 4.6.5l2.6-2.6-3.4-3.4-1.9 1.9c-1.7-.8-3.1-2.2-3.9-3.9l1.9-1.9z" />,
  mail: (
    <>
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5z" />
      <path d="m4 6.5 8 5.5 8-5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="11" r="2.6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="11" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  arrowRight: <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  arrowUp: <path d="M12 20V5m0 0-6 6m6-6 6 6" />,
  check: <path d="m5 12.8 4.3 4.2L19 7" />,
  star: <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8z" />,
  chevronLeft: <path d="M15 5.5 8.5 12l6.5 6.5" />,
  chevronRight: <path d="M9 5.5 15.5 12 9 18.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  whatsapp: (
    <path
      d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.15L2.5 21.5l4.98-1.4a9.4 9.4 0 1 0 4.56-17.6Zm0 1.8a7.6 7.6 0 0 1 3.86 14.15l-.5.28-3.2.9.86-3.02-.3-.5a7.6 7.6 0 0 1-1.02-3.83 7.6 7.6 0 0 1 7.3-7.98Zm-2.6 3.3c-.2 0-.5.07-.72.32-.24.26-.86.84-.86 2 0 1.17.85 2.28.97 2.44.12.16 1.66 2.63 4.06 3.6 1.99.8 2.4.65 2.83.6.44-.04 1.42-.58 1.62-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.18-.44-.36-.44-.5-.45h-.42Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  facebook: (
    <path
      d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.87.24-1.46 1.5-1.46h1.4V5.03c-.24-.03-1.1-.1-2.1-.1-2.1 0-3.55 1.28-3.55 3.63V11H8.3v3h2.45v7z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  x: (
    <path
      d="M17.7 3h3.1l-6.8 7.8L21.9 21h-5.8l-4.2-5.5L6.9 21H3.8l7.1-8.1L3 3h5.9l3.9 5.1zm-1.1 16.1h1.7L7.4 4.8H5.6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <path
      d="M19 3.6v-1.6c0-.7-.4-1.2-1-1.4-4.4-.6-9.1-.7-13.5-.7-.9 0-1.5.3-1.9.8l-1.4 1.4c-.3.3-.6.4-1 .4-.4 0-.8 0-1-.2-.3-.3-.5-.8-.4-1.3.1-.6.6-1.5 1.5-2.4.6-.5 1.3-1.1 1.9-1.6.1-.1.2-.2.3-.3.9-1.1 2.7-1.8 4.6-1.8 2.5 0 4.5.8 5.9 2.4 1 1.1 1.5 2.5 1.3 4-.1 1.1-.7 2-1.7 2.6-.2.1-.4.2-.7.2-.6 0-1-.4-1-.9v1.7c0 1.2.9 2 2 2h2.7c.6 0 1-.3 1.3-.7.3-.4.4-.8.4-1.3V15c0-.7-.3-1.2-.8-1.5-.7-.4-1.4-.7-2.1-.7-.9 0-1.7.3-2.3 1-.6.7-1.1 1.7-1.4 2.8-.2.5-.3.9-.1 1.4.2.5.7 1 1.4 1.2.4.1.8.1 1.2.1h4.5c.6 0 1 .1 1.3.4.3.3.5.7.6 1.2zm-7 3.6c-.3 0-.5 0-.7-.1-.2-.1-.3-.3-.4-.5-.1-.2-.1-.4-.0-.6.1-.2.2-.4.4-.5.2-.1.4-.2.7-.2.5 0 .8.3 1 .7.1.2.2.4.2.6 0 .3-.1.5-.3.6-.2.1-.4.2-.7.2z"
      fill="currentColor"
      stroke="none"
    />
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3V10l5 3V8l6 4v9z" />
      <path d="M3 21h18M7 17.5h2m4 0h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 2.5v5.9c0 4.2-2.8 7.7-7 9.6-4.2-1.9-7-5.4-7-9.6V5.5z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  boxes: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5-8.5 4.5z" />
      <path d="M3.5 8.5v7L12 20l8.5-4.5v-7M12 13v7" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 10.5 7 7l3 2.4 2-1.4 2 1.4L17 7l4 3.5-3.5 3.5-2-1.4-2.4 2.3a2 2 0 0 1-2.8 0l-1.6-1.6" />
      <path d="M3 10.5v4.2L6.6 18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.8-5.5 1.8L12 18l-1.7-5.4L4.8 10.8 10.3 9z" />
      <path d="M18.5 3.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7z" />
    </>
  ),
  embroidery: (
    <>
      <path d="M4 20 18.5 5.5" />
      <path d="M17 4.2a2.1 2.1 0 1 1 3 3l-2.3 2.3-3-3z" />
      <path d="M9.5 9.5c-2 3-3.5 5.5-3.5 7.2C6 18.6 7.4 20 9.2 20" />
    </>
  ),
  dtf: (
    <>
      <rect x="4" y="9" width="16" height="7" rx="2" />
      <path d="M7.5 9V6.5h9V9M7 16v3.5h10V16" />
      <path d="M12 3.5v2" />
    </>
  ),
  sublimation: (
    <>
      <path d="M12 3.5s6 6.3 6 10.2A6 6 0 0 1 6 13.7C6 9.8 12 3.5 12 3.5Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  display: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16.5V20" />
    </>
  ),
  gifts: (
    <>
      <rect x="3.5" y="8.5" width="17" height="11.5" rx="2" />
      <path d="M3.5 12.5h17M12 8.5V20" />
      <path d="M12 8.5S10.8 4 8.5 4a2.2 2.2 0 0 0 0 4.5zM12 8.5S13.2 4 15.5 4a2.2 2.2 0 0 1 0 4.5z" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 16.5V7h10v9.5z" />
      <path d="M12.5 10.5H17l3 3v3h-7.5z" />
      <circle cx="6.5" cy="18.5" r="1.8" />
      <circle cx="16.5" cy="18.5" r="1.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 20c0-3.2 2.7-5.4 6-5.4s6 2.2 6 5.4" />
      <path d="M16 5.2a3 3 0 0 1 0 6M17.5 14.9c2 .7 3.5 2.4 3.5 4.6" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-.9 2-1.9 0-1.3-1.3-1.4-1.3-2.4 0-.7.6-1.2 1.4-1.2h1.4A5.5 5.5 0 0 0 21 10c0-4-4-7-9-7Z" />
      <circle cx="8" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  quote: (
    <path
      d="M9.4 5.5C6.3 6.6 4 9.7 4 13.3 4 16.5 5.9 19 8.7 19c2.3 0 3.9-1.6 3.9-3.8 0-2.1-1.4-3.6-3.4-3.6-.4 0-.8 0-1.1.2.3-1.6 1.6-3.2 3.2-3.9zm8.2 0c-3.1 1.1-5.4 4.2-5.4 7.8 0 3.2 1.9 5.7 4.7 5.7 2.3 0 3.9-1.6 3.9-3.8 0-2.1-1.4-3.6-3.4-3.6-.4 0-.8 0-1.1.2.3-1.6 1.6-3.2 3.2-3.9z"
      fill="currentColor"
      stroke="none"
    />
  ),
  send: <path d="M3.5 11.5 20.5 4l-7 17-2.4-6.6z" />,
  tiktok: (
    <path
      d="M8.6 2.5c5.9 0 8 3.5 8 8.4 0 5.9-5.9 10.9-8 10.9-2.1 0-4.1-1.1-5.5-2.9-.1-.2-.2-.3-.3-.5-.5-1-1.6-2.8-2.8-3.4-1.3-.7-2.8-.9-4.4-.9-5.9 0-8 3.5-8 8.4 0 5.9 5.9 10.9 8 10.9 2.1 0 4.1-1.1 5.5-2.9.1-.2.3-.3.4-.5.5-1 1.6-2.8 2.8-3.4 1.3-.7 2.8-.9 4.4-.9z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size, ...rest }: Props) {
  const solid = name === 'whatsapp' || name === 'facebook' || name === 'x' || name === 'quote' || name === 'send';
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
