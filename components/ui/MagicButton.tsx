import React from 'react'

export const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{ 
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void;
    otherClasses?: string
}) => {
    return (
        <button className="p-[3px] relative my-5 w-full md:w-60 md:mt-10">
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-3 py-1 bg-black rounded-[5px]  relative group transition duration-200   text-purple hover:bg-transparent hover:text-white   ${otherClasses}`}>

        {position === 'left' &&  icon}
        {title}
        {position === 'right' &&  icon}
        </div>
        </button>
    )
}
