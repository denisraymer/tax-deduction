import React from 'react';
import ReactDOM from 'react-dom';
import IconClose from '../assets/images/icon-close.svg';

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
            <div className='modal'>
                <div className='modal__header'>
                    <div className='modal__title'>Налоговый вычет</div>
                    <button type='button' className='button button_link modal__close-button' data-dismiss='modal'
                            aria-label='Close'
                            onClick={hide}>
                        <img src={IconClose} alt='Close' aria-hidden='true'/>
                    </button>
                </div>
                <div className='modal__content'>
                    <div className='modal__paragraph'>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputSalary' className='form-group__label'>Ваша зарплата в месяц</label>
                        <input type='text' className='form-group__input' placeholder='Введите данные' id='inputSalary'/>
                    </div>
                    <button className='button button_link'>Рассчитать</button>
                    <div className='modal__title modal__title_small'>Итого можете внести в качестве досрочных:</div>
                    <div className='form-check modal__form-check'>
                        <label className='form-check__label'>
                            78 000 рублей <span className='form-check__year'>в 1-ый год</span>
                            <input className='form-check__input' type='checkbox'/>
                            <span className='form-check__mark'/>
                        </label>
                    </div>
                    <div className='tag-group modal__tag-group'>
                        <div className='tag-group__title'>Что уменьшаем?</div>
                        <button type='button' className='button button_tag button_tag-active'>Платёж</button>
                        <button type='button' className='button button_tag'>Срок</button>
                    </div>
                </div>
                <div className='modal__footer'>
                    <button type='button' className='button modal__footer-button'>Добавить</button>
                </div>
            </div>
        </div>
    </React.Fragment>
    , document.body
) : null;

export default Modal;