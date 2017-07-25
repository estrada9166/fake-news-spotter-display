import React from 'react'
import Header from '../components/Header'
import { initStore, inputChange, search } from '../store'
import withRedux from 'next-redux-wrapper'
import Results from '../components/Results'

class Index extends React.Component { 
  static getInitProps ({ store }) {
    store.dispatch(inputChange());
    store.dispatch(search());
    store.dispatch(paginationSelect());    
  }

  render() {
    return (
      <div>
        <Header />
        <Results />
      </div>
    )
  }
}

export default withRedux(initStore, null)(Index);