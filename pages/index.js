import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <p className='mt-12 text-center'>
                O restaurante x sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>

            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold hover:shadow '> Dar opinião ou sugestão </a>
                </Link>

            </div>
            <p className='my-12 text-center'>
                Mensagem de desconto
            </p>
    


        </div>
    )
}

export default Index 