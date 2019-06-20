import React, { Component } from 'react'
import axios from 'axios'

export default class WithoutExpress extends Component {
  constructor(props) {
    super(props)

    this.state = { website: '', message: 'Without Express' }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault()

    axios
      .post(
        'http://localhost:3030/',
        { website: this.state.website },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then(res => {
        setTimeout(() => {
          this.setState({ message: '', website: '' })
        }, 750)

        this.setState({ message: res.data })
      })
  }

  render() {
    return (
      <div className="App">
        <div
          style={{
            border: '1px solid black',
            height: '35px',
            marginBottom: '5px'
          }}
        >
          {this.state.message}
        </div>
        <form method="post" onSubmit={this.submitForm}>
          <input
            type="text"
            name="website"
            id="website"
            value={this.state.website}
            onChange={this.handleChange}
          />
          <button>Go!</button>
        </form>
      </div>
    )
  }
}
