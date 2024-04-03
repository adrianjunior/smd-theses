import { useEffect, useState } from 'react';

export const ScreenSize = () => {
    const SMALL_BREAKPOINT = 600;
    const MEDIUM_BREAKPOINT = 1000;
    const LARGE_BREAKPOINT = 1400;
    const EXTRA_LARGE_BREAKPOINT = 1920;

    const [screenSize, setScreenSize] = useState('xl');

    useEffect(() => {
        const onResize = () => {
            if(window.innerWidth < SMALL_BREAKPOINT) setScreenSize('sm');
            if(window.innerWidth < MEDIUM_BREAKPOINT && window.innerWidth >= SMALL_BREAKPOINT) setScreenSize('md');
            if(window.innerWidth < LARGE_BREAKPOINT && window.innerWidth >= MEDIUM_BREAKPOINT) setScreenSize('lg');
            if(window.innerWidth < EXTRA_LARGE_BREAKPOINT && window.innerWidth >= LARGE_BREAKPOINT) setScreenSize('xl');
        };
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return screenSize;
};