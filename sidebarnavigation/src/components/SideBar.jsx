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
            {array[0].menu.map((value, id) => {
                return (
                    <div key={id} className='menu'>
                        <img src={value.img} alt={value.title} />
                        <div className="title">
                            <p>{value.title}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className='line'></div>
        </div>
        </>
    )
}