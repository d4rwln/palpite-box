import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const notas = [0, 1, 2, 3, 4, 5];
    const [Nota, setNota] = useState('');
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Whats, setWhats] = useState('');

    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () => {
        const form = {
            Nome,
            Email,
            Whats,
            Nota
        }
        try {
            const response = await fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) { }
    }

    return (
        <div className='px-5  pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
            <p className='text-center'>O restaurante x sempre busca por atender melhor seus clientes.<br />
            Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!sucess && <div className=' mx-auto '>
                <input value={Nome} onChange={(e) => { setNome(e.target.value) }} placeholder='Nome' type='text' className='shadow p-4 block bg-blue-200 my-2 w-full' />
                <input value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='E-mail' type='text' className='shadow p-4 block bg-blue-200 my-2 w-full' />
                <input value={Whats} onChange={(e) => { setWhats(e.target.value) }} placeholder='Whatsapp' type='text' className='shadow p-4 block bg-blue-200 my-2 w-full' />
                <label>Nota:</label>
                <div className='flex py-2'>
                    {notas.map(nota => {
                        return (
                            <div value={nota} className='px-2'>
                                <label>{nota}</label>
                                <input onChange={e =>{setNota(e.target.value)}} type='radio' name='nota' value={nota} />
                            </div>
                        )
                    })}
                </div>

                <button onClick={save} className='w-full my-2   bg-blue-400 px-6 py-4 hover:shadow'>Salvar</button>
            </div>}
            {sucess && <div className='w-1/2 mx-auto '>
                <p className='text-center bg-blue-200 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir
                </p>


                {/* condicional, se verdade apresentar o HTML seguinte */}
                {retorno.showCoupon &&
                    <div className='text-center border p-4 mb-4'>
                        Seu Cupom <br />
                        <span className='font-bold block '>{retorno.Cupom}</span>
                    </div>
                }
                <div className='text-block border text-center px-4 py-3 mb-2'>
                    {retorno.Promo}<br />
                    <p className='italic font-bold'>Tire um print e apresente ao garçom</p>
                </div>


            </div>
            }

        </div>
    )
}

export default Pesquisa