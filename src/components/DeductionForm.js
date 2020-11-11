import React, {useEffect, useRef, useState} from 'react';

function DeductionForm() {
    const firstRender = useRef(true)
    const [disable, setDisabled] = useState(true)
    const [formStatus, setFormStatus] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        setDisabled(formValidation());
    }, [inputValue])

    const onChangeInput = (event) => {
        let value = event.target.value.replace(/[^\d]/g, '').replace(/\s/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ')

        setInputValue(prevInputValue => {
            prevInputValue = value
            return prevInputValue
        })
    }

    const formValidation = () => {
        if (inputValue === '') {
            setFormStatus(prevStatusForm => {
                prevStatusForm = !formStatus
                return prevStatusForm
            })
            return true
        } else {
            setFormStatus(false)
            return false
        }
    }

    return (
        <React.Fragment>
            <div className={formStatus ? 'form-group form-group_error' : 'form-group'}>
                <label htmlFor='inputSalary' className='form-group__label'>Ваша зарплата в месяц</label>
                <input
                    type='text'
                    className='form-group__input'
                    id='inputSalary'
                    value={inputValue}
                    placeholder='Введите данные'
                    onChange={event => onChangeInput(event)}
                />
                {formStatus && <div className='form-group__message'>Поле обязательно для заполнения!</div>}
            </div>
            <button className='button button_link' disabled={disable}>Рассчитать</button>
        </React.Fragment>
    )
}

export default DeductionForm
