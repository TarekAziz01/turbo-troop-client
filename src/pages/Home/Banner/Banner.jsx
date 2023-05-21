import car1 from '../../../assets/images/car-accident-insurance-safety.jpg'
const Banner = () => {
    return (
      <div className="bg-gray-800 py-8 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 px-3">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Welcome to Turbo Troop
            </h1>
            <p className="mt-4 text-lg text-white">
              We offer a wide selection of toy cars for all ages. Explore our
              collection of high-speed racers, vintage classics, and more.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={car1} alt="Toy Cars" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    );
};

export default Banner;