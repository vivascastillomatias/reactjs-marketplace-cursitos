import React from 'react';
import ContentRowBottom from './ContentRowBottom';
import ContentRowTop from './ContentRowTop';
import TableProducts from './TableProducts';

function MainContent() {
    return (
      <React.Fragment>
      {/* <!-- Begin Page Content --> */}
				<div className="container-fluid">

                    <ContentRowTop></ContentRowTop>
                    <ContentRowBottom></ContentRowBottom>
                    <TableProducts></TableProducts>
					
				</div>
				{/* <!-- /.container-fluid --> */}
      </React.Fragment>
    );
  }
  
  export default MainContent;
  