import bgImage from '../assets/bg.png';
import './project.css';
function Mobile() {

  





return (
    <>
    
    <header>
<h1>MOBILE</h1>
    </header>
<div className='card'
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  }}>
    <div className='project_card1'>
    
          <a
  href="https://drive.google.com/drive/folders/1lvBEycz_YGKuquwf8NYFnOAtMBLlSOVP?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/img/story/main.png" alt="Instagram" className="profile-img" />
</a>

   <div>
      <p><h1>STORIES</h1>This is a playful and engaging mobile UI designed for a Kids Story App. It offers two main features — Read Story and Listen to Story — allowing children to enjoy stories through interactive reading or immersive audio narration. The interface is colorful, easy to navigate, and tailored to young users, ensuring a fun and educational storytelling experience.</p>
   
   
      <img src="/img/story/2.png" alt="Instagram" className="little" />
      <img src="/img/story/3.png" alt="Instagram" className="little" />
      <img src="/img/story/4.png" alt="Instagram" className="little" />
      <img src="/img/story/5.png" alt="Instagram" className="little" />
    </div>
   
    </div>

    <div className='project_card1'>
             <a
  href="https://drive.google.com/drive/folders/1551NAmkSqde1im8mk_PkwHxW6A-KWxxT?usp=sharing
"
  target="_blank"
  rel="noopener noreferrer"
>
          <img src="/img/mamo/main.png" alt="Instagram" className="profile-img" />
   </a>
   <div>
     <p><h1>MEMO TRAVELS</h1>This is a playful and engaging mobile UI designed for a Kids Story App. It offers two main features — Read Story and Listen to Story — allowing children to enjoy stories through interactive reading or immersive audio narration. The interface is colorful, easy to navigate, and tailored to young users, ensuring a fun and educational storytelling experience.</p>
  <img src="/img/mamo/2.png" alt="Instagram" className="little" />
      <img src="/img/mamo/3.png" alt="Instagram" className="little" />
      <img src="/img/mamo/4.png" alt="Instagram" className="little" />
      <img src="/img/mamo/5.png" alt="Instagram" className="little" />
  
  </div>
        </div>
  
  
     
</div>
    </>
  );
}
export default Mobile;
