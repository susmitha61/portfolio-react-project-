import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          style={{height:"650px",width:"750px"}}
          alt="First slide" >
          </img>
        <Carousel.Caption>
          <h3>Guitar</h3>
          <p>"Not just strings."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.superprof.co.in/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          style={{height:"650px",width:"750px"}}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Guitar</h3>
          <p>"Just an emotion."-Susmitha</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/man-s-hands-playing-acoustic-guitar-close-up_39131-243.jpg?w=360"
          style={{height:"650px",width:"750px"}}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Guitar</h3>
          <p>
          “Play from heart.” –Chopin
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
 
export default UncontrolledExample;