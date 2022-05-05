import React from "react";
import { data } from "../../constants";

const LifeMozy = ({ className }) => {
    const lifeItems = data.lifeItems.map(({ img, alt }, i) => (
        <div key={(alt = i)} className={`life__item life__item_${i + 2}`}>
            <div className="life__image-ibg">
                <img src={img} alt={alt} />
            </div>
        </div>
    ));

    return (
        <section className={`${className || ""} life`}>
            <div className="life__container">
                <div className="life__item life__item_1">
                    <h2 className="life__title">
                        <span>Life@ </span>Mozi
                    </h2>
                    <div className="life__text">
                        The problems we solve every day could be serious, but we’re not! We have a lot of fun because we love what
                        we do and you’re welcome to be a part of it.
                    </div>
                </div>
                {lifeItems.length && lifeItems}
            </div>
        </section>
    );
};

export default LifeMozy;
