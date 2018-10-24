import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TreeDisplay from './TreeDisplay';
import DocumentDisplay from './DocumentDisplay';

class TreeComponent extends React.Component {
  render() {
    return (
      <div>
        <Grid style={{marginTop: 40}}>
          <Row className="show-grid">
            <Col md={4} xsOffset={1}>
                <TreeDisplay
                  selectedTreeMetaDoc={this.props.selectedTreeMetaDoc}
                  handleTreeDocClick={this.props.handleTreeDocClick}
                />
                </Col>
                <Col md={2} mdOffset={1}>
                <DocumentDisplay
                  selectedTreeDoc={this.props.selectedTreeDoc}
                  handlePickWinnerClick={this.props.handlePickWinnerClick}
                />
              </Col>
            </Row>
        </Grid>
      </div> 
    );
  }
}

export default TreeComponent;
