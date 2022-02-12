import ReactDOM from 'react-dom';

const Portal = ({children}) => {
    const Portal = document.getElementById('modal-root')
    return ReactDOM.createPortal(children, Portal)
}

export default Portal;