import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback, page) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0
        };

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        // eslint-disable-next-line no-unused-expressions
        observer.current.observe(childRef.current)

        return function () {
            // eslint-disable-next-line no-unused-expressions
            observer.current.unobserve(childRef.current)
        };
    }, [callback])
};