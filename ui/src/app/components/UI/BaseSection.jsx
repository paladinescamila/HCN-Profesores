import React from "react";

/**
 * 
 * @param {Object} props
 * @param {String} props.title
 * @param {Array}  props.toolbar
 */
function BaseSection(props) {
  const { title, toolbar, children } = props;
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row pb-5">
        <div className="col">
          <h3 className="text-dark">{ title }</h3>  
        </div>
        { toolbar &&
          <div className="col text-right">
            {toolbar.map(({ title, ...props }, index) => (
              <button { ...props } key={ index }>{ title }</button>
            ))}
          </div>
        }
      </div>

      { children }

    </div>
  );
}

export default BaseSection;