import { Link } from "react-router-dom";
// import CreateProject from "../Project/CreateProject";

const PageHeader = (props) => {
  return (
    <div>
      <div className="page-header">
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">
                <h5>Home</h5>
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <h5>{props.title}</h5>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
