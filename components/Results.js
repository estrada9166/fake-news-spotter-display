import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Paginator from './Paginator'

class Results extends Component {
  render() {
    const { state } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row style={{ marginTop: '10px' }}>
            <Col lg={8} lgOffset={2}>
            {state.links.map(link => 
              <Panel key={link._id} header={<a target="_blank" href={link._source.url}>{link._source.url}</a>}>
                <p>With a score of {link._score}</p>
                Panel content
              </Panel>
            )}
            </Col>
          </Row>
          <Row>
            { state.length > 0 ? <Paginator /> : null }
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

export default connect(mapStateToProps)(Results);