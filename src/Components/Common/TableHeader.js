import React from 'react'
import { Link } from 'react-router-dom'

class TableHeader extends React.Component {

    render() {
        return (
            <div className="table-heade align-items-center">
                <div>
                    <h5 className="card-title mb-3">{this.props.title} {this.props.viewButton}</h5>
                    <p className="text-muted card-sub-title m-0">{this.props.subtitle}</p>
                </div>

                {this.props.href && <Link to={this.props.href} className="btn ripple btn-primary btn-sm see-all-btn">View All</Link>}
               
                {this.props.options && 
                <>
                <a className="bt btn-sm ripple btn-light dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="fas fa-ellipsis-v mr-1"></i>
              </a>
              <div className="dropdown-menu tx-13">
                {this.props.options}
              </div>
              </>
              }


            </div>

        )
    }

}

export default TableHeader
