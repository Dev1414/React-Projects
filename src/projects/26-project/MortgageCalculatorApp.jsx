import React,{useState} from 'react'
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';

function MortgageCalculatorApp() {
  

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment)
    return loanAmount
  }

  function calculateMonthlyPayemnt() {
    function percentToDecimal(percent){
      return percent / 12 / 100;
    }

    function yearsToMonths(years){
      return years * 12;
    }

    setMonthlyPayment(
      ( percentToDecimal(interestRate) * (loanAmount) / 
        (1 - Math.pow(1 + percentToDecimal(interestRate), -yearsToMonths(loanDuration)))
      )
    )
    return monthlyPayment;
  };

  const [homeValue, setHomeValue] = useState('');
  const [downPayment, setDownPayemt] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  let alertClass;

  monthlyPayment 
  ? (alertClass = 'alert-danger')
  : (alertClass = 'alert-success')

  return (
    <div className='container mt-4 card' style={{width: 500}}>
      MortgageCalcApp
      <Title/>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className='d-grid' style={{gridTemplateColumns: '1fr 1fr', gap: 10}}>
          <FormGroup 
          labelText={'Home Value'} 
          inputType={'number'} 
          placeholder={'Enter the value of the home'} 
          values={homeValue}
          onInput={(e) => setHomeValue(e.target.value)}
          onKeyUp={calculateLoanAmount}
          />

          <FormGroup 
          labelText={'Down payment'} 
          inputType={'number'} 
          placeholder={'Enter your funds'} 
          values={downPayment}
          onInput={(e) => setDownPayemt(e.target.value)}
          onKeyUp={calculateLoanAmount}
          />
        </div>

        <FormGroup 
        labelText={'Loan Amount'} 
        inputType={'number'} 
        placeholder={'The calculated amount of loan'} 
        values={loanAmount} 
        readOnly={true} 
        className={'bg-light'}/>

        <div className='d-grid' style={{gridTemplateColumns: '1fr 1fr', gap: 10}}>
          <FormGroup 
          labelText={'Interest Rate %'} 
          inputType={'number'} 
          placeholder={'Enter the interest rate'} 
          values={interestRate}
          onInput={(e) => setInterestRate(e.target.value)}
          />

          <FormGroup 
          labelText={'Loan Duration (years)'} 
          placeholder={'Enter the duration of your loan in years'} 
          values={loanDuration}
          onInput={(e) => setLoanDuration(e.target.value)}/>
        </div>

        <Button btnClass={'btn-info btn-block'} text={'Calculate'} onClick={calculateMonthlyPayemnt}/>

        <h4 className={`${(alertClass= 'alert-danger')}`}  style={{width:'auto', margin: '1rem 0'}}>
          {monthlyPayment ? `Monthly Payment : ${monthlyPayment.toFixed(2)}` : 'complete all fields'}
        </h4>

        
      </form>
    </div>
  )
}

export default MortgageCalculatorApp;
