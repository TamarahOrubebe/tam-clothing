import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import selectDirectorySections from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer} from './directory.styles';


const Diretory = ({ sections }) => (

    <DirectoryMenuContainer className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
            return <MenuItem key={id} {...otherSectionProps} />
        })}
            
    </DirectoryMenuContainer>
);
    
    
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Diretory);