function HeroBackground({ image }) {
    return (
        <img
            src={image}
            alt="Proyecto"
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            scale-105
            transition-transform
            duration-[6000ms]
            "
        />
    );
}

export default HeroBackground;