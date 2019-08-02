import React from 'react';

const Paginate = ({ cardsPerPage, totalCards }) => {
    const cardNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        cardNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {cardNumbers.map(cardd => (
                    <li>
                        <a href="!#">
                            {cardd}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Paginate;