import React, {useState, useEffect} from 'react';
import {Element} from 'react-scroll';
import '../scss/_HomeWhoWeHelp.scss';
import TitleSVG from "./TitleSVG";

const SingleBtn = (props) => {
    return (
        <div onClick={props.onClick} className="home-wwh-btn-single">{props.title}</div>
    );
};

const SingleOrganization = (props) => {
    return (
        <div className="single-organization">
            <div className="single-organization-left">
                <span className="fundacja">Fundacja
                    <span className="fundacja-name"> "{props.foundationName}"</span>
                </span>
                <span className="mission">Cel i misja:
                    <span className="mission-text"> {props.missionText}</span>
                </span>
            </div>
            <div className="single-organization-right">
                {props.items}
            </div>
        </div>
    );
};

const HomeWhoWeHelp = (props) => {
    const [currentList, setCurrentList] = useState("fundacje");
    const [listType, setListType] = useState({
        description: "",
        foundationList: []
    });
    const [currentPage, setCurrentPage] = useState(1);


    const handleChangeCurrent = (listType) => () => {
        setCurrentList(listType)
    };

    useEffect(() => {
        fetch(`http://localhost:3005/${currentList}`)
            .then(resp => resp.json())
            .then(data => setListType(data))
            .catch(err => console.log(err))
    }, [currentList]);

    const numberOfFoundations = listType.foundationList.length;
    const foundationsPerPage = 3;
    const numberOfPages = Math.ceil(numberOfFoundations / foundationsPerPage);

    const getItems = () => {
        const startList = (currentPage - 1) * foundationsPerPage
        const endList = startList + foundationsPerPage
        // console.log(`fundacji: ${numberOfFoundations}, stron: ${numberOfPages}`);

        return listType.foundationList.slice(startList, endList);
    };

    const paginationButtons = () => {
        const pageNumbers = [];

        for (let i = 1; i <= numberOfPages; i++) {
            pageNumbers.push(i)
        }
        // console.log(`numer str ${pageNumbers}`);
        return pageNumbers;
    };

    const paginate = (pageNumber) => {
        console.log(`numer str ${pageNumber}`);
        return setCurrentPage(pageNumber);
    }




    return (
        <Element name="organizations">
            <div className="home-wwh container">
                <TitleSVG title1line="Komu pomagamy?"/>
                <div className="home-wwh-btns">
                    <SingleBtn onClick={handleChangeCurrent("fundacje")} title="Fundacjom"/>
                    <SingleBtn onClick={handleChangeCurrent("organizacje")} title="Organizacjom pozarządowym"/>
                    <SingleBtn onClick={handleChangeCurrent("zbiorki")} title="Lokalnym zbiórkom"/>
                </div>
                <p className="home-wwh-text">
                    {listType.description}
                </p>
                <div className="home-wwh-organizations">
                    {getItems().map((el, i) => (
                        <SingleOrganization key={i} foundationName={el.title}
                                            missionText={el.subtitle}
                                            items={el.others.join(', ')}/>
                    ))
                    }
                </div>

                <div className="home-wwh-organizations-paginationCounter">
                    {paginationButtons().map((number) => (
                        <a onClick={() => paginate(number)} key={number}
                           className="single-paginationCounter">{number}</a>
                    ))}
                </div>
            </div>
        </Element>
    );
};

// const div = document.querySelector(".home-wwh-organizations-paginationCounter")
// const pgntnBtns = div.querySelectorAll(".single-paginationCounter");
// console.log(div);
// // console.log(pgntnBtns);
//
// div.firstElementChild.classList.add("active");
// div.addEventListener("click", (setActive));
//
// function setActive (e) {
//     div.firstElementChild.classList.remove("active");
//     pgntnBtns.forEach(e => {
//         e.classList.remove("active");
//     });
//     e.target.classList.add("active");
// }

export default HomeWhoWeHelp;