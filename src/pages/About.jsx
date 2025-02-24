import "../index.css"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900">About Us</h1>
      <p className="text-gray-700 text-center mt-2">
        Welcome to <span className="font-semibold">Country Facts</span>, your go-to source for discovering interesting facts about different countries worldwide.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          Our mission is to provide users with **accurate and fascinating** information about different countries. Whether you're a student, traveler, or curious explorer, we aim to help you learn about diverse cultures, histories, and geographical wonders.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Up-to-date and verified country facts</li>
          <li>Easy-to-use interface with real-time data</li>
          <li>Engaging and educational content</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
        <p className="text-gray-700 mt-2">
          Have questions or suggestions? <br />
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
