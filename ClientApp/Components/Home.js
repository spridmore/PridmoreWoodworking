import React from "react";
import Helmet from "react-Helmet";
// import { PushSpinner } from "react-spinners-kit";


class Home extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    const t = document.createElement('script');
    t.type = 'text/javascript';
    t.src = "Carousel.js";
    document.body.appendChild(t);
    // this.instance.appendChild(s);
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "CarouselPage.js";
    document.body.appendChild(s);

  }


  render() {

    return (
      <div>
        {/* <Helmet>
          <script type="text/javascript" src="Carousel.js"></script>
          <script type="text/javascript" src="CarouselPage.js"></script>
        </Helmet> */}
        <div id="wrapper">
          <div id="carousel">
            <div className="empty" />
            <div>
              <img src="./Assets/table.jpg" width="554" height="313" />
              <img src="./Assets/table-grey.jpg" width="554" height="313" />
              {/* <span>This is some wood</span> */}
            </div>
            <div >
              <img src="./Assets/white cabinets.jpg" width="554" height="313" />
              <img src="./Assets/white cabinets-grey.jpg" width="554" height="313" />
              {/* <span>Different wood</span> */}
            </div>
            <div>
              <img src="./Assets/suitCase.jpg" width="554" height="313" />
              <img src="./Assets/suitCase-grey.jpg" width="554" height="313" />
              {/* <span>This is some wood</span> */}
            </div>
            <div>
              {/* <img src="./Assets/pic1.jpg" width="554" height="313" /> */}
              <img src="./Assets/pic1-gre.jpg" width="554" height="313" />
              {/* <span>This is some wood</span> */}
            </div>

            {/* <div style="background-color: #cde;">
              <img src="img/monsters.jpg" width="554" height="313" />
              <img src="img/monsters-grey.jpg" width="554" height="313" />
              <span>Monsters, Inc.</span>
            </div>
            <div style="background-color: #eec;">
              <img src="img/rat.jpg" width="554" height="313" />
              <img src="img/rat-grey.jpg" width="554" height="313" />
              <span>Ratatouille</span>
            </div>
            <div style="background-color: #ced;">
              <img src="img/toystory.jpg" width="554" height="313" />
              <img src="img/toystory-grey.jpg" width="554" height="313" />
              <span>Toy Story</span>
            </div>
            <div style="background-color: #cce;">
              <img src="img/walle.jpg" width="554" height="313" />
              <img src="img/walle-grey.jpg" width="554" height="313" />
              <span>WALL-E</span>
            </div> */}
            {/* <div className="empty" /> */}
          </div>
          <a id="prev" href="#"></a>
          <a id="next" href="#"></a>
        </div>
      </div>
    );
  }
}

export default Home;
