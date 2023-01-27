import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 177, date: '2022-01-01'},{weight: 176, date: '2022-01-02'},{weight: 178, date: '2022-01-03'}])

  function addNewEntry (entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);  
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
