function Recorrido360({ src, title }) {
    return (
        <div
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-black
            "
        >
            <iframe
                src={src}
                title={title}
                className="
                    absolute
                    left-0
                    w-full
                    h-[calc(100%+90px)]
                    -top-[0px]
                    lg:h-[calc(100%+82px)]
                    -top-[0px]
                    border-0
                "
                allowFullScreen
            />
        </div>
    );
}
export default Recorrido360;