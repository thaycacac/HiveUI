import { type } from 'os';
import React from 'react';

export interface BaseRowProps {
    type?:string;
    justify?: string;
    aligh?:string;
    children?:any;
    //props style for custom style
    style?:object
    // gutter?:string
}

const Row : React.FunctionComponent<BaseRowProps> =  ({
    type,
    justify,
    aligh,
    children,
    style,
}: BaseRowProps) => {
    let classList = [
        'el-row', 
    //    { `${justify} !== 'start' ? 'is-justify'-${justify}` : ''},
    //     `${align} !== 'top' ? `is-align-${align}` : ''`
        // { 'el-row--flex': type === 'flex' }
      ];

    return (<div className={classList.join(' ')}
    style={style} >
       {children}
    </div>
    )
}

Row.defaultProps = {
    justify: 'start',
    aligh: 'top',
}

export default Row