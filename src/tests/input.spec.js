import React from "react";
import Input from './../components/ui/input/index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('should render input', () => {
  it('should render', () => {
    const component = shallow(<Input/>)
    expect(component).toMatchSnapshot()
  })
})
