import React,{useEffect, useRef, useState} from 'react'
import FormGroup from '../components/FormGroup'
import CompoundInterestRateCalc from './CompoundInterestRateCalc'

function CompoundInterestRateApp() {

    const [compound, setCompound] = useState({
        principleAmount: '',
        monthlyContribution: null,
        interestRate: '',
        years: ''
    })

   const inputPrinciple = useRef(null)
    useEffect(() => {
        inputPrinciple.current.focus()
    }, [])

    document.body.style.background = 'pink'

    return (
        <div className='container'>
            <div className="card card-primary bg-warning shadow-md text-dark m-auto mt-4"
                style={{ maxWidth: 300 }}
            >
                <div className='card-body'>
                    <FormGroup
                    labelText={'Priciple amount $'}
                    inputType={'number'}
                    values={compound.principleAmount}
                    onChange={(e) => setCompound({...compound, principleAmount: e.target.value})} 
                    reference={inputPrinciple}
                    />

                    <FormGroup
                    labelText={'Monthly Contribution $'}
                    inputType={'number'}
                    values={compound.monthlyContribution}
                    onChange={(e) => setCompound({...compound, monthlyContribution: e.target.value})} 
                    />

                    <FormGroup
                    labelText={'Interest Rate $'}
                    inputType={'number'}
                    values={compound.interestRate}
                    onChange={(e) => setCompound({...compound, interestRate: e.target.value})} 
                    />

                    <FormGroup
                    labelText={'Years of investment'}
                    inputType={'number'}
                    values={compound.years}
                    onChange={(e) => setCompound({...compound, years: e.target.value})}
                    />

                </div>
                <div className="card-footer text-right fs-lg">
                    <CompoundInterestRateCalc 
                    principleAmount={compound.principleAmount}
                    interestRate={compound.interestRate}
                    monthlyContribution={compound.monthlyContribution}
                    years={compound.years}
                    />
                    $0.00
                </div>
            </div>
        </div>
    )
}

export default CompoundInterestRateApp;






















