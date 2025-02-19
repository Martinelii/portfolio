import CardStack from "../cards/cardStacks/CardStack"

function Sobre() {
    return (
        <section id="about" className="py-20">
            <div className='px-4 max-w-7xl mx-auto'>
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Sobre Mim</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Desenvolvedor Full Stack, entusiasta de inteligência Artificial, com habilidades em Mecatrônica.
                            Graduado no curso de Tecnologia em Análise e Desenvolvimento de Sistemas pela FATEC São Caetano do Sul
                            e estudante do Bootcamp Java Full Stack ofertado pela Generation Brasil.
                        </p>

                        <p>
                            Possuo conhecimento nas principais tecnologias do mercado, sendo elas, Java, Spring Boot, MySQL, metodologia ágil SCRUM
                            e outras. Com experiências de voluntariado na Faculdade, onde trabalhamos com insight do mercado para desenvolvimento
                            de um sistema interno; e experiências na indústria obtidas durante meu estágio técnico, como análise e solução de problemas,
                            organização e trabalho em equipe. Estou à procura de uma oportunidade para agregar, colaborar e continuar desenvolvendo minhas habilidades.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <CardStack area="Backend" stacks="Java, Spring tools"/>
                        <CardStack area="Frontend" stacks="React, Tailwind CSS, JavaScript"/>
                        <CardStack area="Banco de Dados" stacks="MySQL, PostgreSQL, MariaBD, FireBase"/>
                        <CardStack area="DevOps" stacks="Docker"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre