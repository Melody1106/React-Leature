import React from 'react'

export default function SvgComponentRain(props) {
  return (
    <svg
      data-name="Layer 1"
      id="Layer_1"
      width="25"
      height="25"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1,.cls-2{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}.cls-1{stroke:#a5a9aa}.cls-2{stroke:#b9c1c6}'
          }
        </style>
      </defs>
      <path
        className="cls-1"
        d="M9.5 40.5h26.67a5.5 5.5 0 015.5 5.5 5.5 5.5 0 01-5.5 5.5M41.5 16.5A3.5 3.5 0 0145 20a3.5 3.5 0 01-3.5 3.5h-32"
      />
      <path
        className="cls-2"
        d="M40.5 32.5H53a2.67 2.67 0 012.67 2.67A2.67 2.67 0 0153 37.83"
      />
      <path className="cls-1" d="M26.5 32.5L34.5 32.5" />
      <path className="cls-2" d="M9.5 32.5L20.5 32.5" />
    </svg>
  )
}
