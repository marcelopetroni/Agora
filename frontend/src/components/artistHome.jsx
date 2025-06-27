import { TbPencil } from "react-icons/tb";

const ArtistHome = () => {
    return(
        <>
        <div className='ag-flex ag-flex-col ag-my-10 ag-pb-10 ag-h-fit ag-border-b ag-border-gray-300'>
            <div className='ag-flex ag-flex-col ag-ml-60'>
                <h1 className='ag-font-amiko ag-text-3xl ag-font-bold'>Meu Portfólio</h1>
            </div >
        </div>
            <div className="ag-grid ag-ml-32 ag-grid-cols-4 ag-mt-10 ag-w-full ag-gap-10 ag-mb-10">
                <div className="ag-flex ag-justify-end ag-items-center">
                    <img src="https://placehold.co/400" alt="" className='ag-h-40 ag-rounded-full' />
                </div>
                <div className="ag-flex ag-flex-col ag-col-span-2">
                    <h1 className="ag-font-amiko ag-text-md">Biografia</h1>
                    <textarea name="biografia" id="1" className="ag-resize-none ag-h-40"></textarea>
                </div>
                <div className="ag-justify-end ag-ml-5">
                    <TbPencil  className="ag-cursor-pointer ag-h-14 ag-w-14 ag-p-2 ag-text-white  ag-bg-lightpurple ag-rounded-full"/>
                </div>
            </div>
            <div className="ag-grid ag-ml-60 ag-grid-cols-4 ag-mt-10 ag-w-full ag-gap-10 ag-mb-10">
            </div>
        </>
    )
}

export default ArtistHome
