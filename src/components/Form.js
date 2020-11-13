import React from 'react';
import useValidateForm from '../hooks/useValidateForm';

function Form() {
    const {onChangeInput, inputValue, inputStatus, disable} = useValidateForm()

    return (
        <React.Fragment>
            <div className={inputStatus ? 'form-group form-group_error' : 'form-group'}>
                <label htmlFor='inputSalary' className='form-group__label'>Ваша зарплата в месяц</label>
                <input
                    type='text'
                    className='form-group__input'
                    id='inputSalary'
                    value={inputValue}
                    placeholder='Введите данные'
                    onChange={event => onChangeInput(event)}
                />
                {inputStatus && <div className='form-group__message'>Поле обязательно для заполнения!</div>}
            </div>
            <button className='button button_link' disabled={disable}>Рассчитать</button>
        </React.Fragment>
    )
}

export default Form
