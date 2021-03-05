import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { website: '', message: '' }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  }

  async submitForm(event) {
    event.preventDefault()

    const resp = await window.fetch('http://localhost:3030', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Accept: 'application/json',
        Cache: 'no-cache',
      },
      body: JSON.stringify({ website: this.state.website }),
    });

    const data = await resp.json();
    this.setState({ message: data.website })

    setTimeout(() => {
      this.setState({ message: '', website: '' })
    }, 750)
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
