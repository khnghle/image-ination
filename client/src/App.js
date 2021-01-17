import React, {Component} from 'react';
import {NavBar, AllImages} from './components'
import './styles/app.css'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {images: [], filter: '', filteredImage : []}
    this.setFilter = this.setFilter.bind(this)
    this.onSubmitFilter = this.onSubmitFilter.bind(this) 
  }

  componentDidMount () {
    this.callApi()
      .then(res => this.setState({images: res, filteredImage: res}))
      .catch(err => console.log(err))
  }

  async callApi () {
    const res = await axios.get('/api')
    const body = await res.data
    if(res.status !== 200) throw Error(body.message)
    return body
  }

  setFilter (evt) {
    evt.preventDefault()
    const lowercaseName = evt.target.value.toLowerCase()
    this.setState({filter: lowercaseName})
  }

  onSubmitFilter(evt) {
    evt.preventDefault()
    const {images, filter} = this.state
    const filtered = images.filter(currImg => currImg.name.toLowerCase().includes(filter))
    this.setState({filteredImage: filtered, filter: ''})
  }

  render () {
    return (
      <div>
        <NavBar filter={this.state.filter} setFilter={this.setFilter} onSubmitFilter={this.onSubmitFilter}/>
        <AllImages images={this.state.filteredImage}/>
      </div>
    )
  }
}

export default App;
