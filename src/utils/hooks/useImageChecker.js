import {useEffect, useRef, useState} from "react";
import axios from "axios";

/**
 * this hook check if the image link is fetch-able
 * @param {string} src src of image
 * @param {JSX.Element} fallback show this one if the image is not fetch-able
 * @param {{}} props image's props
 * @return {JSX.Element}
 */
const useImageChecker = (src, fallback, props = {}) => {
    const isMounted = useRef(false);
    const [hasImage, setHasImage] = useState(fallback || "loading...");

    useEffect(() => {
        isMounted.current = true;
        let parseSrc = src.match(/^(\/)/)
            // eslint-disable-next-line no-restricted-globals
            ? (location.origin + src)
            : src;

        axios.head(parseSrc)
            .then(() => {
                if (isMounted.current) {
                    setHasImage(<img src={src} alt="pic" {...props} />);
                }
            })
            .catch(e => {
                if (isMounted.current) {
                    setHasImage(fallback);
                }
            });

        return () => {
            isMounted.current = false;
        };
    }, [src, props, fallback]);

    return hasImage;
}

export default useImageChecker;