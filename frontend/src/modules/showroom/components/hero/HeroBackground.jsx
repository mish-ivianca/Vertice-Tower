import { useEffect, useRef } from "react";

function HeroBackground({
    desktopVideo,
    loop = false,
    onTimeUpdate,
}) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [desktopVideo]);

    return (
        <video
            ref={videoRef}
            key={desktopVideo}
            src={desktopVideo}
            autoPlay
            loop={loop}
            playsInline
            preload="auto"
            onTimeUpdate={onTimeUpdate}
            className="
                absolute
                inset-0
                z-0
                h-full
                w-full
                object-cover
                scale-105
            "
        />
    );
}

export default HeroBackground;