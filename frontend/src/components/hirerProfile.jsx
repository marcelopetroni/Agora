import React, { useState } from 'react';
import CountrySelector from './countrySelector';

const hirerProfile = () => {

    const [country, setCountry] = useState('');

    return (
        <> 
        <div className='ag-flex ag-flex-col ag-ml-32 ag-my-10 ag-h-fit '>
            <div className='ag-flex  ag-border-b ag-right ag-pb-10 ag-border-gray-300'>
                <h1 className='ag-font-amiko ag-text-3xl ag-font-bold'>Informações pessoais</h1>
            </div>
            <div className='ag-flex ag-flex-row ag-w-full ag-mt-14 ag-justify-center'>
                <div className='ag-flex ag-flex-col  ag-justify-center ag-items-center ag-gap-4 ag-mr-16'>
                     <img src="https://placehold.co/400" alt="" className='ag-h-64 ag-rounded-full' />
                     <input type="file" name="myimage" id="255" />
                </div>
               <div className='ag-flex ag-flex-col ag-gap-5'>
                <div className='ag-grid ag-grid-cols-4 ag-gap-5 ag-w-full'>
                    <div className='ag-flex ag-flex-col ag-gap-4 ag-col-span-2'>
                        <h1 className='ag-font-amiko ag-font-bold ag-text-md '>Nome Completo</h1>
                        <input type="text" name="name" id="1" className='ag-px-5 ag-py-2 ag-rounded-xl ag-border ag-border-gray-200'/>
                    </div>
                    <div className='ag-flex ag-flex-col ag-gap-4'>
                        <h1 className='ag-font-amiko ag-font-bold ag-text-md'>Data de Nascimento</h1>
                        <input type="date" name="date-birth" id="2" className='ag-px-5 ag-py-2 ag-rounded-xl ag-border ag-border-gray-200' />
                    </div>
                    <div className='ag-flex ag-flex-col ag-gap-4'>
                        <h1 className='ag-font-amiko ag-font-bold ag-text-md'>País</h1>
                        <CountrySelector value={country} onChange={setCountry} />
                    </div>
                </div>
                <div className='ag-grid ag-grid-cols-4 ag-gap-5 ag-w-full'>
                    <div className='ag-flex ag-flex-col ag-gap-4 ag-col-span-2'>
                        <h1 className='ag-font-amiko ag-font-bold ag-text-md'>País</h1>
                        <input type="email" name="email" id="3" className='ag-px-5 ag-py-2 ag-rounded-xl ag-border ag-border-gray-200' />
                    </div>
                    <div className='ag-flex ag-flex-col ag-gap-4'>
                        <h1 className='ag-font-amiko ag-font-bold ag-text-md'>Senha</h1>
                        <input type="password" name="senha" id="4" className='ag-px-5 ag-py-2 ag-rounded-xl ag-border ag-border-gray-200'/>
                    </div>
                    <div className='ag-flex ag-justify-center ag-items-end'>
                        <button type="button" className='ag-bg-lightpurple ag-px-6 ag-py-4 ag-rounded-xl ag-text-white ag-font-amiko'>Mudar Senha</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default hirerProfile