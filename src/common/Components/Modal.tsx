import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import style from 'Styles/Common/modal.less';

interface IProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

type TProps = React.PropsWithChildren<IProps>;

export const Modal: React.FC<TProps> = ({isOpen, onClose, children, title}) => (
    isOpen ? ReactDOM.createPortal(
            <div className={style.modal}>
                <div className={style.content}>
                    <div className={style.header}>
                        <h2>{title}</h2>
                        <div className={style.close} onClick={onClose} />
                    </div>
                    <div className={style.body}>
                        {children}
                    </div>
                    <div className={style.footer}>

                    </div>
                </div>
            </div>
        ,
        document.querySelector("#modal-root")
    ) : null
);

export const useModal = () => {
    const [isShowModal, setIsShow] = useState(false);

    const handleShowModal = () => {
        setIsShow(!isShowModal);
    };
  
    return {isShowModal, handleShowModal};
}; 
