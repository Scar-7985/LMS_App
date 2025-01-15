import React from 'react';
import Header from '../components/Header'
import { SITE_URL } from '../define/Define';

const PdfViewer = () => {

  const pdfUrl = (`${SITE_URL}assets/Page.pdf`);


  return (
    <div style={{ paddingBottom: '60px' }}>
      <Header goBackTo={'/'} title={'Pdf View'} />
      <div style={{ width: '100vw', height: 'calc(100vh - 116px)' }}>
        <iframe
          title='pdf'
          width={"100%"}
          height={"100%"}
          src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}>
        </iframe>

      </div>
    </div>
  );
}

export default PdfViewer;


