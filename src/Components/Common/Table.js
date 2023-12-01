import React from 'react'

export default function Table(props) {


  return (
    <div className="table-responsive">
										<table className="table mg-b-0">
											<thead>
												<tr>
													{props.columns}
												</tr>
											</thead>
											<tbody>
                                                        {props.children1}
											</tbody>
										</table>
									</div>
  )
}
