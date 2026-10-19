import { useId } from 'react'

const PALETTES = {
  dslr: { body: '#242b3a', body2: '#141925', lens: '#f5b544', glass: '#090c12', accent: '#ffc866' },
  mirrorless: { body: '#1d2331', body2: '#111621', lens: '#2bb6dd', glass: '#07090e', accent: '#5ad2f5' },
  cinema: { body: '#1b1f29', body2: '#0f1218', lens: '#ff6b6b', glass: '#07090e', accent: '#ff8f8f' },
  drone: { body: '#202636', body2: '#131826', lens: '#5ad2f5', glass: '#07090e', accent: '#5ad2f5' },
  lens: { body: '#1e2331', body2: '#12161f', lens: '#f5b544', glass: '#090c12', accent: '#ffc866' },
  light: { body: '#242b3a', body2: '#141925', lens: '#ffd98a', glass: '#090c12', accent: '#ffd98a' },
  audio: { body: '#212736', body2: '#131826', lens: '#c4cad6', glass: '#090c12', accent: '#c4cad6' },
  monitor: { body: '#1d2230', body2: '#12161f', lens: '#2bb6dd', glass: '#07090e', accent: '#2bb6dd' },
  tripod: { body: '#242a38', body2: '#161b26', lens: '#f5b544', glass: '#090c12', accent: '#f5b544' },
  gimbal: { body: '#202636', body2: '#131826', lens: '#5ad2f5', glass: '#07090e', accent: '#5ad2f5' },
}

