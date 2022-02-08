import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating';

export default function MovieRating() {

    const [rating, setRating] = useState(50) // initial rating value

    const handleRating = (rate:any) => {
        setRating(rate)
    }

    return (
        <div >
            <Rating
                onClick={handleRating}
                ratingValue = {rating}
                size={18}
                iconsCount={10}
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
            />
        </div>
    );
}