import { useEffect, useState } from "react";

function HeroBackground({
    desktopVideo,
    loop = false,
    onEnded,
}) {

    return (
        <video
            key={desktopVideo}
            src={desktopVideo}
            autoPlay
            muted
            loop={loop}
            playsInline
            onEnded={onEnded}
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