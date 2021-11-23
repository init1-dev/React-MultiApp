import React from 'react';
import { useFetch } from '../../hooks/useFetch';
// import { useCounter } from '../../hooks/useCounter';
import { QuoteControl } from './QuoteControl';

export const MultipleCustomHooks = () => {

    const { state, length } = useFetch(`https://www.breakingbadapi.com/api/quotes`);
    const { data, loading } = state;

    return (
        <div className="mt-3">
            <QuoteControl
                data={ data }
                loading={ loading }
                length={ length }
            />
        </div>
    )
}
