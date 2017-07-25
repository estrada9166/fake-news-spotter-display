import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux'
import Search from './Search';

class Header extends Component {
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
              <Jumbotron style={{ borderRadius: '15px' }}>
                <h1 style={{ textAlign: 'center' }}>Zuti</h1>  
                <h4 style={{ textAlign: 'center' }}>Fake news spotter</h4>
                <Search />
              </Jumbotron>
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

export default connect(mapStateToProps)(Header);