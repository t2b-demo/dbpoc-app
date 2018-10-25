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
              <Col md={3} xsOffset={3}>
                <FormGroup>
                  <Button
                    style={{marginRight: 40}}
                    bsStyle="primary"
                    onClick={this.props.handleSyncClick}
                    disabled={this.props.autoSync}
                    >Sync
                  </Button>
                  <Checkbox inline
                    id="auto-sync-checkbox"
                    checked={this.props.autoSync}
                    onChange={this.props.handleAutoSyncClick}
                    >AutoSync
                  </Checkbox>
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SyncButton;
