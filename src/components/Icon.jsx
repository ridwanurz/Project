const PATHS = {
  camera: (
    <>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7a1 1 0 0 0 .83-.45l.94-1.4A1 1 0 0 1 9.8 3.7h4.4a1 1 0 0 1 .83.45l.94 1.4a1 1 0 0 0 .83.45h1.7A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z" />
      <circle cx="12" cy="12.5" r="3.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.4A6.5 6.5 0 0 1 21.5 20" />
    </>
  ),
  package: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
      <path d="M3.5 7.5 12 12m0 0 8.5-4.5M12 12v9" />
    </>
  ),
  event: (
    <>
      <rect x="3" y="5" width="18" height="15" rx="2.5" />
      <path d="M3 9.5h18M8 3v4M16 3v4M9 13.5l2 2 4-4" />
    </>
  ),
  drone: (
    <>
      <path d="M8.5 12.5H5.2a2 2 0 1 0 0-4h1.6M15.5 12.5h3.3a2 2 0 1 0 0-4h-1.6" />
      <rect x="8.5" y="8.5" width="7" height="6" rx="2" />
      <circle cx="12" cy="16.6" r="2.4" />
      <path d="M9 6.5 7 4.5M15 6.5l2-2" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M8 4v16M16 4v16M3 12h18M3 8h5M3 16h5M16 8h5M16 16h5" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3zm4.6 12.3c-.2.6-1.1 1.1-1.6 1.1-.4 0-1 .2-3-.8-2.2-1-3.6-3.3-3.7-3.5-.1-.2-.8-1.1-.8-2s.5-1.4.7-1.6c.2-.2.4-.2.6-.2h.5c.1 0 .3-.1.5.4l.7 1.7c0 .1 0 .3-.1.4l-.4.5c-.1.2-.3.3-.1.5.1.3.7 1.1 1.5 1.7 1 .8 1.9 1.1 2.2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.6-.1l1.6.8c.2.1.4.2.4.3.1.2.1.7-.1 1.2z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5 15 12l-4.5 2.5z" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path d="M14 3.5c.4 2.4 1.9 4 4.2 4.3v3c-1.6.1-3-.4-4.2-1.3v5.9a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.1a2.8 2.8 0 1 0 2 2.7V3.5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 3 8.2 7 9.5 4-1.3 7-5.2 7-9.5V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 7.5h10v9h-10z" />
      <path d="M12.5 11h4l3 3v2.5h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13.5h2.5v5H4.8A1.8 1.8 0 0 1 3 16.7v-1.4A1.8 1.8 0 0 1 4 13.5zM20 13.5h-2.5v5h1.7a1.8 1.8 0 0 0 1.8-1.8v-1.4a1.8 1.8 0 0 0-1.8-1.8z" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  star: (
    <path d="m12 3.8 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 10l5.9-.8z" />
  ),
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M20 12H5m6-6-6 6 6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  sparkle: (
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.5l-1.8-5.9L4.5 10.8 10.2 9z" />
  ),
  quote: (
    <path d="M9 6C6.2 7.4 4.5 9.9 4.5 13.4c0 2.6 1.6 4.6 3.9 4.6 2 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.6 0-.8.1.3-1.6 1.4-2.9 3-3.7zM19 6c-2.8 1.4-4.5 3.9-4.5 7.4 0 2.6 1.6 4.6 3.9 4.6 2 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.6 0-.8.1.3-1.6 1.4-2.9 3-3.7z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  play: <path d="M7 4.8 19 12 7 19.2z" />,
}

export default function Icon({ name, className = 'w-5 h-5', filled = false }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
