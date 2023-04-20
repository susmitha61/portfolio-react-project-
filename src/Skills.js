import './Skill.css';
import meter1 from "./assets/img/Meter1.svg";
import meter2 from "./assets/img/Meter2.svg";
import meter3 from "./assets/img/Meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./assets/img/Colorsharp2.png";
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>
                            Skills
                        </h2>
                        <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                    <Carousel responsive={responsive} infinite ={true} className="owl-carousel owl-theme skill-slider">
                    <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>PHOTOGRAPHY</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image"/>
                        <h5>WEB DEVELOPMENT</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="Image" />
                        <h5>PLANNING</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>DESIGNING</h5>
                    </div>
                    </Carousel>
                    </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}
export default Skills;