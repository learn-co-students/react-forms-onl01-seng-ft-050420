// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault() // without this the page will redirect
//     let formData = { firstName: this.state.firstName,
//     lastName: this.state.lastName } // putting the form data together based on values stored in state
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//     //this.sendFormDateSomewhere(formData)
//   }

//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }

//   render() {
//     return (
//       <div>
//       <form onSubmit={event => this.handleSubmit(event)}>
//         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//         <input type="submit"/>
//       </form>
//       {this.listOfSubmissions()}
//       </div>
//     )
//   }
// }

// export default Form;

//with different inputs if we want to get access to their values we will either
//for <input>, <textarea>, and <option>, we use value
//for <input type="checkbox"> and <input type="radio">, we use checked
//----------------------------
import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name = "firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name = "lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}
 
export default Form;