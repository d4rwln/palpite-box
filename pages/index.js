import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then( res => res.json())

const Index = () => {
    const {data, error} = useSWR ('/api/get-promo', fetcher)
    return (
        <div className='px-4'>
            <p className='mt-12 text-center'>
                O restaurante x sempre busca por atender melhor seus clientes.
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>

            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold hover:shadow '> Dar opinião ou sugestão </a>
                </Link>

            </div>

            {!data  && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&  
            <p className='my-12 text-center'>
                {data.message}
            </p>
            }
    


        </div>
    )
}

export default Index 