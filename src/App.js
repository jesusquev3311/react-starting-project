import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
      {title: "hello world", amount: 23, date: new Date(2022,  2, 10)},
      {title: "Groseries", amount: 300, date: new Date(2022, 5, 23)},
      {title: "Snacks", amount: 75, date: new Date(2022, 6, 25)},
      {title: "Skins", amount: 100, date: new Date(2022, 6, 23)},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
