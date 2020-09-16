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

  render() {
    const { name, email, phone } = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        <form>
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
