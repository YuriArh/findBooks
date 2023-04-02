import styled from "styled-components";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBooks } from "../../redux/actionCreators/getBooks";
import { addError } from "../../redux/features/booksSlice";

import Controls from "../../components/controls";
import Layout from "../../components/layout";
import LayoutHeader from "../../components/layoutHeader";
import Search from "../../components/search";
import List from "../../components/list";
import LoadMore from "../../components/loadMore";
import Card from "../../components/card";
import MyLoader from "../../components/myLoader";

const TotalItems = styled.div`
  margin-top: 15px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const MainWrapper = styled.div`
  margin: 0 auto;
`;

function Main() {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.booksItems);
  const loading = useAppSelector((state) => state.books.loading);
  const error = useAppSelector((state) => state.books.error);
  const totalItems = useAppSelector((state) => state.books.booksTotalItems);
  const [count, setCount] = useState<number>(30);
  const [categorie, setCategorie] = useState<string>("all");
  const [term, setTerm] = useState<string | undefined>("");
  const [sort, setSort] = useState<string>("newest");

  useEffect(() => {
    if (!term) {
      return;
    }
    if (categorie === "all") {
      dispatch(
        getBooks({
          string: `${term}&orderBy=${sort}`,
          isNewState: true,
        })
      );
    } else {
      dispatch(
        getBooks({
          string: `${term}+subject:${categorie}&orderBy=${sort}`,
          isNewState: true,
        })
      );
    }
  }, [categorie, sort, term]);

  const onSearch = (value?: string) => {
    if (!value) {
      dispatch(addError("enter something in the search"));
    } else {
      setTerm(value);
    }
  };

  function onLoadMore() {
    if (!term) {
      dispatch(addError("enter something in the search"));
      return;
    }
    setCount(count + 30);

    if (categorie === "all") {
      dispatch(
        getBooks({
          string: `${term}&orderBy=${sort}`,
          isNewState: true,
        })
      );
    } else {
      dispatch(
        getBooks({
          string: `${term}+subject:${categorie}&orderBy=${sort}`,
          isNewState: true,
        })
      );
    }
  }

  console.log(error);
  return (
    <MainWrapper>
      <Layout>
        <LayoutHeader>
          <Search firstValue={term} onSearch={onSearch} error={error} />
          <Controls setSort={setSort} setCategorie={setCategorie} />
        </LayoutHeader>
        <TotalItems>
          {loading ? "" : totalItems ? `Found ${totalItems} results` : ""}
        </TotalItems>
        <List>
          {books.length
            ? books?.map((item, i) => {
                return <Card key={i} book={item} />;
              })
            : loading
            ? new Array(25).fill(0).map((_, index) => <MyLoader key={index} />)
            : null}
        </List>
        {totalItems ? (
          <LoadMore
            onClick={() => {
              onLoadMore();
            }}
            loading={loading}
          />
        ) : (
          <></>
        )}
      </Layout>
    </MainWrapper>
  );
}

export default Main;
