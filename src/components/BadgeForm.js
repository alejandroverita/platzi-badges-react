import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        {/* FIRST NAME */}
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">{/* estilos de bootstrap */}
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              //value va a tener y desplegar cada uno de los input
              value={this.props.formValues.firstName}
            />
          </div>

          {/* LAST NAME */}
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>


          {/* JOB TITLE */}
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          {/* TWITTER USER */}
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {/* queremos desplegar algo condicionalmente */}
          {/* si existe un error ENTONCES monstramos el parrafo */}
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}

        </form>
      </div>
    );
  }
}

export default BadgeForm;
