import { useParams } from "react-router-dom";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../../../../shared/components/container/container";
import PageHeader from "../../components/project/pageHeader/PageHeader"
import projects from "../../data/projectsData";

function Contacto() {

    const { slug } = useParams();
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        correo: "",
        mensaje: "",
    });

    const project = projects.find(
        project => project.slug === slug
    );
    const handleChange = (event) => {
        const { name, value } = event.target;

        // NOMBRE
        if (name === "nombre") {
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
                return;
            }

            if (value.length > 100) {
                return;
            }
        }

        // TELÉFONO
        if (name === "telefono") {
            if (!/^\d*$/.test(value)) {
                return;
            }

            if (value.length > 8) {
                return;
            }
        }

        // CORREO
        if (name === "correo") {
            if (value.length > 100) {
                return;
            }
        }

        // MENSAJE
        if (name === "mensaje") {
            if (value.length > 500) {
                return;
            }
        }

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
    event.preventDefault();

    console.log("FORMULARIO ENVIADO");

    const mensaje = `
Hola, estoy interesada/o en obtener información sobre el proyecto ${project.nombre}.

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Correo: ${form.correo}

Mensaje:
${form.mensaje}
    `;

    const mailtoUrl = `mailto:${project.correo}?subject=${encodeURIComponent(
        `Consulta sobre ${project.nombre}`
    )}&body=${encodeURIComponent(mensaje)}`;

    console.log(mailtoUrl);

    window.location.href = mailtoUrl;
};

    if (!project) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Proyecto no encontrado
                </h1>
            </main>
        );
    }

    return (
        <main
            className="
                w-full
                bg-gradient-to-bl
                from-zinc-300
                to-zinc-50
            "
        >

            <Container>

                <div className="py-12 md:py-16">

                    {/* ENCABEZADO */}

                    <PageHeader
                        icon={FiPhone}
                        title="Contáctanos"
                        subtitle="Agenda una cita"
                        description="
                            ¿Tienes alguna pregunta sobre nuestro proyecto?
                            Ponte en contacto con nosotros y te brindaremos
                            toda la información que necesitas.
                        "
                    />


                    {/* CONTENIDO */}

                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            lg:grid-cols-[1fr_320px]
                        "
                    >
                        {/* FORMULARIO */}

                        <div
                            className="
                                rounded-2xl
                                bg-white
                                p-6
                                shadow-lg
                                md:p-8
                            "
                        >

                            <div className="mb-8">

                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.3em]
                                        text-gray-500
                                    "
                                >
                                    Escríbenos
                                </span>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-semibold
                                        uppercase
                                        md:text-3xl
                                    "
                                >
                                    Solicita información
                                </h2>

                            </div>


                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                <div
                                    className="
                                        grid
                                        gap-5
                                        md:grid-cols-2
                                    "
                                >

                                    <div>

                                        <label
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-gray-500
                                            "
                                        >
                                            Nombre
                                        </label>

                                        <input
                                            type="text"
                                            name="nombre"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            maxLength={15}
                                            minLength={1}
                                            required
                                            className="
                                                w-full
                                                rounded-lg
                                                border
                                                border-black/10
                                                bg-zinc-50
                                                px-4
                                                py-3
                                                text-sm
                                                outline-none
                                                transition
                                                focus:border-black
                                            "
                                        />

                                    </div>


                                    <div>

                                        <label
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-gray-500
                                            "
                                        >
                                            Celular
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={form.telefono}
                                            onChange={handleChange}
                                            placeholder="Tu celular"
                                            maxLength={8}
                                            minLength={8}
                                            required
                                            className="
                                                w-full
                                                rounded-lg
                                                border
                                                border-black/10
                                                bg-zinc-50
                                                px-4
                                                py-3
                                                text-sm
                                                outline-none
                                                transition
                                                focus:border-black
                                            "
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-xs
                                            uppercase
                                            tracking-widest
                                            text-gray-500
                                        "
                                    >
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="correo"
                                        value={form.correo}
                                        maxLength={30}
                                        onChange={handleChange}
                                        placeholder="tu@email.com"
                                        className="
                                            w-full
                                            rounded-lg
                                            border
                                            border-black/10
                                            bg-zinc-50
                                            px-4
                                            py-3
                                            text-sm
                                            outline-none
                                            transition
                                            focus:border-black
                                        "
                                    />

                                </div>


                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block
                                            text-xs
                                            uppercase
                                            tracking-widest
                                            text-gray-500
                                        "
                                    >
                                        Mensaje
                                    </label>

                                    <textarea
                                        name="mensaje"
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        maxLength={300}
                                        rows="5"
                                        placeholder="¿En qué podemos ayudarte?"
                                        required
                                        className="
                                            w-full
                                            resize-none
                                            rounded-lg
                                            border
                                            border-black/10
                                            bg-zinc-50
                                            px-4
                                            py-3
                                            text-sm
                                            outline-none
                                            transition
                                            focus:border-black
                                        "
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-black
                                        px-6
                                        py-3
                                        text-sm
                                        uppercase
                                        tracking-widest
                                        text-white
                                        transition-all
                                        duration-500
                                        hover:bg-gray-700
                                        md:w-auto
                                    "
                                >
                                    Enviar mensaje
                                </button>

                            </form>

                        </div>
                        {/* INFORMACIÓN */}

                        <div
                            className="
                                flex
                                flex-col
                                justify-between
                                rounded-2xl
                                bg-white
                                shadow-lg
                            "
                        >
                                <img 
                                src={project.imageContacto}
                                alt="Contacto"
                                className="
                                    rounded-t-lg
                                "
                            />
                            {/* DATOS */}

                            <div className="m-8 space-y-5">

                                {/* TELÉFONO */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            size-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >
                                        <FiPhone className="size-5" />
                                    </div>

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-gray-500
                                            "
                                        >
                                            Teléfono
                                        </span>

                                        <a
                                            href={project.whatsappLink}
                                            className="
                                                text-sm
                                                font-medium
                                                transition
                                                hover:text-gray-500
                                            "
                                        >
                                            {project.contacto}
                                        </a>

                                    </div>

                                </div>


                                {/* CORREO */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            size-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >
                                        <FiMail className="size-5" />
                                    </div>

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-gray-500
                                            "
                                        >
                                            Correo
                                        </span>

                                        <a
                                            href=""
                                            className="
                                                text-sm
                                                font-medium
                                                transition
                                                hover:text-gray-500
                                            "
                                        >
                                            {project.correo}
                                        </a>

                                    </div>

                                </div>


                                {/* UBICACIÓN */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            size-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                            text-white
                                        "
                                    >
                                        <FiMapPin className="size-5" />
                                    </div>

                                    <div>

                                        <span
                                            className="
                                                block
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-gray-500
                                            "
                                        >
                                            Ubicación
                                        </span>

                                        <span className="text-sm font-medium">
                                            {project.direccion}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </Container>

        </main>
    );
}

export default Contacto;