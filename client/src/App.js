import React, { Component } from 'react';
import { Grid, Responsive, Container } from 'semantic-ui-react';
import DocumentTitle  from 'react-document-title';
import Header from './containers/Header/HeaderContainer';
import AddProductModal from './containers/AddProductModal';
import EditProductModal from './containers/EditProductModal';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import './App.css';


export default class App extends Component {
  state = {}

  handleWindowSizeUpdates = (e, { width }) => this.setState({ width })

  render() {
    const { width } = this.state;
    const isMobile = width <= Responsive.onlyComputer.minWidth ? true : false;

    return (
      <DocumentTitle title='Home Page'>
        <>

          {/** App Content */}
          <Responsive as={Grid} id='site-container' container={isMobile} style={!isMobile? {'padding': '20px 170px 0'} : null} fireOnMount columns={16} onUpdate={this.handleWindowSizeUpdates}>
              <Grid.Column width={16}>
                  {/** Header */}
                  <Grid.Row>
                    <Header />
                  </Grid.Row>
                  
                  {/** App Pages */}
                  <Grid.Row style={{height: '100%', marginTop: '8em' }}>
                    <Container>
                      {this.props.children}
                    </Container>
                  </Grid.Row>
              </Grid.Column>
          </Responsive>

          {/* Add Product Modal */}
          <AddProductModal />

          {/* Edit Product Modal */}
          <EditProductModal />

          {/* Quantity exceeds in-stock quantity warning */}
          <SemanticToastContainer position='bottom-right' />

        </>
      </DocumentTitle>
    );
  }
}