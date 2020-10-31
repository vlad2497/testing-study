import React from "react";
import Post from './../components/post';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props) => shallow(<Post {...props}/>);

describe('should render Post component', () => {
  let component;

  beforeEach(() => {
    component = setUp()
  });

  it ('should contain .post element', () => {
    const element = component.find(".post");
    expect(element.length).toBe(1);
  });

  it ('.post element should contain default text: super post', () => {
    const element = component.find(".post");
    expect(element.text()).toBe('super post');
  });

  it ('.post element should contain props text: post', () => {
    const props = {text: 'post'}
    component = setUp(props)
    const element = component.find(".post");
    expect(element.text()).toBe('post');
  });
});
