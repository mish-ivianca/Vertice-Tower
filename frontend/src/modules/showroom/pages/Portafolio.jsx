import { useState } from "react";
import foto1 from "../../../assets/images/portafolio/2.png";
import foto2 from "../../../assets/images/portafolio/2.png";
import foto3 from "../../../assets/images/portafolio/3.png";
import foto4 from "../../../assets/images/portafolio/4.png";
import foto5 from "../../../assets/images/portafolio/5.png";
import foto6 from "../../../assets/images/portafolio/6.png";
import foto7 from "../../../assets/images/portafolio/7.png";
import foto8 from "../../../assets/images/portafolio/8.png";
import foto9 from "../../../assets/images/portafolio/9.png";
import foto10 from "../../../assets/images/portafolio/10.png";
import foto11 from "../../../assets/images/portafolio/11.png";
import foto12 from "../../../assets/images/portafolio/12.png";
import foto13 from "../../../assets/images/portafolio/13.png";
import foto14 from "../../../assets/images/portafolio/14.png";
import foto15 from "../../../assets/images/portafolio/15.png";

function Portafolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imagenes = [
        foto1,
        foto2,
        foto3,
        foto4,
        foto5,
        foto6,
        foto7,
        foto8,
        foto9,
        foto10,
        foto11,
        foto12,
        foto13,
        foto14,
        foto15,
    ];

    return (
        <>
        <section className="w-full px-40 py-5">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-1">
                {imagenes.map((imagen, index) => (
                    <div
                        key={index}
                        className="mb-1 break-inside-avoid overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(imagen)}
                    >
                        <img
                            src={imagen}
                            alt={`Portafolio ${index + 1}`}
                            className="
                                w-full
                                h-auto
                                object-cover
                                transition-transform
                                duration-500
                                hover:scale-105
                            "
                        />
                    </div>
                ))}
            </div>
        </section>
        {selectedImage && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/90
                        p-2
                        animate-[fadeIn_0.3s_ease-out]
                    "
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="
                            absolute
                            top-5
                            right-5
                            z-10
                            text-white
                            text-3xl
                            font-light
                            hover:opacity-60
                            transition-opacity
                        "
                    >
                        ×
                    </button>

                    {/* Imagen */}
                    <img
                        src={selectedImage}
                        alt="Vista ampliada"
                        className="
                            max-w-full
                            max-h-[90vh]
                            object-contain
                            shadow-2xl
                            animate-[zoomIn_0.3s_ease-out]
                        "
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            </>
    );
}

export default Portafolio;