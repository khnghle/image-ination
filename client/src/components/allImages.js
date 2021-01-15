import React, { Component } from 'react';
import SingleImage from './singleImg'

class Images extends Component {

  state = {
    images : []
  }

  componentDidMount () {
    this.callApi()
      .then(res => this.setState({images: res}))
      .catch(err => console.log(err))
  }

  async callApi () {
    const res = await fetch('/api')
    const body = await res.json()
    if(res.status !== 200) throw Error(body.message)
    return body
  }

  render () {
    const {images} = this.state
    return (
      <div>
        {images.map(currImg => <SingleImage info={currImg} key={currImg.id}/>)}
      </div>
    );

  }
}

export default Images;