import React, { useState, useEffect } from 'react'
import './index.scss' // CSS file for styling
import LogoS from '../../../assets/images/B-pic2.png'
const ImageTransition = () => {
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    setShowImage(true)
  }, [])

  return (
    <div>
      <div className={`image-container ${showImage ? 'show' : ''}`}>
        <img class="solid-logo" src={LogoS} alt="logo" />
      </div>
    </div>
  )
}

export default ImageTransition
