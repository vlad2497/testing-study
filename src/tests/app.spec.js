import React from "react";
import App from './../components/app/index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const setUp = () => shallow(<App/>)

describe('app component', () => {
  let component = null
  let instance = null

  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  describe('check input handlers', () => {
    it('onChange handler', () => {
      expect(component.state().inputValue).toBe('')
      instance.inputHandler({target: {value: 'test data'}})
      expect(component.state().inputValue).toBe('test data')
    })

    it('onKeyPress handler', () => {
      instance.setState({inputValue: 'test data'})
      instance.onKeyPressHandler({key: 'Enter'})
      expect(component.state().inputValue).toBe('')
    })
  })

  describe('check button handler', () => {
    it('check by snapshot', () => {
      const btn = component.find('.testButton')
      btn.simulate('click')
      expect(component).toMatchSnapshot()
    })

    it('check by state', () => {
      const btn = component.find('.testButton')
      btn.simulate('click')
      expect(component.state().inputValue).toBe('it is text')
    })

    it('check by instance handler', () => {
      instance.buttonHandler('it is text')
      expect(component.state().inputValue).toBe('it is text')
    })
  })
})


  // shallow - целевой

  // render - целевой + дочерние
  /*it('render snapshot', () => {
    const component = render(<App/>)
    expect(component).toMatchSnapshot()
  })*/

  // mount - целевой + дочерние + side effects
  /*it('mount snapshot', () => {
    const component = mount(<App/>)
    expect(component).toMatchSnapshot()
  })*/
