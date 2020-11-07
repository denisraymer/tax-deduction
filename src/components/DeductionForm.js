import React from 'react';

function DeductionForm() {
    return (
        <React.Fragment>
            <div className='form-group'>
                <label htmlFor='inputSalary' className='form-group__label'>Ваша зарплата в месяц</label>
                <input type='text' className='form-group__input' placeholder='Введите данные' id='inputSalary'/>
            </div>
            <button className='button button_link'>Рассчитать</button>
        </React.Fragment>
    )
}

export default DeductionForm
