import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Book } from "../../types";
import coverBook from "../../icons/coverBook.png";

const CardWrapper = styled.div`
  background: linear-gradient(rgb(0 0 0 / 14%) 0%, rgba(62, 66, 75, 0) 100%);
  filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.25));
  border-radius: 18px;
  //   width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  margin: 20px;
  height: 250px;
  width: 160px;
  object-fit: content;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 90%;
`;

const Categories = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 400;
  color: #e4e9eb;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const Author = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;

interface CardProps {
  book: Book;
}

function Card(props: CardProps) {
  const bookInfo = props.book.volumeInfo;

  return (
    <CardWrapper>
      <Link to={`/book/${props.book.id}`}>
        <Img
          src={
            bookInfo.imageLinks?.thumbnail
              ? bookInfo.imageLinks?.thumbnail
              : coverBook
          }
        ></Img>
      </Link>

      <CardContent>
        <Title>
          {bookInfo.title?.length > 50
            ? bookInfo.title?.slice(0, 50) + "..."
            : bookInfo.title}
        </Title>
        <Author>
          {bookInfo?.authors
            ? bookInfo?.authors[0].length > 100
              ? null
              : bookInfo.authors?.slice(0, 3).join(", ")
            : null}
        </Author>
        <Categories>
          {bookInfo?.categories ? bookInfo?.categories[0] : ""}
        </Categories>
      </CardContent>
    </CardWrapper>
  );
}

export default React.memo(Card);
