import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
const VideoCard = (props) => {
  return (
    <div className="game__card">
      <div className="card__maxWidth__margin app__tower__gutter">
        <h3>
          {props.recommend ? "Recommended " : ""}
          <strong style={{ color: "#00b5ad" }}>{props.categories}</strong>{" "}
          we think you'll like
        </h3>
        <div className="app__relative">
          <div className="card__display__flex__wrap">
            {props.videos.slice(0, props.visible).map((e, i) => {
              return (
                <>
                  <div className="app__tower__300 app__tower__padding__gutter">
                    <div className="app__card__height">
                      <div className="app__card__padding_bottom app__card__height">
                        <article className="card__display__flex__direction">
                          <div className="app__width app__order__2 app__margin__top">
                            <div className="app__flex__nowrap app__flex">
                              <div className="app__min__width__0 app__order__2 app__flex__shrink__1 app__flex__grow__1 app__width">
                                <div className="app__margin__bottom">
                                  <div className="channel__font_1">
                                    <h3 className="app__ellipsis app__font__weight">
                                      {e.title}
                                    </h3>
                                  </div>
                                </div>
                                <div className="channel__user">
                                  <div>
                                    <h4 className="channel__user__name">
                                      {e.user_name}
                                    </h4>
                                  </div>
                                  <div>
                                    <h5
                                      className="channel__game__name"
                                      href="#"
                                    >
                                      {e.game_name}
                                    </h5>
                                  </div>
                                </div>
                                <div className="channel__tag">
                                  <div className="channel__tag__1">
                                    <div className="channel__tag__2">
                                      <div className="channel__tag__3">
                                        {props.checkTags(e)}
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

                          <div className="app__order__1">
                            <div className="app__relative">
                              <div>
                                <img
                                  className="channel__thumbnail"
                                  src={e.thumbnail_url}
                                />
                              </div>
                              <div className="app__absolute app__top__0 app__left__0 app__card__height app__width">
                                <div className="app__absolute app__top__0 app__left__0 app__margin">
                                  <p className="app__uppercase app__live__indicator app__font__weight app__border__radius app__padding">
                                    {e.type}
                                  </p>
                                </div>
                                <div className="app__absolute app__bottom__0 app__left__0 app__margin">
                                  <p className="app__view__indicator app__padding app__margin__bottom app__border__radius">
                                    {props.checkViewers(e.viewer_count)}
                                  </p>
                                </div>
                              </div>
                            </div>
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
        <div className="custom">
          {props.visible < props.videos.length ? (
            <span onClick={props.showClick} className="showMore">
              <a className="showMore__button" href="#">
                Show more
                <ExpandMoreOutlinedIcon className="down__icon" />
              </a>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
