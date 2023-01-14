import React from 'react'

type Props = {}

const Galery = (props: Props) => {
  return (
    <>
    <section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://static.dw.com/image/44405977_905.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://media.istockphoto.com/id/1067276766/photo/catfish.jpg?s=612x612&w=0&k=20&c=7P9cJO4yCxmzAvPNB3GexNCJMduyrdi8uIi0ijy3JFU=" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://media.istockphoto.com/id/1368759649/photo/group-of-african-sharptooth-catfish.jpg?s=612x612&w=0&k=20&c=2lbMYvjTu_nIXuLvkLumWmlLab9qWTdr8foA2CQ_Ink=" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Galery