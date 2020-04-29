import React from 'react'

import moment from  'moment';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
constructor(props){
  super(props)

  this.state ={
          description : props.expense ? props.expense.description : '',
          amount: props.expense ? props.expense.amount : '',
          note: props.expense ? props.expense.note : '',
          createAt: props.expense ? moment(props.expense.createAt) : moment() ,
          focused:false ,
          error:'',
        }
}

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({description}))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    this.setState(() => ({amount}))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({note}))
  }
  submitHandler = (e) => {
    e.preventDefault()
    if(!this.state.description ||!this.state.amount){


      this.setState(() => ({error:'description and amount must be filled'}))

    }else{

      const {description, note, amount} = this.state
      const createAt = this.state.createAt.valueOf()
      this.props.onSubmit({
        description,note,amount,createAt
      })

    }

  }


  render (){
    return (

        <form className ='form' onSubmit={this.submitHandler}>
           {this.state.error && <p className='form__error'>{this.state.error}</p>}
           <input
             className='text-input'
             placeholder='description'
             type='text'
             autoFocus
             value={this.state.description}
             onChange = {this.onDescriptionChange}
           />
         <input
             className='text-input'
             placeholder='amount'
             type='number'
             autoFocus
             value={this.state.amount}
             onChange = {this.onAmountChange}
            />
            <SingleDatePicker
                date={this.state.createAt} // momentPropTypes.momentObj or null
                onDateChange={createAt => {  if(createAt) {this.setState({ createAt })}}} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                numberOfMonths={1}
                isOutsideRange = {()=>false}
             />

          <textarea
             className='textarea'
             placeholder='note'
             autoFocus
             type='text'
             value={this.state.note}
             onChange = {this.onNoteChange}>
          </textarea>
          <div>  <button  className='button'>Save Expense</button></div>

      </form>

    )
  }
}

export default ExpenseForm
