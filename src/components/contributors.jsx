// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Footer.css';
import Gan from '/src/components/vnkeg.jpg';
import Gou from '/src/components/photo.jfif.jpg';
import adi from '/src/components/aditiya.jpg';
// import gou from '../public/vnkeg.jpg';
import '../styles/Footer.css';
const contributors = () => {
    return (
        <section id="about-us">
  <h2>About Us</h2>
  <div className='container'>

  Welcome to our platform, the heart of Braj culture and spirituality. Our mission is to celebrate and propagate the rich cultural heritage of Braj, the sacred land of Lord Krishna and Radharani. Through our initiatives, we aim to bring the teachings of the Bhagavad Gita to the forefront, offering profound insights into the meaning of life and practical solutions to everyday challenges.

<h3>Our Vision</h3>
Our vision is to make the essence of Braj accessible to everyone, irrespective of their physical location. We are developing a virtual Braj museum, enabling devotees and enthusiasts to experience the divine darshan of Braj's sacred places from the comfort of their homes.

<h3>Key Features</h3>
<b>Virtual Braj Museum:</b> Explore the sacred sites of Braj virtually, with detailed visual and audio guides to enhance your experience.
<b>E-Bajar:</b> Support our mission by shopping on our online platform. Your purchases help sustain our cultural and educational initiatives.
<b>Braj Manthan:</b> Join us for this special event that showcases the legacy of Braj. Participate in the preservation and archiving of rare manuscripts, artifacts, and traditional knowledge held in the homes and libraries of Braj.
<h3>Support Us</h3>
Our mission thrives on the support and generosity of patrons like you. By contributing to our cause, you help us preserve and promote the invaluable heritage of Braj. Together, we can build a sustainable model that enriches the social, cultural, and economic fabric of Braj.

Join us in our journey to keep the spirit of Braj alive and flourishing for generations to come.
  </div>
  <div className="team-members">
    <div className="team-member">
      <img src={Gan} alt="Team member 1" />
      <h3>Gantavya Bansal</h3>
      <h3>About the Developer</h3>
      <p>
        🏆 A top-tier coder and debugger, turning caffeine into code and teaching OOP to plants 🌿. Certified in WebDev MERN Stack by Meta, APIs, and AI, ready to make the web smarter.
        <br/>🛠️Reach out at <a href="mailto:gantavyaoo@gmail.com?&subject=Reach | from:merobraj.org&body= Write your email here.">gantavyaoo@gmail.com</a>.
        <br /> 👨‍💻 LinkedIn: <a href="https://in.linkedin.com/in/gantavya-bansal">gantavya-bansal</a>  👨 <br />
        🔧  GitHub: <a href="https://github.com/stubanx">StuBanX</a> 🌍
      </p>
    </div>
    <div className="team-member">
      <img src={Gou} alt="Team member 2" />
      <h3>Gourav Sharma</h3>
      <h3>About the Developer</h3>
      <p>
        Hi, I’m Gourav Sharma, a passionate web developer specializing in the MERN stack.
        I love crafting seamless web applications and building innovative solutions for modern challenges. <br /><br /><br />
        Check out my work on GitHub:<a href="https://github.com/gouravsharma-00">gouravsharma-00</a>.
      </p>
    </div>
 
  </div>
</section>

    )
}

export default contributors;
