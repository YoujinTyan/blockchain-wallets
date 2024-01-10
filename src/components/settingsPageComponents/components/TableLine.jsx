import React from 'react';
import Toggle from './ToggleComponent';
import Options from './OptionsComponent';


function TableLine( props ) {

    const { children, title } = props;
    console.log(children.childrenParams)

  return (
    <tr className="thead">
        <td className="title-td">{ title }</td>
        <td className="content-td">
        { children.component === 'Toggle' ?
          (<Toggle
            onChange={children.childrenParams.onChange}
            defaultChecked={children.childrenParams.defaultChecked}
          />)
          :
          (<Options
            name={children.childrenParams.name}
            options={children.childrenParams.options}
          />)
        }
        </td>
    </tr>
  );
};

export default TableLine;
