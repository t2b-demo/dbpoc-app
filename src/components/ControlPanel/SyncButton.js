import React from 'react';
import { Grid, Row, Col, Button, FormGroup, Checkbox } from 'react-bootstrap';
import './../../styles/index.min.css';

class SyncButton extends React.Component {
  render() {
    return (
      <div style={{marginTop: 40}}>
        <div className="sync-container">
          <h4>Synchronize Database</h4>
          <Grid >
            <Row className="show-grid">          
              <Col md={2} mdPush={6}>
                <FormGroup>
                  <Checkbox inline
                  id="auto-sync-checkbox"
                  checked={this.props.autoSync}
                  onChange={this.props.handleAutoSyncClick}
                  >AutoSync</Checkbox>
                </FormGroup>
              </Col>
              <Col md={2} mdPull={0}>
                <Button
                    bsStyle="primary"
                    onClick={this.props.handleSyncClick}
                    disabled={this.props.autoSync}
                  >Sync
                </Button>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SyncButton;
