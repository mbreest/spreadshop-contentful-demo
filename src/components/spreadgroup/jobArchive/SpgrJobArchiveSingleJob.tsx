import React from 'react';
import Tag from '../tag/Tag';
import Link from 'next/link';

const SpgrJobArchiveSingleJob = ({ jobId, jobTitle, departments, locations, types }) => {
  return (
    <article className="job" id={`job-${jobId}`}>
      <div className="job__inner">
        <h3 className="job__title">
          <Link href={'job-openings/system-engineer-w-m-d'}>{jobTitle}</Link>
        </h3>
        <div className="job__tags">
          {departments.map((department) => (
            <Tag key={department} tag={department} />
          ))}
          {types.map((type) => (
            <Tag key={type} tag={type} />
          ))}
          {locations.map((location) => (
            <Tag key={location} tag={location} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default SpgrJobArchiveSingleJob;
