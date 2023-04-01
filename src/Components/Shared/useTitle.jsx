import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title ? `${title} - Car Doctor ` : 'Car Doctor'}`
    }, [title])
};

export default useTitle;