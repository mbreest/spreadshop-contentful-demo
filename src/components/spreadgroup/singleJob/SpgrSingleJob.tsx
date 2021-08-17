import Link from 'next/link';
import { renderRichText } from '../../../lib/rich-text';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { LocaleContext } from '../../../lib/translations';
import Tag from '../tag/Tag';

const SpgrSingleJob = ({ page }) => {
  const { content } = page.fields;
  const { job, recruitingSpecialist } = content.fields;
  const [tab, setTab] = useState(0);
  const locale = useContext(LocaleContext);
  console.log(job);

  return (
    <main className="main main--m">
      <div className="parent-link">
        <span className="parent-link__icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 16">
            <path
              fill="#71848E"
              fillRule="evenodd"
              d="M.724 8.005L7.167.757l1.12.996-5.556 6.252 5.557 6.252-1.121.996L.724 8.005z"
              clipRule="evenodd"></path>
          </svg>
        </span>
        <Link href={`/${locale}/spreadgroup/job-openings`}>Zeige alle Jobs</Link>
      </div>

      <section className="sprdRow sprdRow--pbs sprdRow--pts sprdRow--gray8">
        <div
          className="jobdetail container"
          id="jobdetail"
          itemScope
          itemType="http://schema.org/JobPosting">
          <span className="d-none" itemProp="datePosted">
            2021-08-06
          </span>
          <span
            className="d-none"
            itemProp="hiringOrganization"
            itemScope
            itemType="http://schema.org/Organization">
            <span itemProp="name">Spread Group</span>
          </span>
          <span className="d-none" itemProp="employmentType">
            Vollzeit
          </span>
          <span itemProp="jobLocation" itemScope itemType="http://schema.org/Place">
            <span
              className="d-none"
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress">
              <span itemProp="addressLocality">Leipzig</span>
              <span itemProp="addressRegion">SN</span>
              <span itemProp="streetAddress">Gießerstraße 27</span>
              <span itemProp="postalCode">04229</span>
              <span itemProp="addressCountry">Germany</span>
            </span>
          </span>

          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h2 className="jobdetail__title" itemProp="title">
                {job.fields.jobTitle}
              </h2>
              <div className="jobdetail__tags tags">
                {job.fields.department.map((department) => (
                  <Tag key={department.sys.id} tag={department.fields.label} />
                ))}
                {job.fields.type.map((type) => (
                  <Tag key={type.sys.id} tag={type.fields.label} />
                ))}
                {job.fields.location.map((location) => (
                  <Tag key={location.sys.id} tag={location.fields.label} />
                ))}
              </div>
              <div className="tabs scrollable-list">
                <button
                  onClick={() => setTab(0)}
                  className={classNames({
                    'tab tab__anchor': true,
                    'tab__anchor--active': tab === 0,
                  })}
                  data-tabref="description">
                  Job Beschreibung
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={classNames({
                    'tab tab__anchor': true,
                    'tab__anchor--active': tab === 1,
                  })}
                  data-tabref="application">
                  Bewerbung
                </button>
              </div>
              <div
                data-tab="description"
                className={classNames({
                  tab__content: true,
                  'tab__content--active': tab === 0,
                })}>
                <div className="jobdetail__description" itemProp="description">
                  {renderRichText(job.fields.description)}
                </div>
                <button
                  onClick={() => setTab(1)}
                  className="sprdButton sprdButton--primary sprdButton--hcentered jobdetail__button-apply jobdetail__button-apply--active">
                  Jetzt bewerben
                </button>
              </div>
              <div
                data-tab="application"
                className={classNames({
                  tab__content: true,
                  'tab__content--active': tab === 1,
                })}>
                <div className="row">
                  <div className="col-12 col-md-7 col-xl-8">
                    <div className="jobdetail__application">
                      {renderRichText(job.fields.applicationDescription)}
                    </div>
                  </div>
                  <div className="col-12 col-md-5 col-xl-4">
                    <div className="specialist specialist--single">
                      <figure className="contact-card__image--bg contact-card__image--specialist contact-card__image  contact-card__image--specialist--single">
                        <img
                          className="lazyload lazyload__image image--of"
                          src={recruitingSpecialist.fields.portrait.fields.file.url}
                          alt={recruitingSpecialist.fields.name}
                        />
                      </figure>
                      <div className="specialist__content specialist__content--single">
                        <h3 className="specialist__title">{recruitingSpecialist.fields.name}</h3>
                        <div className="specialist__description">Junior Recruiting Specialist</div>
                        <div className="specialist__contact">
                          <div className="specialist__phone">
                            <a
                              className="specialist__contact__link"
                              title="Phone"
                              href={`tel:${recruitingSpecialist.fields.phoneNumber}`}>
                              {recruitingSpecialist.fields.phoneNumber}
                            </a>
                          </div>
                          <div className="specialist__links">
                            <a
                              className="specialist__link"
                              title={`${recruitingSpecialist.fields.name} - LinkedIn`}
                              rel="noopener noreferrer"
                              target="_blank"
                              href={recruitingSpecialist.fields.linkedIn}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 12 12">
                                <path
                                  fill="#2867B2"
                                  d="M0 0v12h12V0H0zm4 9.5H2.5V4H4v5.5zm-.75-6.134a.879.879 0 01-.875-.882c0-.487.392-.882.875-.882s.875.395.875.882a.878.878 0 01-.875.882zM10 9.5H8.5V6.698c0-1.684-2-1.557-2 0V9.5H5V4h1.5v.883C7.199 3.59 10 3.494 10 6.12V9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="specialist__link"
                              title={`${recruitingSpecialist.fields.name} - Xing`}
                              rel="noopener noreferrer"
                              target="_blank"
                              href={recruitingSpecialist.fields.xing}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 12 12">
                                <path
                                  fill="#026466"
                                  d="M0 0v12h12V0H0zm2.458 7.5l1.371-2.412-.923-1.582h1.647l.915 1.576L4.096 7.5H2.457zM8.61 10H6.983L5.208 6.777 7.898 2h1.645l-2.69 4.777L8.61 10z"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpgrSingleJob;
