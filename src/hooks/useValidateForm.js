import {useEffect, useRef, useState} from 'react';

const useValidateForm = () => {
    const [inputStatus, setInputStatus] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [disable, setDisabled] = useState(true)
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        disableElement(formValidation())
    }, [inputValue])

    const disableElement = (status) => {
        setDisabled(prevDisabled => {
            prevDisabled = status
            return prevDisabled
        });
    }

    const onChangeInput = (value) => {
        value = value.target.value.replace(/[^\d]/g, '').replace(/\s/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ')

        setInputValue(prevInputValue => {
            prevInputValue = value
            return prevInputValue
        })
    }

    const formValidation = () => {
        if (inputValue === '') {
            setInputStatus(prevInputStatus => {
                prevInputStatus = !inputStatus
                return prevInputStatus
            })
            return true
        } else {
            setInputStatus(false)
            return false
        }
    }

    return {
        disableElement,
        onChangeInput,
        inputStatus,
        inputValue,
        disable
    }
}

export default useValidateForm