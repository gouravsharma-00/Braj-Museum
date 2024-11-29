// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Footer.css';
import Gan from '/src/components/vnkeg.jpg';
import Gou from '/src/components/photo.jfif.jpg';
// import gou from '../public/vnkeg.jpg';
import '../styles/Footer.css';
const contributors = () => {
    return (
        <section id="about-us">
        <h1>About Us</h1>
        <div className="team-members">
            <div className="team-member">
                <img src={Gan} alt="Team member 1"/>
                <h2>Gantavya Bansal</h2>
                <p></p>
                    <h3>About the Developer ✨</h3>
                <p>
                🏆 A top-tier coder and debugger, turning caffeine into code and teaching OOP to plants 🌿. Certified in WebDev MERN Stack by Meta, APIs, and AI, ready to make the web smarter.
                 🛠️Reach out at <a href = "mailto:gantavyaoo@gmail.com?&subject=Reach | from:merobraj.org&body= Write your email here.">gantavyaoo@gmail.com</a>.
                <br></br> 👨‍💻 Linkedin: <a href = "https://in.linkedin.com/in/gantavya-bansal">gantavya-bansal</a>  👨 <br></br>
                🔧  GitHub: <a href = "https://github.com/stubanx">StuBanX</a> 🌍
</p>
              </div>
              <div className="team-member">
                  <img src={Gou} alt="Team member 2"/>
                  {/* <Gan/> */}
                  <h2>Gourav Sharma</h2>
                  <p></p>
                  <h3>About the Developer</h3>
                  <p>Hi, I’m Gourav Sharma, a passionate web developer specializing in the MERN stack.  
I love crafting seamless web applications and building innovative solutions for modern challenges. <br></br> 
Check out my work on GitHub:<a href = "https://github.com/gouravsharma-00">gouravsharma-00</a>.</p>
              </div>
      </div>
  </section>
    )
}

export default contributors;
