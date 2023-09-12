import React from 'react'

export default function SvgComponentRain(props) {
  return (
    <svg
      data-name="Layer 1"
      width="25"
      height="25"
      id="Layer_1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#0baeff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
          }
        </style>
        <linearGradient
          gradientTransform="matrix(-1 0 0 1 -82.03 0)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient"
          x1={-101.28}
          x2={-122.37}
          y1={46.39}
          y2={19.08}
        >
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={1} stopColor="#cfcfcf" />
        </linearGradient>
        <linearGradient
          gradientTransform="matrix(0 -1 -1 0 137.46 -102.8)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient-2"
          x1={-137.98}
          x2={-126.37}
          y1={85.19}
          y2={102.84}
        >
          <stop offset={0.02} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path className="cls-1" d="M32.5 50.5L32.5 51.5" />
      <path className="cls-1" d="M26.5 48.5L26.5 49.5" />
      <path className="cls-1" d="M38.5 48.5L38.5 49.5" />
      <path className="cls-1" d="M38.5 54.5L38.5 55.5" />
      <path className="cls-1" d="M26.5 54.5L26.5 55.5" />
      <path className="cls-1" d="M32.5 56.5L32.5 57.5" />
      <path
        d="M23.66 9.9a17.49 17.49 0 0115.47 9.32A13.75 13.75 0 1146 44.84l-22.39.06a17.5 17.5 0 010-35z"
        fill="url(#linear-gradient)"
      />
      <circle
        cx={46.05}
        cy={31.09}
        r={13.75}
        transform="rotate(-74.39 46.055 31.09)"
        fill="url(#linear-gradient-2)"
      />
    </svg>
  )
}
