function TeamCard({ person }) {
    return (
        <article className="
            group
            overflow-hidden
        ">

            <div className="
                aspect-[4/5]
                overflow-hidden
                bg-gray-100
                rounded-lg
            ">
                <img
                    src={person.foto}
                    alt={person.nombre}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />
            </div>

            <div className="border-l my-6 px-6">

                <span className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-gray-400
                ">
                    {person.cargo}
                </span>

                <h3 className="
                    mt-2
                    text-xl
                    font-semibold
                    uppercase
                ">
                    {person.nombre}
                </h3>

                {person.descripcion && (
                    <p className="
                        mt-3
                        text-sm
                        leading-relaxed
                        text-gray-500
                        text-justify
                    ">
                        {person.descripcion}
                    </p>
                )}

            </div>

        </article>
    );
}

export default TeamCard;