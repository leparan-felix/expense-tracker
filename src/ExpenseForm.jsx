import React from 'react'

function ExpenseForm() {
  return (
    <div>
      <form action="">

        <input type="text"  placeholder='Enter expese name '/>
        <input type="text"  placeholder='Enter expense description' />
        <input type="text"  placeholder='Enter expense category'/>
        <input type="text"  placeholder='Amount'/>
        <button>submit</button>
      </form>
</div>
  )
}

export default ExpenseForm
