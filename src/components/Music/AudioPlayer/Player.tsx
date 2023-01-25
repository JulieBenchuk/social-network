import React from 'react';
import ReactPlayer from "react-player";
import style from "./Player.module.css"

export const Player = () => {
    let playlist = [
        {id: 1, band: "Noize MC", track: "Всё как у людей", url: "https://www.youtube.com/watch?v=eLAHSRmFFzE"},
        {id: 2, band: "Noize MC", track: "Strana dozdey", url: "https://www.youtube.com/watch?v=wyhI5C87c3U"},
        {id: 3, band: "Noize MC", track: "Век-волкодав", url: "https://www.youtube.com/watch?v=Jw8ufs6XazY"}
    ]
    return (
        <div className={style.player}>
            {playlist.map(p=>{
                return <div className={style.playerItem}>
                    {p.band} - {p.track}
                    <ReactPlayer url={p.url} loop={true}/>
                </div>
            })}
        </div>
    );
};
