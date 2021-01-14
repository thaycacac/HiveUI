import * as React from 'react';
import classNames from 'classnames';


import { addClass, removeClass, on, off } from "../../utils/dom";
import {generateId} from "../../utils/util" ;
export interface BaseTooltipProps {
    openDelay?: number;
    disable?:boolean;
    manual?:boolean;
    effect?:string;
    arrowOffset?: number;
    popperClass?:string;
    transition?:string;
    enterable?:boolean;
    hideAfter?:number;  
    tabindex?:number;
}

const Tooltip: React.FunctionComponent<BaseTooltipProps> = ({
    openDelay,
    disable,
    manual,
    effect,
    arrowOffset,
    popperClass,
    transition,
    enterable,
    hideAfter,
    tabindex
}: BaseTooltipProps) => {
    const classes = classNames(
        'el-tooltip__popper', 
        'is' + effect,
        popperClass,
    );
    
    return (
        <div> tooltip</div>
    )
}

Tooltip.defaultProps = {
    openDelay: 0,
    disable: false,
    effect: 'dark',
    arrowOffset: 0,
    popperClass: '',
    hideAfter: 0,
    tabindex: 0,
    enterable: true,
    transition: 'el-fade-in-linear',
    manual: false
}
export default Tooltip 