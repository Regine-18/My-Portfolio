import Image from 'next/image';
import sagada from '../public/images/travelImages/IMG_05981.png'
//import ilocosNorte from '../public/images/travelImages/saud.jpg'
import baguio from '../public/images/travelImages/IMG_4785.png'
import tagaytay from '../public/images/travelImages/IMG_20220620_163735.jpg'


const images = [
  {
    desktopSrc: sagada,
    alt: 'Sagada 2023',
    title: 'Sagada 2023',
    description: 'Bold brews, cave climbs, and perfect food fixes. A true taste of adventure!',
  },
  /*{
    desktopSrc: ilocosNorte,
    alt: 'Ilocos Norte 2023',
    title: 'Ilocos Norte 2023',
    description: 'Falling in love with Ilocos Norte’s beauty - from the lush green grass to the breathtaking sunsets and majestic mountains',
  },*/
  {
    desktopSrc: baguio,
    alt: 'Baguio 2022',
    title: 'Baguio 2022',
    description: 'Exploring Baguio: Cool breeze, scenic views, and unforgettable moments',
  },
  {
    desktopSrc: tagaytay,
    alt: 'Tagaytay 2022',
    title: 'Tagaytay 2022',
    description: 'Strolling to the coffee shop in Tagaytay, savoring the morning breeze and Taal’s breathtaking view',
  },
];

const ImagesGallery = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-6">
      <div className="overflow-x-auto">
        <div className="flex gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full md:w-1/3 group">
              <Image
                layout="responsive" // This will make the image responsive
                src={image.desktopSrc}
                alt={image.alt}
                width={1920}
                height={1080}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                placeholder="blur"
                priority
              />

              {/* Overlay with background and text */}
              <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[3px] flex justify-center items-center">
                <p className="text-lg text-center text-white px-4 font-semibold ">{image.title}</p>
              </div>

              {/* Description (visible on hover) */}
              <div className="absolute inset-0 flex justify-center items-center bg-seafoam text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
