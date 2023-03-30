import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "New Laptop",
      amount: 11700,
      date: new Date(2021, 10, 24),
    },
    {
      id: "e2",
      title: "New Phone",
      amount: 6000,
      date: new Date(2018, 4, 20),
    },
    {
      id: "e3",
      title: "College Expenses",
      amount: 2000,
      date: new Date(2022, 10, 1),
    },
    {
      id: "e4",
      title: "ٌRoom Expenses",
      amount: 1000,
      date: new Date(2023, 2, 10),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
