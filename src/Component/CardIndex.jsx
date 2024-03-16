import { useEffect, useState } from 'react';
import Cards from './Cards';

const CardIndex = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="grid grid-cols-2 gap-5">
            {
                cards.map((card) =>(<Cards key={card.id} card={card}></Cards>) )
            }
            
        </div>
    );
};

export default CardIndex;