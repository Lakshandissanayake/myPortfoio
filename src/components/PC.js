import { useState, useEffect, useRef } from 'react';
import './project.css';
import videoDemo from '../assets/demo.mp4';

function PC() {
  const images1 = [
    "/img/blogs/home.png",
    "/img/blogs/2.png",
    "/img/blogs/3.png",
    "/img/blogs/4.png"
  ];

  const images2 = [
    "/img/plantcare/HOME.png",
    "/img/plantcare/2.png",
    "/img/plantcare/3.png"
  ];

  const [index1, setIndex1] = useState(0);
  const [hover1, setHover1] = useState(false);
  const ref1 = useRef(null);

  const [index2, setIndex2] = useState(0);
  const [hover2, setHover2] = useState(false);
  const ref2 = useRef(null);

  const delay = 3000;

  useEffect(() => {
    if (!hover1) {
      ref1.current = setTimeout(() => setIndex1((prev) => (prev + 1) % images1.length), delay);
    }
    return () => clearTimeout(ref1.current);
  }, [index1, hover1, images1.length]); // ✅ Added images1.length

  useEffect(() => {
    if (!hover2) {
      ref2.current = setTimeout(() => setIndex2((prev) => (prev + 1) % images2.length), delay);
    }
    return () => clearTimeout(ref2.current);
  }, [index2, hover2, images2.length]); // ✅ Added images2.length

  return (
    <>
      <header>
        <h1>DESKTOP</h1>
      </header>

      <div className="card" style={{ minHeight: '100vh', padding: '20px' }}>
        {/* Slideshow 1 */}
        <div
          className="pc slideshow-container"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <a
            href="https://drive.google.com/drive/folders/1Og2L8kvuBEkTwcpifnQMrgu3RYz9QCRX?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {images1.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide 1 - ${index}`}
                className={`slide ${index === index1 ? 'active' : ''}`}
              />
            ))}
          </a>
          <h1>BLOGS</h1>
          <p>This UI is designed for blog readers to easily browse and read blog posts.</p>
        </div>

        {/* Slideshow 2 */}
        <div
          className="pc slideshow-container"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <a
            href="https://drive.google.com/drive/folders/1732bTDSnaqHFS7Y2ht1VC9OyCvKXLnHA?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {images2.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide 2 - ${index}`}
                className={`slide ${index === index2 ? 'active' : ''}`}
              />
            ))}
          </a>
          <h1>STORY FEATURE</h1>
          <p>This UI is for sharing stories, showing how users post and engage with visual content.</p>
        </div>
      </div>

      <div className="pc video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          style={{ borderRadius: '10px' }}
        >
          <source src={videoDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>PROJECT PIXEL</h1>
        <p>This UI is for sharing Movie browsing, watching commenting webpage.</p>
      </div>
    </>
  );
}

export default PC;
