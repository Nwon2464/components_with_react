import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";
import { connect } from "react-redux";
import axios from "axios";
import { datas } from "./carouseldata";
const Carousel = (props) => {
  const iframeRef = useRef();

  const styleRef = useRef();
  const [direction, setDirection] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleIframe = () => {
      setLoading(false);
    };
    iframeRef.current.addEventListener("load", handleIframe);
    return () => {
      iframeRef.current.removeEventListener("load", handleIframe);
    };
  }, []);
  const determineStyle = (index, showAnimation) => {
    const num = xPos[index];

    if (showAnimation) {
      return {
        transform: `translateX(${num.first}) translateX(${num.second}) scale(${num.third})`,
        zIndex: `${num.fourth}`,
        WebkitTransition: "all 200ms linear",
        MozTransition: "all 200ms linear",
        msTransition: "all 200ms linear",
        OTransition: "all 200ms linear",
      };
    } else {
      return {
        zIndex: `${num.fourth}`,
        transform: `translateX(${num.first}) translateX(${num.second}) scale(${num.third})`,
      };
    }
  };

  const [xPos, setXPos] = useState([
    {
      first: "-528.7px",
      second: "50%",
      third: "0.7",
      fourth: "1",

      width: "600px",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      first: "-264.35px",
      second: "25%",
      third: "0.85",
      fourth: "2",

      width: "600px",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      first: "0px",
      second: "0%",
      third: "1",
      fourth: "3",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      width: "600px",
    },
    {
      first: "264.35px",
      second: "-25%",
      third: "0.85",
      fourth: "2",
      fifth: "none",
      width: "600px",
      img:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      first: "528.7px",
      second: "-50%",
      third: "0.7",
      fourth: "1",
      fifth: "none",
      width: "600px",
      img:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ]);
  const moveLeft = () => {
    let xLeftPosition = xPos.slice();
    xLeftPosition.unshift(xLeftPosition.pop());
    setXPos(xLeftPosition);
    setDirection("left");
  };

  const moveRight = () => {
    let XRightPosition = xPos.slice();
    XRightPosition.push(XRightPosition.shift());
    setXPos(XRightPosition);
    setDirection("right");
  };
  const [twitchLiveStream, setTwitchLiveStream] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          data: { data },
        },
      } = await axios.get("http://localhost:5000/api/v1/twitch");
      // console.log(data);
      setTwitchLiveStream(data);
    };
    fetchData();
  }, []);
  console.log(
    twitchLiveStream.map((iframe) => console.log(typeof iframe.user_name))
  );

  return (
    <>
      <button className="btn left" onClick={moveRight}>
        ‹
      </button>
      <button className="btn right" onClick={moveLeft}>
        ›
      </button>
      <div ref={styleRef} className="slides">
        {/* {!twitch
          ? null
          : twitch.map((res) => {
              return (
                <iframe
                  ref={iframeRef}
                  // loading="lazy"
                  // rel="preload"
                  className="iframe"
                  width="1527.24"
                  height="300"
                  src={res.embed_url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              );
            })} */}

        {datas.map((slide, i) => {
          const showAnimation = direction === "right" || direction === "left";
          const position = "animate absolute image";
          const imgStyle = determineStyle(i, showAnimation);
          return (
            <div style={imgStyle} key={i} className="slide">
              <iframe
                ref={iframeRef}
                // loading="lazy"
                // rel="preload"
                className="iframe"
                width="1527.24"
                height="300"
                // src={slide.iFrameSrc}
                // src={`https://player.twitch.tv/?channel=${twitchLiveStream.map(
                //   (iframe) => iframe.user_name
                // )}&muted=true&parent=localhost`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {loading ? <div className="loading"></div> : null}
              <div className="image__card">
                <div className="image__card__upper">
                  <img
                    src={slide.streamJPG}
                    alt="streamJPG"
                    className="image__card__upper__image"
                  />
                  <div className="image__card__upper__info">
                    <p>{slide.streamTitle}</p>
                    <a href="#">{slide.genere}</a>
                    <p>{slide.viewers}</p>
                  </div>
                </div>

                <div className="image__card__middle">
                  <a href="#">{slide.tags[0]}</a>
                  <a
                    style={{ display: `${!slide.tags[1] ? "none" : ""}` }}
                    href="#"
                  >
                    {slide.tags[1]}
                  </a>
                </div>
                <div className="image__card__bottom">{slide.description} </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
