import React from "react";
import { data, images } from "../../constants";
import { Heading, ProgressCircle } from "../../_components";

const Join = ({ className }) => {
    const jobsItems = data.jobsItems.map(({ title, time, place, link }, i) => (
        <div key={title + i} className="jobs-join__item">
            <div className="jobs-join__info">
                <h4 className="jobs-join__title">
                    <a href={link}>{title}</a>
                </h4>
                <div className="jobs-join__row">
                    <div className="jobs-join__time">
                        <span className="jobs-join__icon">
                            <img src={images.defaultImages.clock} alt="Clock Icon" />
                        </span>
                        {time || "Full time"}
                    </div>
                    <div className="jobs-join__place">
                        <span className="jobs-join__icon">
                            <img src={images.defaultImages.marker} alt="Marker Icon" />
                        </span>
                        {place || "India"}
                    </div>
                </div>
            </div>
            <a href={link} className="jobs-join__button button button_outline">
                View details
            </a>
        </div>
    ));

    return (
        <section className={`${className || ""} join`}>
            <div className="join__container">
                <div className="join__progress progress-join">
                    <div className="progress-join__circle">
                        <ProgressCircle
                            className="progress-join__svg"
                            speed={1}
                            strokeWidth={6}
                            trailStrokeWidth={6}
                            trailStrokeColor="#D3E0D7"
                            strokeColor="#0DAA41"
                            percentage={95}
                        />
                    </div>
                    <h3 className="progress-join__title">
                        <p>95% of employees recommend Mozi</p>
                    </h3>
                    <div className="progress-join__rating-wrap">
                        <div className="progress-join__label">
                            <img src={images.defaultImages.glassdoor} alt="Glassdoor" />
                        </div>
                        <div className="progress-join__rating rating">
                            <span className="rating__value">4.8</span>
                            <div className="rating__star">
                                <img src={images.defaultImages.star} alt="star" />
                            </div>
                            <div className="rating__star">
                                <img src={images.defaultImages.star} alt="star" />
                            </div>
                            <div className="rating__star">
                                <img src={images.defaultImages.star} alt="star" />
                            </div>
                            <div className="rating__star">
                                <img src={images.defaultImages.star} alt="star" />
                            </div>
                            <div className="rating__star">
                                <img src={images.defaultImages.star} alt="star" />
                            </div>
                        </div>
                        <a href="#" className="progress-join__read">
                            <span>Read our reviews</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#424B5A" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.70531 15.2947C8.31578 15.6842 7.68422 15.6842 7.29468 15.2947C6.9054 14.9054 6.90511 14.2743 7.29405 13.8847L12.17 9L0.999998 9C0.447714 9 -6.511e-07 8.55228 -6.99382e-07 8C-7.47665e-07 7.44771 0.447714 7 0.999999 7L12.17 7L7.29405 2.11531C6.90511 1.72568 6.90539 1.0946 7.29468 0.705315C7.68422 0.31578 8.31578 0.31578 8.70531 0.705315L16 8L8.70531 15.2947Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <Heading
                    className="join__heading"
                    label="WE ARE HIRING"
                    title="Join the pack"
                    text="If you’re looking to do the best work of your career, learn and grow, then you’ll fit right in at Mozi! "
                />
                <div className="join__jobs jobs-join">{jobsItems.length && jobsItems}</div>
                <div className="join__button-wrap">
                    <a href="#" className="join__button button">
                        See more
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Join;
