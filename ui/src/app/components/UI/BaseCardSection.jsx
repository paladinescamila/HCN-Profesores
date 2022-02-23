function BaseCardSection(props) {
  const { title, toolbar, children, ...others } = props;
  return (
    <div className="container-fluid h-100">
      <div className="card" { ...others }>
        <div className="card-header bg-white">
          <div className="d-flex row align-items-center">
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
        </div>
        <div className="card-body h-100">
          { children }
        </div>
      </div>
    </div>
    
  );
}

export default BaseCardSection;