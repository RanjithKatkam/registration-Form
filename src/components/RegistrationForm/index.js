import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    input1: false,
    input2: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({input1: true})
    } else if (lastName === '' && firstName !== '') {
      this.setState({input2: true})
    } else {
      this.setState({
        input2: true,
        input1: true,
      })
    }
  }

  onBlur1 = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({input1: true})
    } else {
      this.setState({input1: false})
    }
  }

  onBlur2 = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({input2: true})
    } else {
      this.setState({input2: false})
    }
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  render() {
    const {input1, input2, isSubmitted, firstName, lastName} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Registration</h1>
          {isSubmitted ? (
            <div className="form1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="image"
              />
              <p className="label">Submitted Successfully</p>
              <button
                className="button"
                onClick={this.submitAnotherResponse}
                type="button"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.onSubmitForm} className="form">
              <label className="label" htmlFor="input2">
                FIRST NAME
              </label>
              <input
                className="input"
                placeholder="First Name"
                value={firstName}
                id="input1"
                onBlur={this.onBlur1}
                onChange={this.onChangeFirstName}
                type="text"
              />
              {input1 && <p className="errorMsg">Required</p>}
              <label className="label" htmlFor="input2">
                LAST NAME
              </label>
              <input
                className="input"
                placeholder="Last Name"
                value={lastName}
                id="input2"
                onBlur={this.onBlur2}
                onChange={this.onChangeLastName}
                type="text"
              />
              {input2 && <p className="errorMsg">Required</p>}
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
