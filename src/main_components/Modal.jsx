import React, { useRef } from 'react';
import './Modal.scss'
import closeIcon from '../assets/icons/close.png'

function Modal({active, setActive}) {

    return (
        <div className={active ? 'modal--active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>                   
                <div className="modal__close">
                  <img src={closeIcon} alt="close-icon" onClick={() => setActive(false)} className="modal__close-icon" />
                </div>
    
    
                <h2 className="modal__title">Замовити консультацію</h2>
                <form className="modal__actions">
                    <input className="modal__actions-action form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                    <button className="modal__actions-action main-button">Замовити</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;