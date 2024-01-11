import React from 'react';
import { useSelector } from 'react-redux';


function Options( props ) {

    const { name, options, type, action } = props;
    const currentFont = useSelector((state) => state.settings.fontFamily)
    const currentFontSize = useSelector((state) => state.settings.fontSize)
    const currentPageCount = useSelector((state) => state.settings.countPostsPerPage)

  return (
    <label>
        <select 
        
            name={name} 
            value={
                type === 'FontOption' ? currentFont
                : type === 'fontSizeOption' ? currentFontSize
                : currentPageCount
            } 
            className={
                name === 'count-posts-select' ? "select small-select" : "select"
            }
            onChange={(event) => action(event, type)}
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
