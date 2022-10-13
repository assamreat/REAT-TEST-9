import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({ appeal: { id, fullname, res_fullname } }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${fullname} `}</td>
            <td>{`${res_fullname} `}</td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    view
                </Link>
            </td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}/paymentstatus`}
                    className="text-primary"
                    style={{ fontSize: '1rem', padding: '0 .2rem' }}
                >
                    check payment status &raquo;
                </Link>
            </td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}/payment`}
                    className="text-primary"
                    style={{ fontSize: '1rem', padding: '0 .2rem' }}
                >
                    view &raquo;
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
