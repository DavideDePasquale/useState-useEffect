import { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
// import CommentArea from './CommentArea'

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  // state = {
  //   selected: false,
  // }
  const [selected] = useState(false);

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}

        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none"
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => changeSelectedBook(book.asin)}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  );
};

export default SingleBook;
