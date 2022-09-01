import React from "react";
import {ISongInfo, Song} from "../Song/Song";
import styles from "./Playlist.module.scss";

const songList = [
    {
       imageLink:"./asset/1862a497123c80b6f4143877ba823280.1000x1000x1.png",
       title:"Responsabilități",
       album:"Ștefan III",
       duration:"2:57"
    },
    {
       imageLink:"./asset/cali.jpeg",
       title:"Altcnv",
       album:"Femei băutură necaz",
       duration:"3:41"

    },
    {
        imageLink:"./asset/Drake_-_Certified_Lover_Boy.png",
        title:"N 2 Deep",
        album:"Certified Lover Boy",
        duration:"4:33"
    
    },
    {
        imageLink:"./asset/hn drake.jpg",
        title:"Sticky",
        album:"Honestly nevermind",
        duration:"4:03"  
    },
];

export const Playlist = () => {

    return (
        <div className={styles.playlist}>
                <div className={styles["table-header"]}>
                    <span className={styles["song-nr"]}>
                        #
                    </span>
                    <span className={styles["song-cover"]}>
                        Cover
                    </span>
                    <span className={styles["song-title"]}>
                        Title
                    </span>
                    <span className={styles["song-album"]}>
                        Album
                    </span>
                    <span className={styles["song-duration"]}>
                        Duration
                    </span>
                </div>
                <div id="songs-wrapper" className={styles["songs"]}>
                    {/* <Song index={1} songInfo={songList[0]} /> */}
                    {songList.map(function(details, index){
                        return <Song index={index +1} songInfo={details} />
                    })}
                </div>
        </div>
    );
};