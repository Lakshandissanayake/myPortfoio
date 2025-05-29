import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import ContactForm from './ContactForm'; 


function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <header>
        <img src="/img/banner.jpg" alt="Profile" className="profile-img" />
      </header>

      <div className="container reveal">
        <section>
          <h2>LAKSHAN DISSANAYAKE</h2>
          <p>Iam adedicatedanddetail-orientedUI/UXdesignerwitha
            strongfoundationinfront-enddevelopmentandapassion
            forcreatinguser-centereddigitalexperiences</p>
        </section>

        <section className="buttons">
          <button className="inster_img">
            <a href="https://www.instagram.com/_hades_ruwinda_/">
              <img src="/img/inster.png" alt="Instagram" className="profile-img" />
            </a>
          </button>
          <button className="git_img">
            <a href="https://github.com/Lakshandissanayake">
              <img src="/img/github.png" alt="GitHub" className="profile-img" />
            </a>
          </button>
          <button className="link_img">
            <a href="https://www.linkedin.com/in/ruwinda-lakshan-3384ab249/">
              <img src="/img/link.png" alt="LinkedIn" className="profile-img" />
            </a>
          </button>
        </section>
      </div>

      <div className='main reveal'>
        
        <div className='left'>
          <img src="/img/Moon3.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className='right'>
          <h2>ABOUT ME</h2>
             <p>I am a dedicated and detail-oriented UI/UX designer with a strong foundation in front-end development and a passion for creating user-centered digital experiences. Currently pursuing a BSc (Hons) in Information Technology at SLIIT, I have hands-on experience in designing intuitive and visually engaging interfaces for both web and mobile platforms. My approach blends creativity with analytical thinking, allowing me to solve complex design challenges while maintaining a focus on usability and aesthetics.</p>
        </div>
      </div>

      <div className='project '>
        <h1>PROJECT</h1>
      </div>

      <div className='project'>
        <div className='project_card'>
          <Link to="/mobile">
            <img src="/img/mobile.png" alt="Mobile Project" className="mobile" />
          </Link>
        </div>

        <div className='project_card'>
          <Link to="/pc">
            <img src="/img/pc.png" alt="PC Project" className="mobile" />
          </Link>
        </div>
      </div>


    <ContactForm/>

    </>
  );
}

export default Home;
