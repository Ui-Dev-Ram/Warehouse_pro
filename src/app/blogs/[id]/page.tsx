import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Image alt='' src={""} />
        <div className=""></div>
        <h1>{"Blog one"}</h1>
        <p>
           Hello {"this is description"}
        </p>
        <span>
            Published on {" "}
            {"06-08-2024"}
        </span>
    </div>
  )
}

export default page