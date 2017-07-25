import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { paginationSelect , search } from '../store'


class Paginator extends Component {
  paginationSelect = eventKey => {
    new Promise ((resolve) => {
      this.props.paginationSelect(eventKey)
      resolve()
    })
    .then(() => {
      const { text, from, to } = this.props.state           
      this.props.search(text, from, to)
    })
  }

  render() {
    const { state } = this.props
    return (
      <div>
        <Head>
          <title>Search Engine</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row style={{ marginTop: '10px' }}>
            <Col lg={8} lgOffset={2}>
              <div style={{ textAlign: 'center' }}>
                <Pagination
                  bsSize="medium"
                  items={Math.round(state.length/10) > 10 ? 10 : Math.round(state.length/10)}
                  activePage={state.activePage}
                  onSelect={this.paginationSelect}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    state
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    paginationSelect: bindActionCreators(paginationSelect, dispatch),
    search: bindActionCreators(search, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);