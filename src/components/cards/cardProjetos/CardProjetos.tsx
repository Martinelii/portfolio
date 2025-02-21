interface cardProjetosProps{
    img: string
    titulo: string
    descricao: string
    link: string
}

function CardProjetos(props: cardProjetosProps) {
    return (
        <div className="rounded-lg overflow-hidden">
            <div>
                <img src={props.img} alt="x" 
                className="object-cover h-48 w-full"/>
            </div>
            <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-2">{props.titulo}</h3>
                <p className="text-sm text-gray-600 mb-4">{props.descricao}</p>
                <a href={props.link} target="_blank">
                <button className="py-1 px-4 cursor-pointer rounded-md border text-sm border-gray-200 text-gray-900
                                    hover:bg-gray-100">
                    Ver Projeto</button>
                </a>
            </div>
        </div>
    )
}

export default CardProjetos