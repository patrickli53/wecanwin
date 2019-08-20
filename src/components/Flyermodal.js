import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Flyermodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      numPages: null,
      pageNumber: 1,
    };

    this.toggle = this.toggle.bind(this);
    
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Button className='mt2 mb5' color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Flyer</ModalHeader>
          <ModalBody>
          <div className='flyerSize'>
            <Document file={require("../img/July2019Issue.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
            > 
              <Page pageNumber={pageNumber}/>
            </Document>
            <p>{pageNumber} of {numPages}</p>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Flyermodal;