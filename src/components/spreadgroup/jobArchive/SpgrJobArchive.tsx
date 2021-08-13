import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { client } from '../../../lib/api';
import SpgrJobArchiveSingleJob from './SpgrJobArchiveSingleJob';
import { PageContentTypes } from '../../../lib/constants';

const SpgrJobArchive = ({ fields, pageProps }) => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: PageContentTypes.SpreadGroupSingleJobs,
      })
      .then((response) => {
        setJobs(response.items);
        setLoading(false);
        console.log(response.items);
      })
      .catch((error) => {
        console.log('Error occurred while fetching Entries');
        console.error(error);
      });
  }, []);

  return (
    <div id="sprd-job-archive" className="sprd-job-archive">
      {loading ? (
        <Loading />
      ) : jobs !== [] ? (
        <div className="jobs">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              {jobs.map((job) => (
                <SpgrJobArchiveSingleJob
                  key={job.fields.jobId}
                  jobId={job.fields.jobId}
                  jobTitle={job.fields.job.fields.jobTitle}
                  departments={job.fields.departments}
                  types={job.fields.types}
                  locations={job.fields.locations}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h3>It&apos;s so empty in here 🤔</h3>
      )}
    </div>
  );
};

export default SpgrJobArchive;
