import React from "react";
import "./index.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with a unique interdisciplinary
          background combining computer science, neuroscience, and business. I
          enjoy building innovative solutions that solve real-world problems and
          have experience across the full development lifecycle from conception
          to deployment.
        </p>

        <div className="about-details">
          <div className="about-card background-card">
            <h3>Background</h3>
            <div className="card-content">
              <div className="education-item">
                <div className="education-icon">🎓</div>
                <div className="education-details">
                  <h4>Northeastern University</h4>
                  <p>
                    <strong>Bachelor's of Science</strong>
                  </p>
                  <ul>
                    <li>Computer Science</li>
                    <li>Behavioral Neuroscience</li>
                    <li>Minor: Business Administration</li>
                  </ul>
                </div>
              </div>
              <div className="background-description">
                <p>
                  This unique interdisciplinary combination gives me both
                  technical expertise and an understanding of human behavior and
                  business needs, allowing me to create user-centered solutions
                  that drive real impact.
                </p>
              </div>
            </div>
          </div>

          <div className="about-card skills-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                      alt="Python"
                    />
                    <span>Python</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                    />
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                    />
                    <span>TypeScript</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                      alt="Java"
                    />
                    <span>Java</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
                      alt="R"
                    />
                    <span>R</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                      alt="SQL"
                    />
                    <span>SQL</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Cloud & DevOps</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
                      alt="Google Cloud"
                    />
                    <span>GCP</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                      alt="Docker"
                    />
                    <span>Docker</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                      alt="Git"
                    />
                    <span>Git</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Data Analytics</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <img
                      src="https://img.icons8.com/color/48/tableau-software.png"
                      alt="Tableau"
                    />
                    <span>Tableau</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://img.icons8.com/fluency/48/microsoft-excel-2019.png"
                      alt="Excel"
                    />
                    <span>Excel</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                      alt="Pandas"
                    />
                    <span>Pandas</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                      alt="NumPy"
                    />
                    <span>NumPy</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
                      alt="Matplotlib"
                    />
                    <span>Matplotlib</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
                      alt="Seaborn"
                    />
                    <span>Seaborn</span>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Libraries & Frameworks</h4>
                <div className="skill-icons">
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React"
                    />
                    <span>React</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                    />
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
                      alt="FastAPI"
                    />
                    <span>FastAPI</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                      alt="PyTorch"
                    />
                    <span>PyTorch</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
                      alt="TensorFlow"
                    />
                    <span>TensorFlow</span>
                  </div>
                  <div className="skill-item">
                    <img
                      src="https://python.langchain.com/img/brand/wordmark.png"
                      alt="Langchain"
                    />
                    <span>Langchain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card interests-card">
            <h3>Interests</h3>
            <div className="card-content">
              <div className="interests-grid">
                <div className="interest-item">
                  <div className="interest-icon">📊</div>
                  <h4>Data Analysis and Visualization</h4>
                  <p>
                    Turning datasets into actionable insights using Python,
                    Excel, and Tableau
                  </p>
                </div>
                <div className="interest-item">
                  <div className="interest-icon">🤖</div>
                  <h4>AI and Machine Learning</h4>
                  <p>
                    Exploring applications of deep learning and generative AI in
                    automation and decision-making
                  </p>
                </div>
                <div className="interest-item">
                  <div className="interest-icon">🔬</div>
                  <h4>Tech and Health Innovation</h4>
                  <p>
                    Applying data and software to improve healthcare and patient
                    outcomes
                  </p>
                </div>
                <div className="interest-item">
                  <div className="interest-icon">☁️</div>
                  <h4>Cloud and DevOps</h4>
                  <p>Interest in cloud architecture and automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
