import NavbarItems from "../../components/Navbar";
import HelpTips from "../../components/HelpTips";
import Carousel from "../../components/Carousel";
import DonationBox from "../../components/DonationBox";
import SearchInput from "../../components/SearchInput";
import CreateProject from "../../components/CreateProject";
import WomanImage from "../../assets/woman.png";
import Videomaker from "../../assets/videomaker.png";
import VideoRecord from "../../assets/videorecord.png";
import RecordedSongs from "../../assets/recordedSongs.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import "./home.sass";

const Home = () => {
  const [userType, setUserType] = useState("artist");
  const [showCreateProject, setShowCreateProject] = useState(false);

  const [showDonationBox, setShowDonationBox] = useState(false);

  const handleDonateClick = () => {
    setShowDonationBox(true);
  };

  const handleCloseDonationBox = () => {
    setShowDonationBox(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "donation-box-overlay") {
      handleCloseDonationBox();
    }
  };

  const toggleCreateProject = () => {
    setShowCreateProject(!showCreateProject);
  };

  const handleBackToProjects = () => {
    setShowCreateProject(false);
  };

  return (
    <div className="homepage-container">
      <NavbarItems activePage="home" />
      <div className="home-items">
        {/* Cabeçalho fixo */}
        <div className="title-buttons">
          {userType === "artist" ? (
            <>
              <div className="title-container-home">Hello, Joana de Sá!</div>
              <div className="button-container">
              <button
                className={`projects-button ${!showCreateProject ? "active" : ""}`}
                onClick={handleBackToProjects}
              >
                Projects
              </button>
              <button
                className={`create-project-button ${showCreateProject ? "active" : ""}`}
                onClick={toggleCreateProject}
              >
                Create Project
              </button>
              </div>
            </>
          ) : (
            <>
              <div className="title-container-home">Hello, Tyler!</div>
              <div className="sub-title-talent-hunter">
                Meet the talents that you're looking for right here.
              </div>
            </>
          )}
        </div>
        <div className="line-home"></div>

        {/* Renderização Condicional do Conteúdo */}
        {!showCreateProject ? (
          <>
            {userType === "artist" ? (
              <>
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
              </>
            ) : (
              <Carousel />
            )}
            <div className="button-container-home">
              <button className="view-all-button">View All</button>
            </div>

            <div className="donations-container">
              <div className="title-container2">Collaborate</div>
              <SearchInput placeholderContent={"Search for a type of project you'd like to donate"} />
              <div className="title-container3">Projects you may like</div>

              <div className="donation-projects">
                <div className="donation-box">
                  <img src={Videomaker} alt="Project" className="donation-image" />
                  <div className="donation-title">Small town concert</div>
                  <div className="donation-description">
                    I'm doing my first concert in my hometown and I need to raise money to build the structure.
                  </div>
                  <div className="collaborators-section">
                    <div className="images-plus-collaborators">
                      <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                    </div>
                    <button className="donate-button" onClick={handleDonateClick}>Donate</button>
                  </div>
                </div>

                <div className="donation-box">
                  <img src={Videomaker} alt="Project" className="donation-image" />
                  <div className="donation-title">Pay dance class</div>
                  <div className="donation-description">
                    I'm doing my first concert in my hometown and I need to raise money to build the structure.
                  </div>
                  <div className="collaborators-section">
                    <div className="images-plus-collaborators">
                      <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                    </div>
                    <button className="donate-button" onClick={handleDonateClick}>Donate</button>
                  </div>
                </div>

                <div className="donation-box">
                  <img src={Videomaker} alt="Project" className="donation-image" />
                  <div className="donation-title">New instrument</div>
                  <div className="donation-description">
                    I'm doing my first concert in my hometown and I need to raise money to build the structure.
                  </div>
                  <div className="collaborators-section">
                    <div className="images-plus-collaborators">
                      <div className="collaborators-images">
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                        <div className="image-container">
                          <img src={Videomaker} alt="Profile" className="profile-image3" />
                        </div>
                      </div>
                      <div className="collaborators-text">+ 10 collaborators</div>
                    </div>
                    <button className="donate-button" onClick={handleDonateClick}>Donate</button>
                  </div>
                </div>
              </div>
            </div>

            {showDonationBox && (
              <div className="donation-box-overlay" onClick={handleOutsideClick}>
                <div className="donation-box-content">
                  <DonationBox onClose={handleCloseDonationBox} />
                </div>
              </div>
            )}
        <div className="button-container-home">
          <button className="view-all-button">View All</button>
        </div>
        </>
         ) : (
          <CreateProject onBackToProjects={handleBackToProjects} />
        )}
      </div>
      <HelpTips />
    </div>
  );
};

export default Home;
