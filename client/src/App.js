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
    this.onAddImage = this.onAddImage.bind(this)
    this.onDelete = this.onDelete.bind(this)
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

  onAddImage (newInfo) {
    this.setState({images: [...this.state.images, newInfo], filteredImage: [...this.state.images, newInfo]})
  }

  onDelete (key){
    const deletedImage = this.state.images.filter(img => {return img.key !== key})
    this.setState({images: deletedImage, filteredImage: deletedImage})
  }

  render () {
    return (
      <div>
        <NavBar onAddImage={this.onAddImage} filter={this.state.filter} setFilter={this.setFilter} onSubmitFilter={this.onSubmitFilter}/>
        <AllImages images={this.state.filteredImage} onDelete={this.onDelete}/>
      </div>
    )
  }
}

export default App;
