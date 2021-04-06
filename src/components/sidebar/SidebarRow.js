import React from 'react';
import './SideBarRow.css';

function SidebarRow( {selected, Icon, title} ) {
    return (
        <div className={`sideBarRow ${selected && 'selected'}`}>
           <Icon className="sideBarRow__icon" />
           <h2 className="sidebarRow__title">{title}</h2>  
        </div>
    )
}

export default SidebarRow
