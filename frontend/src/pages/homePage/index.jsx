import NavbarItems from "../../components/Navbar";
import HelpTips from "../../components/HelpTips";
import SearchInput from "../../components/SearchInput";
import WomanImage from "../../assets/woman.png";
import Singer from "../../assets/singer.jpg";
import Dancer from "../../assets/dancer2.jpg";
import Guitarist from "../../assets/guitarist.jpg";
import Grid from "../../assets/gridImages2.png";
import Grid2 from "../../assets/gridImages3.png";
import Grid3 from "../../assets/gridImages4.png";
import Videomaker from "../../assets/videomaker.png";
import VideoRecord from "../../assets/videorecord.png";
import RecordedSongs from "../../assets/recordedSongs.png";
import "./home.sass";

const Home = () => {
  return (
    <div className="homepage-container">
      <NavbarItems />
      <div className="home-items">
        <div className="title-buttons">
          <div className="title-container-home">Hello, Joana de Sá!</div>
          <div className="button-container">
            <button className="projects-button">Projects</button>
            <button className="create-project-button">Create Project</button>
          </div>
        </div>
        <div className="line-home"></div>
        <div className="title-container2">My projects</div>
        <section className="projects-container">
          
          <div className="project-box">
            <div className="project-image">
              <img src={WomanImage} alt="Profile" className="profile-image2" />
            </div>
            <div className="project-details">
              <div className="project-title">My first EP</div>
              <div className="project-description">
                Lorem ipsum dolor sit amet consectetur. Vel justo egestas ac fringilla nulla egestas. Semper consequat laoreet blandit vitae.
              </div>
              <div className="progress-plus-buttons">
                  <div className="progress-content">
                  <div className="project-progress">
                <div className="progress-label">Progress:</div>
                <div className="progress-bar">
                  <div className="progress-filled"></div>
                </div>
              </div>
              <div className="progress-percentage">30%</div>
              </div>
              <div className="project-buttons">
                <button className="finish-button">Finish</button>
                <button className="see-more-button">See More</button>
              </div>
              </div>
            </div>
          </div>

          <div className="project-box">
            <div className="project-image">
              <img src={Videomaker} alt="Profile" className="profile-image2" />
            </div>
            <div className="project-details">
              <div className="project-title">Pay videomaker</div>
              <div className="project-description">
                Lorem ipsum dolor sit amet consectetur. Vel justo egestas ac fringilla nulla egestas. Semper consequat laoreet blandit vitae.
              </div>
              <div className="progress-plus-buttons">
                  <div className="progress-content">
                  <div className="project-progress">
                <div className="progress-label">Progress:</div>
                <div className="progress-bar">
                  <div className="progress-filled"></div>
                </div>
              </div>
              <div className="progress-percentage">30%</div>
              </div>
              <div className="project-buttons">
                <button className="finish-button">Finish</button>
                <button className="see-more-button">See More</button>
              </div>
              </div>
            </div>
          </div>

          <div className="project-box">
            <div className="project-image">
              <img src={VideoRecord} alt="Profile" className="profile-image2" />
            </div>
            <div className="project-details">
              <div className="project-title">Video record</div>
              <div className="project-description">
                Lorem ipsum dolor sit amet consectetur. Vel justo egestas ac fringilla nulla egestas. Semper consequat laoreet blandit vitae.
              </div>
              <div className="progress-plus-buttons">
                  <div className="progress-content">
                  <div className="project-progress">
                <div className="progress-label">Progress:</div>
                <div className="progress-bar">
                  <div className="progress-filled2"></div>
                </div>
              </div>
              <div className="progress-percentage">70%</div>
              </div>
              <div className="project-buttons">
                <button className="finish-button">Finish</button>
                <button className="see-more-button">See More</button>
              </div>
              </div>
            </div>
          </div>

          <div className="project-box">
            <div className="project-image">
              <img src={RecordedSongs} alt="Profile" className="profile-image2" />
            </div>
            <div className="project-details">
              <div className="project-title">Record songs for my EP</div>
              <div className="project-description">
                Lorem ipsum dolor sit amet consectetur. Vel justo egestas ac fringilla nulla egestas. Semper consequat laoreet blandit vitae.
              </div>
              <div className="progress-plus-buttons">
                  <div className="progress-content">
                  <div className="project-progress">
                <div className="progress-label">Progress:</div>
                <div className="progress-bar">
                  <div className="progress-filled2"></div>
                </div>
              </div>
              <div className="progress-percentage">70%</div>
              </div>
              <div className="project-buttons">
                <button className="finish-button">Finish</button>
                <button className="see-more-button">See More</button>
              </div>
              </div>
            </div>
          </div>
        </section>

        <div className="button-container-home">
          <button className="view-all-button">View All</button>
        </div>

        <div className="donations-container">
          <div className="title-container2">Collaborate</div>
          <SearchInput placeholderContent={"Search for a type of project you'd like to donate"} />
          <div className="title-container3">Projects you may like</div>

          <div className="donation-projects">
            <div className="donation-box">
              <img src={Singer} alt="Project" className="donation-image" />
              <div className="donation-title">Small town concert</div>
              <div className="donation-description">
                I'm doing my first concert in my hometown and I need to raise money to build the structure.
              </div>
              <div className="collaborators-section">
                    <div className="images-plus-collaborators">
                        <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Grid} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid2} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid3} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                    </div>
                <button className="donate-button">Donate</button>
              </div>
            </div>

            <div className="donation-box">
              <img src={Dancer} alt="Project" className="donation-image" />
              <div className="donation-title">Pay dance class</div>
              <div className="donation-description">
                I'm doing my first concert in my hometown and I need to raise money to build the structure.
              </div>
              <div className="collaborators-section">
                  <div className="images-plus-collaborators">
                      <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Grid} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid2} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid3} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                  </div>
                <button className="donate-button">Donate</button>
              </div>
            </div>

            <div className="donation-box">
              <img src={Guitarist} alt="Project" className="donation-image" />
              <div className="donation-title">New instrument</div>
              <div className="donation-description">
                I'm doing my first concert in my hometown and I need to raise money to build the structure.
              </div>
              <div className="collaborators-section">
                  <div className="images-plus-collaborators">
                      <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Grid} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid2} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Grid3} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                  </div>
                <button className="donate-button">Donate</button>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container-home">
          <button className="view-all-button">View All</button>
        </div>
      </div>
      <HelpTips/>
    </div>
  );
};

export default Home;
