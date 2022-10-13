import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAppealsAppellant } from '../../actions/appeal';

import AppealItem from './AppealItem';

const Dashboard = ({ getAppealsAppellant, appeal: { appeals, loading } }) => {
    useEffect(() => {
        getAppealsAppellant();
    }, [getAppealsAppellant]);
    return loading ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Appeals</h1>
            <p className="mb-4">List of all appeals</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Appeals Table
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead>
                                <tr>
                                    <th>Appeal id</th>
                                    <th>Appellant</th>
                                    <th>Respondent</th>
                                    <th>Details</th>
                                    <th>Payment Status</th>
                                    <th>Appeal Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appeals.map((appeal) => (
                                    <AppealItem
                                        key={appeal.id}
                                        appeal={appeal}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { appeal: state.appeal };
};

export default connect(mapStateToProps, { getAppealsAppellant })(Dashboard);
