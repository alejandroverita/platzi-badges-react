import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends React.Component {
  //inicializa el estado del objeto cambiando el componente de incontrolado a controlado
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({loading: true, error: null})

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading: false, form: data})
    } catch(error) {
      this.setState({loading: false, error: error})
    }
  }

  handleChange = e => {

    /* console.log({
        name: e.target.name,
        value: e.target.value,
    }) */
    this.setState({
      form: {
        //para evitar que se sobrescriba
        ...this.state.form, 
        //guarda la informacion del respectivo input
        [e.target.name]: e.target.value, 
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({loading: true, error: null})

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false});

      /* en caso de que haya exito queremos regresar a la LISTA DE BADGES */
      this.props.history.push('/badges')


    } catch(error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit_hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Email'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                //se le pasa los valores del formulario con formValues al BadgeForm.js
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default BadgeEdit;
