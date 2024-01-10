import React from 'react';
import Toggle from './ToggleComponent';
import Options from './OptionsComponent';


function TableLine( props ) {

    const { children, title, action } = props;
    // console.log(children.childrenParams)

  return (
    <tr className="thead">
        <td className="title-td">{ title }</td>
        <td className="content-td">
        {/* {console.log('params:', children.childrenParams)} */}
        { children.component === 'Toggle' ?
          (<Toggle
            params={children.childrenParams}
          />)
          :
          (<Options
            name={children.childrenParams.name}
            options={children.childrenParams.options}
            type={children.childrenParams.type}
            action={action}
          />)
        }
        </td>
    </tr>
  );
};

export default TableLine;
