import React from "react";
import { FormattedMessage } from "react-intl";

const Space = (props) => {
    return (
        <div className="card col-2 m-3 bg-grey text-center" onClick={ () => props.showRooms(props.space.id) }>
            <div className="card-body">
                <h5 className="card-title">{props.space.name}</h5>
                <p className="card-text">{props.space.address}</p>
            </div>
            <img src="https://picsum.photos/100/100" className="card-img-top img-fluid my-2" alt={props.space.name}/>
        </div>
    );
};

export default Space;