import { expect } from 'chai';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Home  } from './index';

describe('<Home />', () => {
    it('should not display the user if undefined', () => {
        const getUser =  sinon.spy();
        const wrapper = shallow(<Home getUser={getUser} />);
        expect(wrapper.text()).to.equal('Welcome ');
    });
    it('should display the username', () => {
        const getUser =  sinon.spy();
        const user = { username: 'test' };
        const wrapper = shallow(<Home user={user} getUser={getUser} />);
        expect(wrapper.text()).to.equal('Welcome test');
    });
});
