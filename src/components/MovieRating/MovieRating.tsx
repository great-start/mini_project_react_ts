import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating';

export function MovieRating() {

    const [rating, setRating] = useState(50);

    const handleRating = (rate:any) => {
        setRating(rate)
    }

    return (
        <div>
            <Rating
                onClick={handleRating}
                ratingValue = {rating}
                size={18}
                iconsCount={10}
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo'
            />
        </div>
    );
}