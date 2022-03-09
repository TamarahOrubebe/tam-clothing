import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from './12.4 directory.data'; 
import './directory.styles.scss';



class Diretory extends React.Component  {

    constructor() {
        super();
        this.state = {
            sections: sections
        }
    }


    render() {
        
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                })}
            
            </div>
        )
    }
    
}

export default Diretory;