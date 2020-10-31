import React from "react";
import Info from "../components/info";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const setUp = () => shallow(<Info/>)

const componentDidMountSpy = jest.spyOn(Info.prototype, 'componentDidMount')
const componentDidUpdateSpy = jest.spyOn(Info.prototype, 'componentDidUpdate')
const componentWillUnmountSpy = jest.spyOn(Info.prototype, 'componentWillUnmount')

describe('Info component', () => {
  let component = null;

  beforeEach(() => {
    jest.spyOn(window, 'addEventListener')
    jest.spyOn(window, 'removeEventListener')
    component = setUp()
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  describe('lifecycle methods', () => {
    it('componentDidMount: was called 1', () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    })

    it('componentDidUpdate: was called', () => {
      component.setProps()
      expect(componentDidUpdateSpy).toHaveBeenCalled()
    })

    it('componentWillUnmount: was called', () => {
      component.unmount()
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('component handlers', () => {
    /*it('call addEventListener when component mounted', () => {
      expect(window.addEventListener).toHaveBeenCalledTimes(1)
    })*/

    /*it('call changeTitle when component update', () => {
      const instance = setUp().instance()
      instance.changeTitle = jest.fn()
      instance.componentDidUpdate()
      expect(instance.changeTitle).toHaveBeenCalled()
    })*/

    /*it('call removeEventListener when component unmount', () => {
      component.unmount()
      expect(window.removeEventListener).toHaveBeenCalledTimes(1)
    })*/

    /*it('call handleWidth when window resize', () => {
      expect(component.state().windowSize).toBe(0)
      global.dispatchEvent(new Event('resize'))
      expect(component.state().windowSize).toBe(window.innerWidth)
    })*/
  })
})