import React, { useState, useRef, useEffect } from "react";
import "./CarouselMiddleLiveChannel.css";
import axios from "axios";
import _ from "lodash";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
const CarouselMiddleLiveChannel = () => {
  const [liveChannel, setLiveChannel] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef();
  const showClick = (e) => {
    e.preventDefault();
    setShowMore(true);
  };
  const hideLoading = () => {
    setLoading(false);
  };

  // useEffect(() => {
  //   const handleLoading = () => {
  //     setLoading(false);
  //   };
  //   loadingRef.current.addEventListener("load", handleLoading);
  //   return () => {
  //     loadingRef.current.removeEventListener("load", handleLoading);
  //   };
  // }, []);

  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get("http://localhost:5000/api/v1/twitch/streams");
      // console.log(data);
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      // console.log(finalArray);
      setLiveChannel(data);
      // setLoading(false);
    };
    fecthLive();
  }, []);

  const checkTags = (streams, i) => {
    if (streams.localization_names.length !== 1) {
      let a = _.mapKeys(streams.localization_names, "en-us");
      let b = Object.keys(a);
      return (
        <>
          {b.map((e, i) => {
            return (
              <a
                className="channel__tag__anchor"
                key={i}
                style={{ marginLeft: `calc(5px * ${i})` }}
                href="#"
              >
                {e}
              </a>
            );
          })}
        </>
      );
    }
    return (
      <a className="channel__tag__anchor" style={{ marginLeft: 5 }} href="#">
        {streams.localization_names[0]["en-us"]}
      </a>
    );
  };

  return (
    <div className="channel">
      <h3>Live Channels we think you'll like</h3>

      <div className="videos">
        <div className="videos__1">
          {liveChannel.map((e, i) => {
            return (
              <>
                <div className="chan">
                  <div className="chanchan">
                    <div className="channel__card">
                      <article className="ch">
                        <div className="channel__all__info">
                          <div className="c">
                            <div className="channel__info">
                              <div className="channel__title">
                                <div className="channel__font">
                                  <div className="channel__font_1">
                                    <h3 className="channel__font__title">
                                      {e.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="channel__user">
                                <div>
                                  <h4 className="channel__user__name">
                                    {e.user_name}
                                  </h4>
                                </div>
                                <div>
                                  <h5 className="channel__game__name" href="#">
                                    {e.game_name}
                                  </h5>
                                </div>
                              </div>
                              <div className="channel__tag">
                                <div className="channel__tag__1">
                                  <div className="channel__tag__2">
                                    <div className="channel__tag__3">
                                      {checkTags(e)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="channel__icon">
                              <img
                                className="channel__icon__1"
                                src={e.profile_image_url}
                              />
                            </div>
                            <div className="channel__down">
                              <MoreVertIcon />
                            </div>
                          </div>
                        </div>

                        <div className="thumb">
                          <img
                            className="channel__thumbnail"
                            src={e.thumbnail_url}
                          />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="other">
        <div className="other__">
          <div className="other___">a</div>
        </div>
      </div>
      <h2 className="custom">
        <span className="showMore">
          <a className="showMore__button" href="#">
            Show more
            <ExpandMoreOutlinedIcon className="down__icon" />
          </a>
        </span>
      </h2>
      <button></button>
    </div>
  );
};

export default CarouselMiddleLiveChannel;
