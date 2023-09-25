import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Icon() {
  return (
    <>
      <div>test</div>
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fas', 'cart-shopping']} />
    </>
  )
}
