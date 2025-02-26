import Image from 'next/image';

const ImagesGallery = ({ selectedImage }) => {
  const formattedContent = selectedImage?.content?.replace(/\n/g, '<br />');
  const formattedAdditionalContent = selectedImage?.additionalContent?.replace(/\n/g, '<br />');

  return (
    <div className="max-w-5xl my-6 mx-auto">
      <div className="grid md:grid-cols-[30%_70%] md:gap-2">
        {selectedImage && (
          <>
            <div className="w-full flex justify-center items-center">
              <Image
                src={selectedImage.desktopSrc}
                alt={selectedImage.alt}
                layout="intrinsic"
                width={800}
                height={500}
                className="w-full h-auto max-w-3xl rounded-lg"
              />
            </div>
            <div className="overflow-y-auto flex flex-col items-start justify-center md:mx-6">
              <div className="flex items-center gap-x-4 py-4">
                <span className="w-[2px] h-14 bg-white"></span>
                <p className="text-white text-lg font-semibold">
                  {selectedImage.description}
                </p>
              </div>
              <div className="mt-4 text-blue text-lg break-words hidden md:block">
                <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
                <div dangerouslySetInnerHTML={{ __html: formattedAdditionalContent }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagesGallery;
