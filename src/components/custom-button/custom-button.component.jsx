import React from "react";
import {CustumButtonContainer} from './custom-button.styles'


const CustomButton = ({ children, ...props }) => (
    <CustumButtonContainer {...props}>
        {children}
    </CustumButtonContainer>
);

   

export default CustomButton;