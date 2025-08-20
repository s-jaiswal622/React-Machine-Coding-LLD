import React from 'react';

export const MemeCard = ({details}) => {
    const {url, title} = details;
    return (
        <div className={"border-black p-5 m-5 border rounded-lg w-80 h-80"}>
           <img className='w-64 h-64' src={url} alt="meme"/>
           <p>{title}</p>
        </div>
    )
}