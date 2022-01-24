import React from "react";

import home1png from "../../images/home1.svg";
import firstWave from "../../images/wave1.png";
import farnichar from "../../images/farnichar.svg";
import sanitizer from "../../images/sanitizer.png";
import security from "../../images/security1.svg";
import wifi from "../../images/wifi.svg";
import breakfast from "../../images/breakfast.svg";
import water from "../../images/water.svg";
import whyChooseUs from "../../images/whyChooceUs.svg";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import "./home.css";

const Home = () => {
  const cardData = [
    {
      image: farnichar,
      heading: "Best Farnichar for use",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, veniam. Quasi repellendus aliquid officiis laborumqui laboriosam architecto",
    },
    {
      image: sanitizer,
      heading: "Home Sanitisation",
      paragraph:
        " We offers range of sanitation services for home which including proactive measures for surface and spatial disinfection. Check out now!",
    },
    {
      image: security,
      heading: "3-Tier security",
      paragraph:
        "Regardless of where I sleep, whether it’s a hotel, a hostel,an AirBnb, or even my own home, I want to feel safe. It’s non-negotiable.",
    },
    {
      image: water,
      heading: "Ro-water",
      paragraph:
        "Does your hostel serve breakfast? Is it already included in the hostel price? Awesome! You just saved some time and money.",
    },
    {
      image: breakfast,
      heading: "Breakfast",
      paragraph:
        "Does your hostel serve breakfast? Is it already included in the hostel price? Awesome! You just saved some time and money.",
    },
    {
      image: wifi,
      heading: "All Over Wifi",
      paragraph:
        " Having consistent wifi throughout an entire hostel building isnt as critical as having basic security features throughout an entire hostel building, but ",
    },
  ];
  return (
    <>
      <section id="banner1">
        <div className=" container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src={home1png}
                alt=""
                srcset=""
                className="img-fluid  text-center p-4"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="promo_title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                debitis qui illo dolorem quasi dolor perferendis blanditiis
                nulla aliquid maiores voluptatum explicabo nisi vero repellat
                ipsa, laudantium cum error! Modi. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Enim iusto laboriosam ex
                voluptatibus recusandae mollitia amet commodi assumenda quis
                voluptatum cumque asperiores, distinctio impedit voluptatem
                fugit voluptas sed illum reiciendis!
              </p>
              <a href="/">
                {" "}
                <img
                  src="https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180902232/109316349-location-vector-icon-isolated-on-transparent-background-location-logo-concept.jpg"
                  className="location_icon"
                  alt=""
                  srcset=""
                />{" "}
                Search your room
              </a>
              <div className="">
                <button type="button" class="btn btn-primary p-3">
                  Search it now
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={firstWave} alt="" srcset="" className="firstWave" />
      </section>

      {/* { </div>
              <div className="col-lg-4 shadow mb-4">
                <img src={sanitizer} alt="" className="img-fluid service_img" />
                <h4>Home Sanitisation</h4>
                <p>
                  We offers range of sanitation services for home which
                  including proactive measures for surface and spatial
                  disinfection. Check out now!
                </p>
              </div>} */}
      {/* ......................banneer2..................... */}
      <div className=" container">
        <section id="banner2">
          <div className="container ">
            <div className="row text-center">
              <h1>What We Offer ? </h1>
              <p className="TitleOffer">
                Rental Accommodations Designed for Everyone.
              </p>

              {cardData.map((item) => {
                const { paragraph, heading, image } = item;
                return (
                  <>
                    <div className=" col-lg-4 col-md-6  ">
                      <div class="card mt-4 shadow">
                        <img
                          src={image}
                          class="img-fluid service_img "
                          alt="image farnicher"
                        />
                        <div class="card-body">
                          <h2>{heading}</h2>
                          <p>{paragraph}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="mt-5">
                <button type="button" class="btn btn-primary mar">
                  All Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ..................banner3.............. */}
      <section className="banner3">
        <div className="container">
          <h1 className="text-center">WHY CHOOSE US ?</h1>
          <div className="row">
            <div className="col-md-6 p-4">
              <img
                src={whyChooseUs}
                alt=""
                className="img-fluid text-center"
                srcset=""
              />
            </div>
            <div className="col-md-6 p-4">
              <h1 className="mt-4" style={{ paddingLeft: "30px" }}>
                Why we are different ?
              </h1>
              <ul>
                <li>we are believe in strong relationship and bond</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  architecto
                </li>
                <li>
                  nostrum nulla quae praesentium quod autem deleniti, quas culpa
                  perferendis sit officia distinctio.
                </li>
                <li>we are believe in strong relationship and bond</li>
                <li>
                  Labore nesciunt eligendi dolore ipsa magnam est voluptatem
                </li>
                <li>we are believe in strong relationship and bond</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* .....................banner4.................. */}
      <section id="banner4">
        <div className="container">
          <h1 className=" text-center"> WHAT CLIENT SAY</h1>
          <div className="row offset-1">
            <div className="col-md-5 testiminal">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                aperiam ipsum ducimus animi quas voluptatum asperiores iste,
                quisquam placeat earum libero iusto
              </p>
              <img src={user1} alt="testiminal1" />
              <p className="user_details">
                <b>
                  Agelina <br />
                  Co-founder at ayx
                </b>
              </p>
            </div>
            <div className=" col-md-5 testiminal">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                aperiam ipsum ducimus animi quas voluptatum asperiores iste,
                quisquam placeat earum libero iusto
              </p>
              <img src={user2} alt="testiminal1" />
              <p className="user_details">
                <b>
                  John Doe <br />
                  Directer at ayx
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
