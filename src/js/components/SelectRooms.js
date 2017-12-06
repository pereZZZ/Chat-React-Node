import React from "react";

export default class SelectRooms extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="rooms">
                <div className="top-selector">
                    <div className="type-selector"></div>
                    <div className="type-selector"></div>
                    <div className="type-selector"></div>
                </div>
                <div className="rooms-list">
                    <div className="room-select"></div>
                    <div className="room-select"></div>
                </div>

            </div>
        )
    }

}