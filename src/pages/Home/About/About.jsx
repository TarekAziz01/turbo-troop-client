import img from "../../../assets/images/about.png"

const About = () => {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Turbo Troop
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={img}
                alt="About Turbo Troop"
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Turbo Troop is a comprehensive online learning platform that
                aims to empower web developers and designers by providing them
                with top-notch resources and a supportive community.
              </p>
              <p className="text-lg">
                Our mission is to help individuals of all skill levels enhance
                their technical capabilities and unleash their creative
                potential. With a vast library of courses, tutorials, and
                interactive projects, Turbo Troop equips learners with the
                latest tools and techniques to build modern and responsive
                websites and applications.
              </p>
              <p className="text-lg">
                Join Turbo Troop today and embark on an exciting journey of
                continuous learning, collaboration, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;