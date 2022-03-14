import './App.css';

import EntryComponent from './EntryComponent/EntryComponent';
import EntryFormComponent from './EntryFormComponent/EntryFormComponent';
import { getClient} from './Clients/getClient';
import { useState, useEffect } from 'react'
// import postClient from './Clients/postClient';


function App() {

  const [blogData , setblogData] = useState([])
  // const [entries, setEntries] = useState(array)


  useEffect(() => {
    getClient.getEntries()
    .then( response => {
      let dataStructured = []
      // console.log(response.items)
      response.items.map( (item) =>{
        let data = {
            author :item.fields.author,
            title: item.fields.title,
            content: item.fields.content
        }
        // console.log(item)
        dataStructured.push(data);
      })
      setblogData(dataStructured);
      })
  }, [])
  

  const addNewEntry = (entry) => {
    // postClient.getOrganization('vtm0lvrrmyij')
    // .then((organization) => organization.upsertAppDetails('2FOpn2ZJBUk4GSHndPKI4F', {
    //   fields: {
    //     author: entry.author,
    //     content: entry.content,
    //     title: entry.title,
    //   }
    // }))
    console.log(entry)
    const newEntries = [...blogData, entry]
    setblogData(newEntries)
  }

  return (
    <div>
      <EntryFormComponent postNewEntry={addNewEntry} />
      {
        blogData.map(element => (
          <EntryComponent key={element.title} title={element.title} content={element.content} author={element.author} />
        ))
      }
    </div>
  )
}

export default App;
