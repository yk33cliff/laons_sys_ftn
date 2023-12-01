import { Link } from "react-router-dom";
// import CreateProject from "../Project/CreateProject";

const PageHeader = (props) => {
  return (
    <div>
      <div className="page-header">
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {/* Project Dashboard */}
              {props.title}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
