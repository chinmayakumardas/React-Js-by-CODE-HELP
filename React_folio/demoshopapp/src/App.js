
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate'; 
import Card from './components/Card'

function App() {
  const response=[
    {
      itemName:'Nirma',
      itemDate:"11",
      itemMonth:"Aug",
      itemYear:"1998"
    },
    {
      itemName:'Surf Excel',
      itemDate:"12",
      itemMonth:"Sep",
      itemYear:"1999"
    },
    {
      itemName:'555',
      itemDate:"13",
      itemMonth:"Oct",
      itemYear:"2000"
    },
  ]
  return (
    <div>
    <Card>
      <Item name={response[0].itemName}>Price decreased</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} ></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello</div>
    </Card>
      
    </div>
  );
}

export default App;