function Device({ variant, p }) {
  switch (variant) {
    case 'cinema':
      return (
        <g>
          <path d="M150 72h96a8 8 0 0 1 8 8v8h-112v-8a8 8 0 0 1 8-8z" fill={p.body2} />
          <path d="M166 88h11v18h-11zM219 88h11v18h-11z" fill={p.body2} />
          <rect x="118" y="104" width="150" height="98" rx="10" fill={p.body} />
          <rect x="128" y="114" width="52" height="6" rx="3" fill={p.accent} opacity="0.75" />
          <rect x="128" y="182" width="34" height="5" rx="2.5" fill={p.body2} />
          <rect x="266" y="124" width="26" height="58" rx="6" fill={p.body2} />
          <rect x="288" y="116" width="52" height="74" rx="10" fill={p.body2} />
          <rect x="297" y="124" width="6" height="58" rx="3" fill={p.lens} opacity="0.4" />
          <rect x="338" y="104" width="26" height="98" rx="6" fill={p.body2} />
          <rect x="336" y="120" width="18" height="66" rx="8" fill={p.lens} opacity="0.9" />
          <rect x="340" y="130" width="10" height="46" rx="5" fill={p.glass} opacity="0.9" />
          <rect x="104" y="118" width="14" height="28" rx="5" fill={p.body2} />
          <rect x="90" y="140" width="22" height="48" rx="5" fill={p.body2} />
          <rect x="93" y="143" width="16" height="42" rx="3" fill={p.glass} />
          <circle cx="136" cy="118" r="4.5" fill="#ff4d4d" />
        </g>
      )

    case 'drone':
      return (
        <g>
          <path
            d="M172 124L112 94M228 124l60-30M172 176l-60 30M228 176l60 30"
            stroke={p.body2}
            strokeWidth="11"
            strokeLinecap="round"
          />
          <ellipse cx="104" cy="88" rx="54" ry="9" fill={p.lens} opacity="0.22" />
          <ellipse cx="296" cy="88" rx="54" ry="9" fill={p.lens} opacity="0.22" />
          <ellipse cx="104" cy="212" rx="54" ry="9" fill={p.lens} opacity="0.22" />
          <ellipse cx="296" cy="212" rx="54" ry="9" fill={p.lens} opacity="0.22" />
          <circle cx="104" cy="88" r="7" fill={p.body2} />
          <circle cx="296" cy="88" r="7" fill={p.body2} />
          <circle cx="104" cy="212" r="7" fill={p.body2} />
          <circle cx="296" cy="212" r="7" fill={p.body2} />
          <rect x="166" y="120" width="68" height="62" rx="20" fill={p.body} />
          <rect x="176" y="130" width="48" height="8" rx="4" fill={p.accent} opacity="0.55" />
          <rect x="184" y="184" width="32" height="24" rx="9" fill={p.body2} />
          <circle cx="200" cy="196" r="8" fill={p.glass} />
          <circle cx="200" cy="150" r="4" fill={p.accent} />
        </g>
      )

    case 'lens':
      return (
        <g>
          <rect x="148" y="88" width="104" height="136" rx="14" fill={p.body} />
          <rect x="148" y="108" width="104" height="12" fill={p.body2} />
          <rect x="148" y="150" width="104" height="9" fill={p.body2} />
          <rect x="166" y="196" width="13" height="20" rx="4" fill={p.lens} opacity="0.85" />
          <ellipse cx="200" cy="92" rx="48" ry="13" fill={p.body2} />
          <ellipse cx="200" cy="92" rx="35" ry="8" fill={p.lens} opacity="0.9" />
          <ellipse cx="200" cy="92" rx="22" ry="4.5" fill={p.glass} />
          <ellipse cx="200" cy="222" rx="46" ry="10" fill={p.body2} />
          <rect x="176" y="196" width="48" height="6" rx="3" fill={p.accent} opacity="0.6" />
        </g>
      )

    case 'light':
      return (
        <g>
          <path d="M124 76L86 56v36z" fill={p.body2} />
          <path d="M276 76l38-20v36z" fill={p.body2} />
          <rect x="124" y="70" width="152" height="150" rx="12" fill={p.body} />
          <rect x="136" y="82" width="128" height="126" rx="8" fill={p.lens} opacity="0.92" />
          <rect x="136" y="82" width="128" height="126" rx="8" fill="url(#lightbeam)" />
          <rect x="196" y="220" width="10" height="34" fill={p.body2} />
          <rect x="168" y="250" width="66" height="9" rx="4.5" fill={p.body2} />
          <g stroke={p.lens} strokeWidth="3" strokeLinecap="round" opacity="0.35">
            <path d="M84 120H44" />
            <path d="M316 120h40" />
            <path d="M84 160H44" />
            <path d="M316 160h40" />
          </g>
        </g>
      )

    case 'audio':
      return (
        <g>
          <rect x="92" y="126" width="158" height="36" rx="18" fill={p.body} />
          <rect x="92" y="126" width="58" height="36" rx="18" fill={p.body2} />
          <g stroke={p.body2} strokeWidth="2.5" opacity="0.8">
            <path d="M104 132v24M114 130v28M124 132v24M134 134v20" />
          </g>
          <circle cx="214" cy="144" r="7" fill={p.accent} />
          <rect x="248" y="139" width="78" height="11" rx="5.5" fill={p.body2} />
          <path
            d="M326 145c34 6 40 30 22 52"
            stroke={p.accent}
            strokeWidth="3.5"
            fill="none"
            opacity="0.65"
            strokeLinecap="round"
          />
          <rect x="150" y="178" width="18" height="12" rx="5" fill={p.body2} />
        </g>
      )

    case 'monitor':
      return (
        <g>
          <rect x="108" y="74" width="184" height="124" rx="12" fill={p.body} />
          <rect x="120" y="86" width="160" height="94" rx="5" fill={p.glass} />
          <path
            d="M130 150l16-22 12 34 14-46 14 54 12-30 12 18 14-32"
            stroke={p.lens}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g fill={p.accent} opacity="0.75">
            <rect x="124" y="188" width="16" height="4" rx="2" />
            <rect x="146" y="188" width="10" height="4" rx="2" />
            <rect x="162" y="188" width="22" height="4" rx="2" />
          </g>
          <circle cx="266" cy="190" r="6" fill={p.accent} opacity="0.8" />
          <rect x="186" y="198" width="28" height="34" rx="6" fill={p.body2} />
        </g>
      )

    case 'tripod':
      return (
        <g>
          <rect x="184" y="66" width="32" height="24" rx="6" fill={p.body} />
          <rect x="190" y="58" width="20" height="12" rx="4" fill={p.body2} />
          <rect x="182" y="88" width="36" height="14" rx="6" fill={p.body2} />
          <path
            d="M200 100L146 226M200 100l54 126M200 100v126"
            stroke={p.body2}
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="136" y="222" width="22" height="9" rx="4.5" fill={p.body} />
          <rect x="242" y="222" width="22" height="9" rx="4.5" fill={p.body} />
          <rect x="190" y="222" width="20" height="9" rx="4.5" fill={p.body} />
        </g>
      )

    case 'gimbal':
      return (
        <g>
          <rect x="186" y="198" width="28" height="54" rx="13" fill={p.body2} />
          <rect x="192" y="222" width="16" height="6" rx="3" fill={p.accent} opacity="0.7" />
          <path d="M200 198v-40" stroke={p.body2} strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M200 160l-44 20" stroke={p.body2} strokeWidth="9" strokeLinecap="round" fill="none" />
          <rect x="136" y="118" width="58" height="40" rx="9" fill={p.body} />
          <rect x="144" y="126" width="22" height="6" rx="3" fill={p.accent} opacity="0.55" />
          <circle cx="192" cy="138" r="17" fill={p.body2} />
          <circle cx="192" cy="138" r="11" fill={p.glass} />
          <circle cx="200" cy="160" r="13" fill={p.body} />
          <circle cx="200" cy="160" r="5" fill={p.accent} />
        </g>
      )

    case 'mirrorless':
      return (
        <g>
          <rect x="118" y="98" width="64" height="16" rx="6" fill={p.body2} />
          <rect x="96" y="110" width="182" height="86" rx="15" fill={p.body} />
          <rect x="84" y="118" width="30" height="70" rx="13" fill={p.body2} />
          <circle cx="212" cy="153" r="48" fill={p.body2} />
          <circle cx="212" cy="153" r="40" fill={p.lens} opacity="0.9" />
          <circle cx="212" cy="153" r="28" fill={p.glass} />
          <circle cx="200" cy="141" r="9" fill="#ffffff" opacity="0.25" />
          <circle cx="98" cy="104" r="7" fill={p.accent} />
          <circle cx="258" cy="102" r="4.5" fill="#ff4d4d" />
          <rect x="108" y="124" width="30" height="5" rx="2.5" fill={p.accent} opacity="0.7" />
        </g>
      )

    default:
      return (
        <g>
          <path d="M122 100h80a12 12 0 0 1 12 12v4H110v-4a12 12 0 0 1 12-12z" fill={p.body2} />
          <rect x="86" y="112" width="204" height="90" rx="16" fill={p.body} />
          <rect x="72" y="120" width="34" height="74" rx="14" fill={p.body2} />
          <circle cx="216" cy="157" r="50" fill={p.body2} />
          <circle cx="216" cy="157" r="42" fill={p.lens} opacity="0.92" />
          <circle cx="216" cy="157" r="29" fill={p.glass} />
          <circle cx="203" cy="144" r="9" fill="#ffffff" opacity="0.26" />
          <circle cx="92" cy="106" r="8" fill={p.accent} />
          <circle cx="266" cy="104" r="4.5" fill="#ff4d4d" />
          <rect x="98" y="128" width="30" height="5" rx="2.5" fill={p.accent} opacity="0.7" />
          <rect x="98" y="182" width="46" height="5" rx="2.5" fill={p.body2} />
        </g>
      )
  }
}

export default function CameraArt({ variant = 'dslr', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const p = PALETTES[variant] ?? PALETTES.dslr

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`bg-${uid}`} cx="50%" cy="28%" r="78%">
          <stop offset="0%" stopColor={p.lens} stopOpacity="0.22" />
          <stop offset="55%" stopColor="#12151d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a0c11" />
        </radialGradient>
        <linearGradient id={`lightbeam-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`lightbeam2-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#bg-${uid})`} />
      <circle cx="200" cy="150" r="120" fill="none" stroke={p.lens} strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="200" cy="150" r="150" fill="none" stroke={p.lens} strokeOpacity="0.07" strokeWidth="1" />
      <g fill={p.lens} opacity="0.35">
        <circle cx="56" cy="46" r="2.5" />
        <circle cx="346" cy="60" r="2" />
        <circle cx="72" cy="248" r="2" />
        <circle cx="330" cy="236" r="2.5" />
        <circle cx="300" cy="34" r="1.5" />
        <circle cx="104" cy="264" r="1.5" />
      </g>
      <g transform="translate(0,0)">
        <Device variant={variant} p={p} />
      </g>
    </svg>
  )
}
