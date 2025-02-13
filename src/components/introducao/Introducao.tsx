
export default function Introducao() {
    return (
        <>
            <section className='py-20'>
                <div className='flex flex-col md:flex-row px-4 items-center justify-center md:justify-around max-w-7xl mx-auto'>
                    <div>
                        <img
                            src="x.png"
                            alt="Keven Martineli"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-gray-200 shadow-lg mb-4 mr-4"
                        />
                    </div>
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl md:text-6xl sm:text-5xl text-gray-900 font-bold mb-4'>
                            Keven Martineli</h1>
                        <p className='text-xl md:text-3xl sm:text-2xl text-gray-600 mb-4'>
                            Desenvolvedor Full Stack</p>

                        <button className="py-3 px-6 cursor-pointer rounded-xl border font-medium bg-gray-900 text-white hover:bg-gray-700">
                            View My Work</button>
                    </div>
                </div>
            </section>
        </>
    )
}
