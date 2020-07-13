import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
            <p className='text-center'>O restaurante x sempre busca por atender melhor seus clientes.<br />
            Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-1/4 mx-auto '>
                <label className='font-bold'>teste</label>
                <input type='text' className='p-4 block bg-blue-200 my-2 w-full'/>
            </div>

        </div>
    )
}

export default Pesquisa