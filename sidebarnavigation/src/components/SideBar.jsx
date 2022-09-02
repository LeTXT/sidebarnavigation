import React from "react";

import { array } from '../array/array'

export default function SideBar() {
    return  (
        <>
        <div className="sideBar">
            <div className="perfil hidden">
                <img src={array[0].perfil} alt="perfil" />
                <div className="title">
                <h2>{array[0].name}</h2>
                </div>
            </div>
            <div className="line"></div>
            <div>
            
            </div>
        </div>
        </>
    )
}