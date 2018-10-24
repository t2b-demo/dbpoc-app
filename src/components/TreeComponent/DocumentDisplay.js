import React from 'react';
import JSONPretty from 'react-json-pretty';
import { Grid, Row, Col } from 'react-bootstrap';
import './../../styles/json.css';
import WinnerButton from './WinnerButton';

class DocumentDisplay extends React.Component {
  render() {
    const doc = this.props.selectedTreeDoc ? this.props.selectedTreeDoc : {};

    return (
      <div>
        <div className="json-container">
          <h6>Document Revision</h6>
          <Grid >
            <Row className="show-grid">
              <Col md={3}>
                <JSONPretty
                  id="json-pretty"
                  json={doc}
                ></JSONPretty>
              </Col>
            </Row>
          </Grid>
          <WinnerButton
            handlePickWinnerClick={this.props.handlePickWinnerClick}
          />
        </div>
      </div>
    );
  }
}

export default DocumentDisplay;
