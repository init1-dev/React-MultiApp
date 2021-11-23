import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import PropTypes from 'prop-types';

export const QuoteControl = ({ data, loading, length } ) => {

    const { counter, setCounter, increment, decrement, reset } = useCounter(0);
    const { author, quote } = (( !loading && data.length > 0 ) && data[ counter ] ) || {};

    if(data !== null ) {
        counter < 0 && setCounter(length.current - 1);
        counter > length.current - 1 && setCounter(0);
    }

    return (
        <div>
            <h1>&gt;&gt; { length.current || '' } Breaking Bad Quotes [{ counter + 1 }]</h1>
            <hr />

            { loading &&
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
            }

            { !loading &&
                    <>
                        <blockquote className="blockquote text-end">
                            <p className="quote"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                        
                        <div className="btn-group me-2">
                            <button
                                className="btn btn-primary"
                                onClick={ () => decrement() }
                            >
                                Anterior
                            </button>
                        </div>

                        <div className="btn-group me-2">
                            <button
                                className="btn btn-primary"
                                onClick={ () => reset() }
                            >
                                Reset
                            </button>
                        </div>

                        <div className="btn-group me-2">
                            <button
                                className="btn btn-primary"
                                onClick={ () => increment() }
                            >
                                Siguiente
                            </button>
                        </div>
                    </>
            }

        </div>
    )
}

QuoteControl.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    length: PropTypes.object.isRequired
}