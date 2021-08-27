import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class BadgeDetailsContainer extends React.Component {
    //hay que traer esos datos
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    //traer los datos cunado el componente ya esta listo
    componentDidMount() {
        this.fetchData() 
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(
                //esto lo obtenemos por React Router
                this.props.match.params.badgeId
            )
            this.setState({loading: false, data: data})
        }catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    render() {

        if (this.state.loading){
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }
        
        return (
            <BadgeDetails badge={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer;