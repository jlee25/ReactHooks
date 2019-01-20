import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data) // Same as set state
  }

  useEffect(() => { // access to lifecycle methods
    fetchResource(resource)
  }, [resource]); // Originally, the resource is 'posts' and when we click todos, its a different value than posts so the arrow function gets called on the rerender.

  // promises and async is not supported so we have to call a second function for the request

  return resources
}

export default useResources;