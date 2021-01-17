import React, { Component } from 'react';
import SingleImage from './singleImg';
import axios from 'axios'


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
    const res = await axios.get('/api')
    const body = await res.data
    if(res.status !== 200) throw Error(body.message)
    return body
  }

  render () {
    const {images} = this.state
    return (
      <section className="flex flex-row flex-wrap p-5">
        {images.map(currImg => <SingleImage info={currImg} key={currImg.id}/>)}
      </section>
    );

  }
}

export default Images;
