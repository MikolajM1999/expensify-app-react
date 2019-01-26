import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenses, expensesCount }) => (
    <div>
        <h1>{`Vieving ${expenses.length} ${expenses.length === 1 ? 'expense' : 'expenses'} totalling ${numeral(expensesCount / 100).format('$0,0.00')}`}</h1>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses: visibleExpenses,
        expensesCount: selectExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary)