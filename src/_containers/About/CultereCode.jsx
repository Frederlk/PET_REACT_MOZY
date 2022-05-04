import React from "react";
import { data } from "../../constants";
import { AboutBlock, CultereBody, Heading } from "../../_components";

const CultereCode = ({ className }) => {
    return (
        <section className={`${className || ""} cultere`}>
            <div className="cultere__container">
                <Heading
                    className="cultere__heading"
                    label="IN THE NEWS"
                    title="Our culture code"
                    text="The values that drive Mozilorians every day."
                />
                <CultereBody className="cultere__body" data={data.cultereCodeItems} />
                <AboutBlock className="cultere__about" data={data.aboutBlockItems[0]} />
            </div>
        </section>
    );
};

export default CultereCode;
