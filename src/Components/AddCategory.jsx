import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        onNewCategory( inputValue.trim() ); // Trim para eliminar espacios delante y atras.
        setInputValue('');
    }
      
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                onChange={onInputChange}
                value={inputValue}
            />
        </form>
    )
}