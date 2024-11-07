import OpenSeadragonViewer from "./components/openseaLib";
const App = () => {

  return(
    <>
      <header>
        <div className="header-container">
          <h1 className="project-name">Braj Museum</h1>
          <div className="social-icons">
            <a href="https://github.com/gouravsharma-00/Braj-Museum" target="_blank" className="icon-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/YourInstagramProfile" target="_blank" className="icon-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>
      <OpenSeadragonViewer />
      <footer>
        <div className="footer-container">
          <div className="quote">
            <p>"Set thy heart upon thy work, but never on its reward." – Shri Krishna</p>
          </div>
          <div className="team-info">
            <p>Project by:</p>
            <ul>
              <li>Gantavya Bansal</li>
              <li>Gourav Sharma</li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://github.com/YourGithubProfile" target="_blank" className="icon-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/YourInstagramProfile" target="_blank" className="icon-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>

    </>
  )
  
}

export default App;