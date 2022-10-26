import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forwardToBench, revertAppeal } from '../../../actions/appeal';

const AppealAction = ({ match, forwardToBench, revertAppeal, history }) => {
    const [formData, setFormData] = useState({
        revertReason: '',
    });

    const [formError, setFormError] = useState({});

    const validate = (values) => {
        const errors = {};

        if (!values.revertReason)
            errors.revertReason = 'Field can not be empty';

        return errors;
    };

    const { revertReason } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { id } = match.params;
        forwardToBench(id, history);
    };

    const onRevertSubmit = (e) => {
        e.preventDefault();

        setFormError(validate(formData));

        if (Object.keys(validate(formData)).length === 0) {
            const { id } = match.params;
            revertAppeal(formData, id, history);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Forward Appeal</h1>
            <p className="mb-4">Take Action if Form A filled Up</p>

            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Revert Back To Appellant
                            </h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => onRevertSubmit(e)}>
                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Reason for reverting back the appeal"
                                            name="revertReason"
                                            value={revertReason}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formError &&
                                            formError.revertReason && (
                                                <p className="invalid-feedback d-block">
                                                    {formError.revertReason}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <button
                                            to="#"
                                            className="btn btn-danger btn-icon-split"
                                        >
                                            <span className="icon text-white-50">
                                                <i className="fa-solid fa-angles-left"></i>
                                            </span>
                                            <span className="text">
                                                Revert Appeal
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Forward Appeal To Bench
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>
                                If checklist has been filled up for the Appeal
                                and all the documents are fine please forward
                                the appeal to the bench.
                            </p>
                            <button
                                onClick={() => onSubmit()}
                                className="btn btn-success btn-icon-split"
                            >
                                <span className="icon text-white-50">
                                    <i className="fa-solid fa-angles-right"></i>
                                </span>
                                <span className="text">Forward to Bench</span>
                            </button>
                            <div className="my-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { forwardToBench, revertAppeal })(
    withRouter(AppealAction)
);
