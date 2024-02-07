import { GiftItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridGif = ({ category }) => {
    
    const { images, isLoading} = useFetchGifs( category );

    return (
        <>
            <div className="category-container">
                <h3>{category}</h3>
            </div>
            
            {
                isLoading && ( <h2 className="is-loading">Cargando...</h2> )
            }
            <div className="card-grid">
                { images.map( ( image ) => (
                    <GiftItem 
                        key={image.id}
                        { ...image }
                    />
                    )
                )}
            </div>
        </>
    )
}