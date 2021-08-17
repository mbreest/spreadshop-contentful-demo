import React from 'react';
import Tag from '../tag/Tag';
import Link from 'next/link';

const SpgrJobArchiveSingleJob = ({ jobId, jobTitle, departments, locations, types, slug }) => {
  return (
    <article className="job" id={`job-${jobId}`}>
      <div className="job__inner">
        <h3 className="job__title">
          <Link href={`job-openings/${slug}`}>{jobTitle}</Link>
        </h3>
        <div className="job__tags">
          {departments.map((department) => (
            <Tag key={department.sys.id} tag={department.fields.label} />
          ))}
          {types.map((type) => (
            <Tag key={type.sys.id} tag={type.fields.label} />
          ))}
          {locations.map((location) => (
            <Tag key={location.sys.id} tag={location.fields.label} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default SpgrJobArchiveSingleJob;
