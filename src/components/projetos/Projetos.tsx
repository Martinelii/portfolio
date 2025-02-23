import CardProjetos from "../cards/cardProjetos/CardProjetos"

function Projetos() {
    return (
        <section id="project" className="py-20 bg-gray-100">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meus Projetos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardProjetos
                        img="https://i.imgur.com/ISx6TT9.png"
                        titulo="Travel with Me"
                        descricao="Aplicativo de carona compartilhada que permite os usuarios encontrarem e fornecerem caronas para diversos destinos"
                        link="https://github.com/orgs/gen-projects/repositories"
                    />
                    <CardProjetos
                        img="https://kzmgz3242tpnn1kjfazl.lite.vusercontent.net/placeholder.svg?height=300&width=300"
                        titulo="Blog Pessoal"
                        descricao="Aplicacação de Blog Pessoal, autenticação de usuarios e sistema de postagem"
                        link="https://github.com/Martinelii"
                    />
                    <CardProjetos
                        img="https://i.imgur.com/a4l5wpn.png"
                        titulo="Smart Stock"
                        descricao="Sistema de gerenciamento de estoque, solução para facilitar gestão de inventário seguindo uma abordagem em segurança da Informação"
                        link="https://martinelii.github.io/SmartStock-TCC/SmartStock/"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projetos