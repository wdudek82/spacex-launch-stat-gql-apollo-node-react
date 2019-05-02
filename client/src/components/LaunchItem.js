import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = (props) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
  } = props.launch;
  const isFutureLaunch =
    new Date(launch_date_local || null).getTime() > new Date().getTime();

  console.log('isFutureLaunch:', isFutureLaunch);

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_success && !isFutureLaunch,
                'text-danger': !launch_success && !isFutureLaunch,
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch details
          </Link>
        </div>
        Launch Details
      </div>
    </div>
  );
};

export default LaunchItem;
