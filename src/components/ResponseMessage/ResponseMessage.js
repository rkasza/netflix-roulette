import React from 'react';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import CloseCircleIcon from 'mdi-react/CloseCircleIcon';
import './ResponseMessage.css';

const ResponseMessage = ({ success = false, children }) => {
  return (
    <div className="ResponseMessage">
      {success ? 
        (
          <>
            <CheckCircleIcon color="#F65261" size={60} className="ResponseIcon" />
            <h2>Congratulations!</h2>
          </>
        ) : (
          <>
            <CloseCircleIcon color="#F65261" size={60} className="ResponseIcon" />
            <h2>Ooops!</h2>
          </>
        )
      }
      <p>{children}</p>
    </div>
  );
};


export default ResponseMessage;
