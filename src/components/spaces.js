import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";
import Space from "./space";
import Room from "./room";
import Device from "./device";

const Spaces = () => {

    const urlSpaces = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    const urlRooms = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

    const [spaces, setSpaces] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [devices, setDevices] = useState([]);

    const [currentRooms, setCurrentRooms] = useState([]);

    const [displayRooms, setDisplayRooms] = useState();
    const [displayDevices, setDisplayDevices] = useState();

    useEffect(() => {
        fetch(urlSpaces).then(res => res.json()).then(spcs => {
            console.log(spcs);
            setSpaces(spcs);
            fetch(urlRooms).then(res => res.json()).then(roms => {
                setRooms(roms);
            })
        })
    }, [])

    const showRooms = (sid) => {
        const roms = rooms.filter(r => r.homeId === sid)
        setDisplayRooms(1);
        setCurrentRooms(roms);
    }

    const showDevices = (rname) => {
        const rom = currentRooms.find(r => r.name === rname)
        setDisplayDevices(1);
        setDevices(rom.devices);
        console.log(displayDevices);
    }

    const renderRooms = () => {
        if(displayRooms === undefined) {
            return <div></div>
        }
        else {
            return currentRooms.map(r => <Room key= {r.name} room = {r} showDevices = { showDevices }/>)
        }
    }

    const renderDevices = () => {
        if(displayDevices === undefined) {
            return <div></div>
        }
        else {
            return (<table className="col-8 table table-light table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">
                            <FormattedMessage id="Device" />
                            </th>
                            <th scope="col">
                            <FormattedMessage id="Value" />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {devices.map(d => <Device key = { d.id } device = { d }/>)}
                        </tbody>
                    </table>);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <h1><FormattedMessage id="TitleSpaces"/></h1>
            </div>
            <div className="row">
                {spaces.map(s => <Space key = {s.id} space = {s} showRooms = { showRooms }/>)}
            </div>
            <div className="row">
                <h1><FormattedMessage id="TitleRooms"/></h1>
            </div>
            <div className="row">
                { renderRooms() }
            </div>
            <div className="row">
                { renderDevices() }
            </div>
        </div>
    );

};

export default Spaces;