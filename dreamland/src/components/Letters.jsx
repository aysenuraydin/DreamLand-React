import React, { useState, useEffect } from 'react';
export const Letters = () => {
    const letters = ["A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

    return(
        <div className='grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-4 mx-2 pt-6 border-t border-gray-300 mt-6'>
            {letters.map((letter, index) => (
                <span key={index} className="m-1 p-2 bg-gray-200 text-gray-600 rounded-lg text-center cursor-pointer">
                    {letter}
                </span>
            ))}
        </div>
    )
}