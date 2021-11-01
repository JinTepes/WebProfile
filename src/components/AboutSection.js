//importing style
import dStyle from '../layouts/AboutSectionStyle.module.css';
//importing logos
import html5logo from '../imgs/html5logo.png';
import css3logo from '../imgs/css3logo.png';
import pythonlogo from '../imgs/pythonlogo.png';
import reactlogo from '../imgs/reactlogo.png';
import jslogo from '../imgs/jslogo.png';
import pslogo from '../imgs/pslogo.png';
import premierprologo from '../imgs/premierprologo.png';
import linuxlogo from '../imgs/linuxlogo.png';
import gitlogo from '../imgs/gitlogo.png';
import githublogo from '../imgs/githublogo.png';

function AboutSection() {
  return (
    <section className={dStyle.parent} id='aboutSection'>
      <h1 style={{ fontSize: '50px' }}>About Me</h1>
      <div className={dStyle.educParent}>
        <h1>Education</h1>
        <div className={dStyle.educitemholder}>
          <div className={dStyle.educitem}>
            <h2>
              Bachelor of Science in Electronics Engineering - 2019
              <br />
              <span style={{ fontSize: '15px' }}>
                Xavier University Ateneo de Cagayan
              </span>
            </h2>
          </div>

          <div className={dStyle.educitem}>
            <h2>
              Google IT Automation with Python
              <br />
              <span style={{ fontSize: '15px' }}>
                <a
                  href='https://coursera.org/share/39f9bd9fc41223766a39c090bba7942c'
                  target='blank'
                >
                  View Certificate
                </a>
              </span>
            </h2>
          </div>

          <div className={dStyle.educitem}>
            <h2>
              Digital Media and Marketing Principles
              <br />
              <span style={{ fontSize: '15px' }}>
                <a
                  href='https://coursera.org/share/ed21d79b36f4a4ba2f54d3efa0332085'
                  target='blank'
                >
                  View Certificate
                </a>
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className={dStyle.educParent} style={{ marginTop: '20px' }}>
        <h1>Skills</h1>
        <div className={dStyle.skillholder}>
          <div className={dStyle.progHolder}>
            <h2>Programming</h2>
            <div className={dStyle.iconHolder}>
              <img
                className={dStyle.skillitem}
                src={html5logo}
                alt='html5logo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={css3logo}
                alt='css3logo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={pythonlogo}
                alt='pythonlogo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={reactlogo}
                alt='reactlogo'
              ></img>
              <img className={dStyle.skillitem} src={jslogo} alt='jslogo'></img>
            </div>
          </div>
          <div className={dStyle.progHolder}>
            <h2>Misc</h2>
            <div className={dStyle.skillholder}>
              <img className={dStyle.skillitem} src={pslogo} alt='pslogo'></img>
              <img
                className={dStyle.skillitem}
                src={premierprologo}
                alt='premierprologo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={linuxlogo}
                alt='linuxlogo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={gitlogo}
                alt='gitlogo'
              ></img>
              <img
                className={dStyle.skillitem}
                src={githublogo}
                alt='gitlogo'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
