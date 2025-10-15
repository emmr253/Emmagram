import "./ImageModal.css";
import { useState } from "react";
import type { ImageModalProps } from "./Interfaces";

const ImageModal: React.FC<ImageModalProps> = ({ values, setNewModal }) => {
  const [isLiked, setIsLiked] = useState(values.liked);
  // const [comments, setComments] = useState([""]);
  const [inputedComment, setInputedComment] = useState("");


  return (
    <div id="whiteBackground">
      <div id="modal">
        <img id="image" src={values.url} />
        <div id="info">
          <div id="title">
            <p
            style={{cursor: "pointer", float:"right"}}
              onClick={() => setNewModal(<></>)}
            >X</p>
            <h2
            >{values.title}</h2>
          </div>
          <div id="likesContainer">
            <button id="Likes" onClick={() => {
              setIsLiked(!isLiked)
              values.liked = !values.liked
            }}>
              {isLiked ? "❤️" : "🩶"}
            </button>
          </div>
          <div id="commentContainer">
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
                // onClick={() => setComments([...comments, inputedComment])}
                onClick={() => values.comments = [...values.comments, inputedComment]}
              >
                Post
              </button>
               <div id="commentSection">
                {/* {comments.map((comments, index) => { */}
                {values.comments.map((comment, index) => {
                  return (
                    <p id="comment" key={index}>
                      {comment}
                    </p>
                  );
                })}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
