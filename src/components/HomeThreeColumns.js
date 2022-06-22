import React from 'react';
import '../scss/_HomeThreeColumns.scss';

const Article = (props) => {
    return (
        <article className="home-three-columns-single">
            <h1 className="home-three-columns-counter">
                {props.counter}
            </h1>
            <h6 className="home-three-columns-title">
                {props.title}
            </h6>
            <p className="home-three-columns-text">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
        </article>
    );
}

const HomeThreeColumns = () => {
    return (
        <div className="home-three-columns">
            <Article counter="10" title="oddanych worków"/>
            <Article counter="5" title="wspartych organizacji"/>
            <Article counter="7" title="zorganizowanych zbiórek"/>
        </div>
    );
};

export default HomeThreeColumns;