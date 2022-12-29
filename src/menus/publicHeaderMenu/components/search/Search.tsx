import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import instance from "../../../../services/baseServices";
import { useRoot } from "../../../../shared/contexts/RootProvider";

const Search = () => {
  const router = useRouter();
  const { allSearchList, setAllSearchList } = useRoot();
  const [listLoading, setListLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [router.query.productId]);

  const getAllList = async () => {
    setListLoading(true);
    try {
      const allResult = await instance.post("/allProductList");

      setAllSearchList(allResult.data);
      setListLoading(false);
    } catch (error) {
      setListLoading(false);
    }
  };

  const changeHandler = (obj: any) => {
    setLoading(true);
    router.push(`/${obj.value}`);
  };

  const onfocus = () => {
    if (!allSearchList.length) {
      getAllList();
    }
  };

  return (
    <Select
      className="search-select"
      classNamePrefix="search-select"
      placeholder="Search USA Databases"
      options={allSearchList}
      isLoading={listLoading || loading}
      onFocus={onfocus}
      noOptionsMessage={() => "No Database Found for your Search Result"}
      loadingMessage={() => {
        return <div>Fetching Database List</div>;
      }}
      onChange={changeHandler}
    />
  );
};

export default Search;
