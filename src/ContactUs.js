import React from 'react';

class ContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  }

  emailOnChange = (e) => {
    this.setState({ email: e.target.value });
  }

  phoneOnChange = (e) => {
    this.setState({ phone: e.target.value });
  }

  onSubmit = (e) => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();

    // Retrieve the contact us information from state.
    const { name, email, phone } = this.state;

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date(),
    };

    // For now, just log the contact us information to the console
    // though ideally, we'd persist this information to a database
    // using a REST API.
    console.log(contactUsInformation);

    // Reset the form state.
    this.setState({
      name: '',
      email: '',
      phone: '',
    });
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={this.nameOnChange} value={name} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' onChange={this.emailOnChange} value={email} />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone' type='text' onChange={this.phoneOnChange} value={phone} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
