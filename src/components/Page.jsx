import React from 'react';
import NewFoodForm from './NewFoodForm';
import Fridge from './Fridge';

function Page() {
    return (
        <div className='Page'>
            <div className='page-background'>
                <NewFoodForm />
                <Fridge />
            </div>
        </div>
    )
}

export default Page