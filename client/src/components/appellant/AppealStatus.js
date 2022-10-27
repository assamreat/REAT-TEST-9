import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getDateOfHearing } from '../../actions/appeal';

const AppealStatus = ({
    getDateOfHearing,
    match,
    appeal: { dateOfHearing },
}) => {
    const { id } = match.params;
    useEffect(() => {
        getDateOfHearing(id);
    }, []);

    const getStatus = () => {
        let appealStatus;

        dateOfHearing
            ? (appealStatus = `Next date of hearing:  ${dateOfHearing}`)
            : (appealStatus =
                  'Appeal is with Reat Official. Please submit the documenst in the REAT Office');

        return appealStatus;
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className={`card bg-primary text-white shadow`}>
                        <div className="card-body">{getStatus()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { appeal: state.appeal };
};

export default connect(mapStateToProps, { getDateOfHearing })(AppealStatus);
