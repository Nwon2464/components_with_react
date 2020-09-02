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
      const { data } = await axios.get("http://localhost:5000/api/v1/twitch");
      // console.log(data);
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "340")
          .replace("{height}", "200");
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
                className="channel__tag"
                key={i}
                style={{ marginLeft: 5 }}
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
      <a className="channel__tag" style={{ marginLeft: 5 }} href="#">
        {streams.localization_names[0]["en-us"]}
      </a>
    );
  };

  return (
    <div className="channel">
      <h3>Live Channels we think you'll like</h3>
      <div className="videos">
        {liveChannel.map((e, i) => {
          return (
            <>
              <div className="channel__card">
                <img className="channel__thumbnail" src={e.thumbnail_url} />

                <div className="channel__all__info">
                  <img className="channel__icon" src={e.profile_image_url} />
                  <div className="channel__info">
                    <h3 className="channel__title">{e.title}</h3>
                    <h4 className="">{e.user_name}</h4>
                    <h5 className="channel__name" href="#">
                      {e.game_name}
                    </h5>
                    {checkTags(e)}{" "}
                  </div>
                  <MoreVertIcon />
                </div>
              </div>
            </>
          );
        })}
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
