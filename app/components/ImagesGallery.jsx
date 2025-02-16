import Image from 'next/image';
import {travels} from '../constants/travels'

const ImagesGallery = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-6">
      <div className="overflow-x-auto">
        <div className="flex gap-6">
          {travels.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full md:w-1/3 group ">
              <Image
                src={image.desktopSrc}
                alt={image.alt}
                width={1920}
                height={1080}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius:'20px',
                }}
                placeholder="blur"
                priority
              />
              <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[1px] flex justify-center items-center">
                <p className="text-lg text-center text-white px-4 font-semibold ">{image.title}</p>
              </div>
              <div className="rounded-2xl absolute inset-0 flex justify-center items-center bg-seafoam text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg text-center px-4 ">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesGallery;
