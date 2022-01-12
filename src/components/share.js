import * as React from "react"

// import emotion
import { css } from 'emotion';
 
// import icons
import {FaTwitter} from 'react-icons/fa';
 
// import react-custom-share components
import { ShareButtonCircle, ShareBlockStandard } from 'react-custom-share';

 
const ShareComponent = (props) => {


    const { url, text, longtext } = props;


  // create object with props for shareBlock
  const shareBlockProps = {
    url: url,
    button: ShareButtonCircle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter }
    ],
    text: text,
    longtext: longtext,
  };
 
  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent