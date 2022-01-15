import React from 'react';
import logo from './logo.svg';
import ListItem from './ListItem';
import './App.css';


function App() {
  const [state, setState] = React.useState<{ selections: string[] }>({ selections: [] });
  const selections = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9']

  function handleCheckboxChange(key: string) {
    let sel = state.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setState({
      selections: sel,
    })
    console.log(state)
  }

  function checkboxItems() {
    return (
      <React.Fragment>
        {selections.map((selection) => (
          <ListItem
            key={selection}
            text={selection}
            handleOnChange={() => handleCheckboxChange(selection)}
            selected={state.selections.includes(selection)}
          ></ListItem>
        ))}
      </React.Fragment>
    )
  }


  return (
    <div className="App">
      <div style={{width: '270px', overflowY: 'scroll', margin: 'auto'}}>
    {checkboxItems()}
    <p>{state.selections.toString()}</p>
    </div>
    </div>
  );
}

export default App;
