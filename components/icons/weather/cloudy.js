import React from 'react'

export default function Cloudy(props) {
  return (
    <svg
      data-name="Layer 1"
      id="Layer_1"
      width="150"
      height="150"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-2{fill:none;stroke:#efcc00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
          }
        </style>
        <linearGradient
          gradientTransform="matrix(-1 0 0 1 65.8 0)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient"
          x1={46.72}
          x2={25.63}
          y1={58.39}
          y2={31.08}
        >
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={1} stopColor="#cfcfcf" />
        </linearGradient>
        <linearGradient
          gradientTransform="matrix(0 -1 -1 0 109.04 59.43)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient-2"
          x1={12.25}
          x2={23.86}
          y1={56.93}
          y2={74.58}
        >
          <stop offset={0.02} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={39.8} cy={28} r={12.59} fill="#efcc00" />
      <path className="cls-2" d="M39.8 8L39.8 12.44" />
      <path className="cls-2" d="M39.8 43.56L39.8 48" />
      <path className="cls-2" d="M19.8 28L24.25 28" />
      <path className="cls-2" d="M55.36 28L59.8 28" />
      <path className="cls-2" d="M25.66 13.86L28.8 17" />
      <path className="cls-2" d="M50.8 39L53.94 42.14" />
      <path className="cls-2" d="M25.66 42.14L28.8 39" />
      <path className="cls-2" d="M50.8 17L53.94 13.86" />
      <path
        d="M23.5 21.9A17.49 17.49 0 0139 31.22a13.75 13.75 0 116.92 25.62l-22.42.06a17.5 17.5 0 010-35z"
        fill="url(#linear-gradient)"
      />
      <circle
        cx={45.89}
        cy={43.09}
        r={13.75}
        transform="rotate(-74.39 45.888 43.09)"
        fill="url(#linear-gradient-2)"
      />
    </svg>
  )
}
