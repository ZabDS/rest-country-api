import React,{useState} from 'react'
import { DropdownWrapper,Mainmenubtn, MenuElementWrapper, MenuElement } from './styles/dropdown'

export default function Dropdown({children,menuBtn,...restProps}){
    const [showElements, setShowElements] = useState(false)
     return(
        <DropdownWrapper {...restProps}>
            <Mainmenubtn onClick={()=>{setShowElements(!showElements)}}>
                <i className="fas fa-chevron-down"></i>
                {menuBtn}
            </Mainmenubtn>
            {showElements && children}            
        </DropdownWrapper>
    )
}

Dropdown.Mainmenubtn = function ({children,...restProps}){
    return(
        <Mainmenubtn {...restProps}>{children}</Mainmenubtn>
    )    
}

Dropdown.MenuElementWrapper = function ({children,...restProps}){
    return(
        <MenuElementWrapper {...restProps}>
            {children}
        </MenuElementWrapper>
    )    
}

Dropdown.MenuElement = function ({children,...restProps}){
    return(
        <MenuElement {...restProps}>{children}</MenuElement>
    )    
}