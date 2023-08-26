import {useEffect, useState} from "react";
import axios from "axios";

/**
 * this hook check if the image link is fetch-able
 * @param {string} src src of image
 * @param {JSX.Element} fallback show this one if the image is not fetch-able
 * @param {{}} props image's props
 * @return {JSX.Element}
 */
const useImageChecker = (src, fallback, props = {} ) => {
    const [fetched,setFetched] = useState(false);
    const [hasImage,setHasImage] = useState(
        fallback
            ? fallback
            : "loading..."
    );

    useEffect(() => {
        if(!fetched && src) {

            let parseSrc = src.match( /^(\/)/ )
                // eslint-disable-next-line no-restricted-globals
                ? (location.origin + src)
                : src;

            axios.get( parseSrc )
                .then( () => {
                    setFetched( true );
                    setHasImage(
                        <img src={ src }
                             alt="pic"
                             { ...props } />
                    );
                } )
                .catch( e => {
                    setFetched( true );
                    console.log( e.message );
                } );
        }
    }, [fetched, src, props])

    return hasImage;
}

export default useImageChecker;