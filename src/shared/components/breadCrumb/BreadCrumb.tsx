import { CaretRight } from "phosphor-react";
import React from "react";
import Link from "next/link";

import { DATABASE_MAIN_TYPES } from "../../enums";

interface IBreadCrumb {
  databaseMainType: DATABASE_MAIN_TYPES | null;
  breadCrumb: string;
}

const BreadCrumb = (props: IBreadCrumb) => {
  const { databaseMainType, breadCrumb } = props;

  const getLink: any = {
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: (
      <Link href="/list-of-all-us-companies">
        All Company Databases By States
      </Link>
    ),
    [DATABASE_MAIN_TYPES.REALTOR]: (
      <Link href="/realtors-by-state">Realtors By US States</Link>
    ),
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE_OLD]: (
      <Link href="/list-of-all-us-companies">
        All Company Databases By States
      </Link>
    ),
    [DATABASE_MAIN_TYPES.REALTOR_OLD]: (
      <Link href="/realtors-by-state">Realtors By US States</Link>
    ),
    [DATABASE_MAIN_TYPES.JOB_TITLE]: (
      <Link href="/usa-job-titles">All Job Titles</Link>
    ),
    [DATABASE_MAIN_TYPES.INDUSTRY]: (
      <Link href="/special-databases">All Industries</Link>
    ),
    [DATABASE_MAIN_TYPES.COUNTRY]: (
      <Link href="/other-countries">All Countries Databases</Link>
    ),
    [DATABASE_MAIN_TYPES.CONSUMER]: (
      <Link href="/consumer-emails">All Consumer Email Databases</Link>
    ),
    [DATABASE_MAIN_TYPES.COMPANY_DATABASE]: (
      <Link href="/list-of-all-us-companies">All Email Databases</Link>
    ),
    [DATABASE_MAIN_TYPES.OTHERS]: (
      <Link href="#">Others</Link>
    ),
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{ fontSize: 16, color: "white" }}
    >
      <Link href="/">Home</Link>
      <CaretRight size={18} />
      <>
        {databaseMainType && getLink[databaseMainType]}
        <CaretRight size={18} /> <span>{breadCrumb}</span>
      </>
    </div>
  );
};

export default BreadCrumb;
