import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Layout from '../Layout'

// TODO move to setup
configure({ adapter: new Adapter() })

describe('Render', () => {
  it('?', () => {
    expect(shallow(<Layout children={'foo'} />)).toMatchSnapshot()
  })
})
