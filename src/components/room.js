import React from "react";
import { FormattedMessage } from "react-intl";

const Room = (props) => {
    return (
        <div className="card col-2 m-3 bg-grey text-center" onClick={ () => props.showDevices(props.room.name) }>
            <div className="card-body">
                <h5 className="card-title">{props.room.name}</h5>
            </div>
            <img src="https://picsum.photos/100/100" className="card-img-top img-fluid my-2" alt={props.room.name}/>
        </div>
    );
};

export default Room;