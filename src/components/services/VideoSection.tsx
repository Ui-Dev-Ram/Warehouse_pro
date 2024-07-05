import React from 'react'

const VideoSection = () => {
  return (
    <div className='main'>
        <video  className="w-full h-[250px]" controls>
            <source src="/videos/video/Bhiwandi.mp4" />
            Your browser does not support the video tag...
        </video>
    </div>
  )
}

export default VideoSection