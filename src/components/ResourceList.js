import React, { Component } from 'react'
import axios from 'axios';

class ResourceList extends Component {
  state = {
    resources: []
  }

  async componentDidMount(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    this.setState({
      resources: response.data
    })
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      this.setState({
        resources: response.data
      })
    }
    // We need to update since ComponentDidMount is mounted once. We need to update the lifecycle method when the component rerenders
  }

  render() {
    return (
      <div>
        {this.state.resources.length}
      </div>
    )
  }
}

export default ResourceList;
