import React, { useContext, useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { client } from '../../../lib/api';
import SpgrJobArchiveSingleJob from './SpgrJobArchiveSingleJob';
import { ComponentContentTypes, PageContentTypes } from '../../../lib/constants';
import { LocaleContext } from '../../../lib/translations';

const SpgrJobArchive = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const locale = useContext(LocaleContext);

  useEffect(() => {
    Promise.all([
      client
        .getEntries({
          content_type: 'page',
          include: 10,
          'fields.content.sys.contentType.sys.id': PageContentTypes.SpreadGroupSingleJobs,
          order: 'sys.createdAt',
          locale,
        })
        .then((response) => {
          setJobs(response.items);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error occurred while fetching Entries');
          console.error(error);
        }),
      client
        .getEntries({
          content_type: ComponentContentTypes.SpgrCategoryDepartment,
          locale,
        })
        .then((response) => {
          setDepartments(response.items);
        })
        .catch((error) => {
          console.log('Error occurred while fetching Entries');
          console.error(error);
        }),
    ]).then(() => {
      setLoading(false);
    });
  }, [locale]);

  return (
    <div id="sprd-job-archive" className="sprd-job-archive">
      {loading ? (
        <Loading />
      ) : jobs !== [] ? (
        <div className="jobs">
          <div className="filter">
            <div className="row">
              <div className="col-12 col-lg-4">
                <label htmlFor="select_department" id="label-department" className="form__label">
                  Abteilung
                </label>
                <div className="input-wrap">
                  <select>
                    {departments.map((department) => (
                      <option key={department.sys.id}>{department.fields.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              {jobs.map((job) => {
                const { slug } = job.fields;
                const { fields } = job.fields.content;
                return (
                  <SpgrJobArchiveSingleJob
                    key={fields.job.fields.jobId}
                    jobId={fields.job.fields.jobId}
                    jobTitle={fields.job.fields.jobTitle}
                    departments={fields.job.fields.department}
                    types={fields.job.fields.type}
                    locations={fields.job.fields.location}
                    slug={slug}
                  />
                );
              })}
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
