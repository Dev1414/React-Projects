import React,{useState, useRef, useEffect} from 'react'
import Title from '../components/Title'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'
import { BudgetStyle } from './components/styles/Budget.style'
import {v4 as uuidV4} from 'uuid'

const initialExpense = localStorage.getItem('expenses')
? JSON.parse(localStorage.getItem('expenses')) : []

export default function ExpenseCalculatorApp() {
    // state values
    // All expenses

    const [expenses, setExpenses] = useState(initialExpense) // Single Expense

    const [date, setDate] = useState('') 

    const [amount, setAmount] = useState('') // Single Amount

    const [charge, setCharge] = useState('') // Single Charge

    const [budget, setBudget] = useState('') // Single Budget

    const [id, setId] = useState(0);

    const changeBudget = (e) => {
        setBudget(e.target.value)
    }
    const handleCharge = (e) => {
        setCharge(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }

    let edit;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (date !== '' && charge !== '' && amount > 0){
            if(edit){
                let tempExpenses = expenses.map((item) => {
                    return item.id === id ? {...item, date, amount, charge} : item;
                })
                setExpenses(tempExpenses)
            } 
            else{
                const singleExpense = {id: uuidV4(), date, charge, amount}
                setExpenses(...expenses,singleExpense)
            }
        }
    }

    let inputBudget = useRef(null);

    useEffect(() => {
        inputBudget.current.value === '' && inputBudget.current.focus()
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses])

    return (
        <main className='container'>
            <Title text={'Expense Calculator'} />
            {/* Alert Comp */}

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2 1fr)', gap: '25px', margin: '1rem', width: 300}}>
                <aside>
                    <ExpensesForm 
                    date={date} charge={charge} amount={amount} 
                    handleAmount={handleAmount} handleCharge={handleCharge} handleDate={handleDate}
                    handleSubmit={handleSubmit}
                    />
                    <section className='card mt-2 bg-primary text-light'>
                        <div className='card-body'>
                            <BudgetStyle>
                                <h3>Budget : $</h3>
                                <input type="number" value={budget} onChange={changeBudget} ref={inputBudget}/>   
                            </BudgetStyle>
                            <h3 className='mb-1'>Total Expenses: $</h3>
                            {/* CalcEconomies */}
                            <h3>Economies: </h3>
                        </div>
                    </section>
                </aside>
                <section >
                    <ExpensesList expenses={expenses}/>
                </section>
            </section>
        </main>
    )
}


