var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={() => {props.typeSearch()}} id="search" className="form-control" type="text" />
    <button onClick={() => {props.querySearch()}} className="btn btn-primary btn-block">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
