import {useState} from 'react';

const useCalculation = () => {
    const [earlyPayments, setEarlyPayments] = useState([])

    function onCalculation(salary) {
        salary = (salary * 12) * 0.13

        let array = [{annualTax: salary}]
        let maxDeduction = 260000

        if (maxDeduction > salary) {
            let i = 0

            while (maxDeduction > salary) {
                (maxDeduction -= salary) > salary ? array.push({annualTax: salary}) : array.push({annualTax: maxDeduction})
                ++i
            }
        }

        setEarlyPayments(prevEarlyPayments => {
            prevEarlyPayments = [...array]
            return prevEarlyPayments
        })
    }

    return {
        earlyPayments,
        onCalculation
    }
}

export default useCalculation