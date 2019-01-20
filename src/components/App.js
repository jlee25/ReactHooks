import React, { useState } from 'react'
import ResourceListWithHooks from './ResourceListWithHooks';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  // destructuring an array
  // setResource is similiar to setState
  // useState is a function from react
  // ('posts') initial value
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceListWithHooks resource={resource} />
    </div>
  )
}

export default App;
