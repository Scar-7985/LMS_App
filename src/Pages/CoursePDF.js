import React, { useState } from 'react';
import Header from '../components/Header';
import { Document, Page, pdfjs } from 'react-pdf';
import { SITE_URL } from '../define/Define';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CoursePDF = () => {

  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfFile = '';


  return (
    <>
      <Header goBackTo={'/'} title={'Pdf View'} rightSec={
        <span>{numPages ? `Pages: ${numPages}` : ''}</span>
      } />
      <div style={{ width: '100vw', height: 'auto', paddingBottom: '80px' }}>
        <Document file={`/assets/Page.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <div key={index} style={{ border: '1px solid black', width: '100%' }}>
              <Page
                pageNumber={index + 1}
                width={380}
                renderTextLayer={false}  // Disable text layer rendering
                renderAnnotationLayer={false}  // Disable annotations rendering
              />
            </div>
          ))}
        </Document>

      </div>
    </>
  );
};

export default CoursePDF;
