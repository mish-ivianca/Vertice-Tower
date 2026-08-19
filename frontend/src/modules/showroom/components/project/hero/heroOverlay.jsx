function HeroOverlay() {
    return (
        <>
            {/* Oscurece toda la imagen */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Degradado inferior */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-black/20
                "
            />
        </>
    );
}

export default HeroOverlay;