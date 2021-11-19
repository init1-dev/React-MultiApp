import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {

    const isMounted = useRef(false);
    const [state, setState] = useState({ data: null, loading: true, error: null });
    const length = useRef(0);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {
        
        fetch( url )
            .then( res => res.json() )
            .then( data => {

                
                if( isMounted.current ) {
                        length.current = data.length;
                        
                        setState({
                            data,
                            loading: false,
                            error: null
                        });
                    } else {
                        console.log('setState no llamado');
                    }
                
            })

            return () => {
                setState({ data: null, loading: true, error: null });
            };
            
    }, [ url ]);

    return {
        state,
        length
    };

};
