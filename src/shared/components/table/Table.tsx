import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { Form } from "react-bootstrap";
import { useWindowWidth } from "@react-hook/window-size";
import classNames from "classnames";

import { IMainProductInfo } from "../../../shared/interface";
import { numberWithCommas } from "../../InternalService";
import {
  DATABASE_MAIN_TYPES,
  JOB_TITLE_TYPES,
  COUNTRY_TYPES,
} from "../../enums";
import TableMobileView from "./components/tableMobileView/TableMobileView";
import Button from "../button/Button";
import styles from "./table.module.scss";
import CategoryBadge from "../categoryBadge/CategoryBadge";
import { Router } from "next/router";

interface ITable {
  columns: string[];
  data: any;
  isProductPage: boolean;
  type?: DATABASE_MAIN_TYPES;
  attributesSet: any;
  middleFix?: string;
}

const Table = (props: ITable) => {
  const { columns, data, type, attributesSet, isProductPage, middleFix } =
    props;
  const [mobileViewport, setMobileViewport] = useState(false);
  const [dynamicFullDataSet, setDynamicFullDataSet] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(-1);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const pressRow = (number: number) => {
    setLoading(true);
    setCurrentNumber(number);
  };
  useEffect(() => {
    setDynamicFullDataSet(
      data?.filter((element: IMainProductInfo) =>
        element.name?.toLowerCase().includes(searchText?.toLowerCase())
      )
    );
  }, [searchText]);

  const getPlaceHoderText = {
    [DATABASE_MAIN_TYPES.JOB_TITLE]: "Search Job Titles",
    [DATABASE_MAIN_TYPES.INDUSTRY]: "Search Industries",
    [DATABASE_MAIN_TYPES.COUNTRY]: "Search Countries",
    [DATABASE_MAIN_TYPES.CONSUMER]: "Search Consumers",
  };

  const getEmptyRows: any = {
    [DATABASE_MAIN_TYPES.JOB_TITLE]: (
      <>
        <td></td>
        <td></td>
        <td></td>
      </>
    ),
    [DATABASE_MAIN_TYPES.INDUSTRY]: (
      <>
        <td></td>
        <td></td>
      </>
    ),
    [DATABASE_MAIN_TYPES.COUNTRY]: (
      <>
        <td></td>
        <td></td>
      </>
    ),
    [DATABASE_MAIN_TYPES.CONSUMER]: (
      <>
        <td></td>
        <td></td>
      </>
    ),
  };

  const middleFixObject = middleFix ? `${middleFix}/` : "";

  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (windowWidth < 576) {
      setMobileViewport(true);
    } else {
      setMobileViewport(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollYPosition(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollBarPosition = (scrollYPosition: number) => {
    if (scrollYPosition > 0) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={classNames(styles.tableViewWrapper)}>
      {mobileViewport ? (
        <>
          <TableMobileView
            columns={columns}
            dynamicFullDataSet={dynamicFullDataSet}
            attributesSet={attributesSet}
            isProductPage={isProductPage}
            pressRow={pressRow}
          />
        </>
      ) : (
        <>
          <div className={styles.wrap}>
            <div className={styles.tableTitle}>
              <div>Databases By Job Title</div>
            </div>
            <table className="table productlist-table">
              <thead
                className={classNames({
                  [styles.premadeTableHead]: isProductPage == false,
                })}
              >
                {!isProductPage && (
                  <>
                    <tr className={styles.rowStyles}>
                      <th
                        colSpan={(columns.length + 1) / 2}
                        className={classNames(
                          styles.tableFillter,
                          styles.leftFillter
                        )}
                      >
                        <div>
                          <span>Job Level</span>
                          <Form.Select
                            className={styles.select}
                            aria-label="category select"
                          >
                            <option>Select Category</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Engineering">Engineering</option>
                          </Form.Select>
                        </div>
                      </th>
                      <th
                        colSpan={(columns.length + 1) / 2}
                        className={styles.tableFillter}
                      >
                        <div className={styles.searchWrapper}>
                          <span>Name</span>
                          <div className={styles.searchInput}>
                            <input
                              type="text"
                              placeholder={
                                // @ts-ignore
                                getPlaceHoderText?.[type] || "Search State"
                              }
                              onChange={(event) => {
                                setSearchText(event.target.value);
                                scrollBarPosition(scrollYPosition);
                              }}
                            />
                          </div>
                          <Button className={styles.searchButton}>
                            <MagnifyingGlass size={20} />
                          </Button>
                        </div>
                      </th>
                    </tr>
                  </>
                )}
                <tr className={styles.tableField}>
                  {/*<th className={isProductPage ? "" : "bg-fix"}>
                     <input
                      type="text"
                      // @ts-ignore
                      placeholder={getPlaceHoderText?.[type] || "Search State"}
                      onChange={(event) => {
                        setSearchText(event.target.value);
                      }}
                    /> 
                  </th>*/}
                  {columns.map((element: string, index: number) => {
                    return (
                      <th
                        className={isProductPage ? "" : "bg-fix"}
                        key={`col_${index}`}
                      >
                        {element}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {dynamicFullDataSet?.map((element: any, index: number) => {
                  let url = element.url;

                  if (currentNumber === index && loading) {
                    return (
                      <tr
                        key={`c_${index}`}
                        className="align-items-center justify-content-center"
                      >
                        <td>{isProductPage ? "Selected" : "Loading..."}</td>
                        {(type && getEmptyRows?.[type]) || (
                          <>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </>
                        )}
                      </tr>
                    );
                  }

                  return (
                    <tr key={`row_${index}`}>
                      <td>
                        <a
                          href={`${
                            process.env.NEXT_PUBLIC_BASE_URL
                          }/${middleFixObject}${url
                            ?.split("/")
                            .join("")
                            ?.replace("+", "/")}`}
                        >
                          <b
                            onClick={() => {
                              pressRow(index);
                            }}
                            className={classNames({
                              [styles.linkCity]: isProductPage == true,
                              [styles.normalLink]: isProductPage == false,
                            })}
                          >
                            {element.name}
                          </b>
                        </a>
                        {!isProductPage && <CategoryBadge category={element?.type?.value} />}
                      </td>

                      {Object.keys(attributesSet).map((value, columnIndex) => {
                        return (
                          <td key={`cell_${columnIndex}`}>
                            {numberWithCommas(element.stats?.[value])}
                          </td>
                        );
                      })}
                      <td>
                        <b>
                          {element?.price?.list?.length > 2
                            ? `$${numberWithCommas(
                                element?.price?.list?.[1]?.price
                              )}`
                            : element?.price?.list?.[0]?.price &&
                              `$${numberWithCommas(
                                element?.price?.list?.[0]?.price
                              )}`}
                        </b>
                      </td>
                      <td>
                        <b>
                          {element?.price?.list?.length > 2
                            ? `$${numberWithCommas(
                                element?.price?.list?.[2]?.price
                              )}`
                            : element?.price?.list?.[1]?.price &&
                              `$${numberWithCommas(
                                element?.price?.list?.[1]?.price
                              )}`}
                        </b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
