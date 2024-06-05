import React from "react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    image:
      "https://i.pinimg.com/originals/6e/36/30/6e3630fc4826df073ea136ed74836871.jpg",
    bio: "Jane has over 20 years of experience in the real estate industry and is passionate about helping clients find their dream homes.",
  },
  {
    name: "John Smith",
    role: "Lead Agent",
    image:
      "https://img.freepik.com/free-photo/confident-male-real-estate-agent-broker-business-man-suit-pointing-finger-up-showing-top-advertisement-deal-market-standing-white-background_176420-45261.jpg",
    bio: "John is a top-performing agent known for his dedication and exceptional client service.",
  },
  {
    name: "Alice Johnson",
    role: "Marketing Manager",
    image:
      "https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
    bio: "Alice is responsible for our marketing strategies and ensures that our brand reaches a wide audience.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 text-lg">
            We are a dedicated real estate company committed to helping you find
            your dream home. Our team of experienced professionals is here to
            guide you through every step of the buying or selling process.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of integrity in all of our
                actions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Customer Commitment</h3>
              <p className="text-gray-700">
                We develop relationships that make a positive difference in our
                customers' lives.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We provide outstanding service and deliver premium value to our
                customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
