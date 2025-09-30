import { useState } from "react";
import "./App.css";

interface Image {
  url: string;
}

const ImageModal: React.FC<Image> = ({ url }) => {
  const [newLikes, setNewLikes] = useState(0);
  const [comments, setComments] = useState([""]);
  const [inputedComment, setInputedComment] = useState("");

  return (
    <div
      id="modal"
      style={{
        height: "50vh",
        width: "50vw",
        backgroundColor: "black",
        zIndex: 1,
      }}
    >
      <img
        id="image"
        src={url}
        style={{
          height: "50vh",
          width: "50vh",
          float: "left",
          backgroundColor: "magenta",
          border: "1px solid green",
        }}
      />
      <div
        id="info"
        style={{
          height: "50vh",
          width: "20vw",
          float: "left",
          padding: 20,
          color: "white",
        }}
      >
        <span
          id="likesContainer"
          style={{ float: "left", alignContent: "left", width: "100%" }}
        >
          <button id="Likes" onClick={() => setNewLikes(newLikes + 1)}>
            ♡
          </button>
          <span>{newLikes}</span>
        </span>
        <div
          id="commentContainer"
          style={{ display: "block", float: "left", paddingTop: 20 }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInputedComment("");
            }}
          >
            <input
              id="newComment"
              value={inputedComment}
              onChange={(event) => {
                setInputedComment(event.target.value);
              }}
              placeholder="Add new comment"
            ></input>
            <button
              type="submit"
              id="postComment"
              onClick={() => setComments([...comments, inputedComment])}
            >
              Post
            </button>
            <div
              id="commentsSection"
              style={{
                alignContent: "left",
                overflowY: "scroll",
                height: "30vh",
                width: "50vh",
                marginTop: 10,
                wordWrap: "break-word",
              }}
            >
              {comments.map((comments, index) => {
                return (
                  <p key={index} style={{ textAlign: "left" }}>
                    {comments}
                  </p>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
