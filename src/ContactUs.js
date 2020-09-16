import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone' type='text' />
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
