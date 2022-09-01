import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from "./Song.module.scss";

/*
"primary": {
        "title": [
            {
                "type": "heading1",
                "text": "Interest",
                "spans": []
            }
        ],
        "artist": "men",
        "cover": {
            "dimensions": {
                "width": 900,
                "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"
        },
        "songlink": {
            "link_type": "Web",
            "url": "https://prismic.io"
        }
    }
}
*/
interface IRichText{
 tipe:string;
 text:string;
 spans:string[];

}
interface IImage{
   dimensions:{
    width:number;
    height:number;
   };
   alt: string | null;
   copyright: string | null;
   url:string;
  
}

interface IPrimary{
  
  title: string;
  album: string;
  cover: IImage;
  songLink: {
    link_tipe:string;
    url:string;
  }
}

interface IProps{
  slice: {primary: IPrimary};

}

const Song = ({ slice }:IProps) => {
  console.log(slice)
  return(
    <div className={styles["melody"]}>
    <span className={styles["song-nr"]}>
        1
    </span>
    <img src={slice.primary.cover.url} className={styles["song-cover"]}>
    </img>
    <span className={styles["song-title"]}>
        {slice.primary.title}
    </span>
    <span className={styles["song-album"]}>
        {slice.primary.album}
    </span>
    <span className={styles["song-duration"]}>
        -
    </span>
</div>
  );
}
  


export default Song