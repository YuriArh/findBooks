import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneBook } from "../../redux/actionCreators/getOneBook";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import BookLoader from "../../components/bookLoader";
import coverBook from "../../icons/coverBook.png";
import Layout from "../../components/layout";
import LayoutHeader from "../../components/layoutHeader";

import styled from "styled-components";
import backButton from "../../icons/back-button.png";

const BookContent = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const BackButton = styled.button`
  background: inherit;
  border: none;
  width: 64px;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 300px;
  margin-right: 20px;
  max-height: 450px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const DescribeBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
`;

const Author = styled.p`
  color: white;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  color: white;
  margin-bottom: 20px;

  font-weight: 500;
`;

const Categories = styled.p`
  color: white;
  margin-bottom: 20px;
  font-weight: 400;
  text-decoration: underline;
`;

function Book() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const oneBook = useAppSelector((state) => state.oneBook.data);
  const loading = useAppSelector((state) => state.oneBook.loading);

  const bookInfo = oneBook.volumeInfo;

  useEffect(() => {
    dispatch(getOneBook(params.id));
  }, [params.id]);

  return (
    <Layout>
      <LayoutHeader>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={backButton} alt={"back"}></img>
        </BackButton>
      </LayoutHeader>
      {loading ? (
        <BookLoader />
      ) : (
        <BookContent>
          <Img
            src={
              bookInfo.imageLinks?.medium
                ? bookInfo.imageLinks?.medium
                : coverBook
            }
          />
          <DescribeBlock>
            <Title>{bookInfo.title}</Title>
            <Author>
              {bookInfo.authors
                ? bookInfo.authors?.slice(0, 3).join(", ")
                : null}
            </Author>
            <Description>{bookInfo.description}</Description>
            <Categories>
              {bookInfo.categories ? bookInfo.categories.join("/ ") : null}
            </Categories>
          </DescribeBlock>
        </BookContent>
      )}
    </Layout>
  );
}

export default Book;
