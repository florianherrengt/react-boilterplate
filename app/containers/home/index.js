import React from 'react';
import { connect  } from 'react-redux';
import { getUser } from '../../modules/user';

export class Home extends React.Component {
    componentWillMount () {
        this.props.getUser();
    }
    render() {
        const { user } = this.props;
        return <div>Welcome { user && user.username }</div>;
    }
}

const mapDispatchToProps = {
    getUser 
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

