import car1 from '../../../../assets/images/car-accident-insurance-safety.jpg'
const Banner = () => {
    return (
      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to Our Website!
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                feugiat massa non suscipit tempor.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
            <img
              className="md:w-1/2 object-cover rounded"
              src={car1}
              alt="Banner"
            />
          </div>
        </div>
      </section>
    );
};

export default Banner;