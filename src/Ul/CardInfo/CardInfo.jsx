export const CardInfo = ({ title, images, content }) => {
    return (
        <div className="w-11/12 sm:w-64 md:w-72 lg:w-96 xl:w-[400px] rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transition-all duration-300 ease-in-out">
  
          <div className="px-6 py-4">
            <h2 className="font-semibold text-xl text-gray-800 truncate flex justify-center items-center ">{title}</h2>
          </div>
  
          <div className=" flex justify-center">
            {images && images.map((img, index) => (

                <img
                key={index}
                src={img}
                alt= {`imagen ${index + 1}`}
                className="w-70 h-75 rounded-lg"
                />
            ))}
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-600 text-base h-auto">{content}</p>
          </div>

  
        </div>
    );
  };