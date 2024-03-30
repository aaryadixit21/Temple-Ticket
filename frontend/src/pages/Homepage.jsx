import { useState, useEffect } from "react";
import Homepage1 from "../components/homepage1.jpg"; // Import your image files
import Homepage2 from "../components/homepage2.jpg";
import Homepage3 from "../components/homepage3.jpg";
import Homepage4 from "../components/homepage4.jpg";
import Homepage5 from "../components/homepage5.jpg";
import "./Homepage.css"; // Import CSS file for Homepage styles

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

  // Array of image URLs
  const slides = [Homepage1, Homepage2, Homepage3, Homepage4, Homepage5];

  useEffect(() => {
    // Automatically switch to the next slide every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [slides.length]); // Dependency on slides.length to re-run the effect when the number of slides changes

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="text-content">
          <h2 className="title">Shri Ram Mandir</h2>
          <h4 className="subtitle">Birth Place of Lord Ram</h4>
          <p className="paragraph">
            A Hindu temple that is being built in Ayodhya, Uttar Pradesh, India,
            at the site of Ram Janmabhoomi, the birthplace of Lord Ram, a
            principal deity of Hinduism.
          </p>
          <p className="paragraph">
            The temple construction is being supervised by the Shri Ram
            Janmabhoomi Teerth Kshetra. The ground-breaking ceremony was
            performed on 5 August 2020 by India’s prime minister Narendra Modi.
          </p>
        </div>
        <div className="image-content">
          <img src={slides[currentSlide]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
