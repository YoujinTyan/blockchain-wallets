import React from 'react';


function Options( props ) {

    const { name, options } = props;

  return (
    <label>
        <select name={name} className={
                name === 'count-posts-select' ? "select small-select" : "select"
            }
        >
            {   options.map((item, index) => (
                    <option 
                        key={index}
                        value={item.name}
                    >
                        {item.option}
                    </option>
                ))
            }
        </select>
    </label>
  );
};

export default Options;
