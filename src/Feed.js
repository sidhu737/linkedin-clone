import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import db from "./firebase";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    // db.collection("posts").onSnapshot((snapshot) => {
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   );
    // });
    // snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   data: doc.data(),
    // }))
    //   let books = [];
    //   snapshot.docs.forEach((doc) => {
    //     books.push({ ...doc.data(), id: doc.id });
    //   });
    //   console.log(books);
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    // db.collection("posts").add({
    //   name: "Siddu",
    //   description: "just for test",
    //   message: "",
    // });
    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts feed goes here */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            name={post.name}
            description={post.description}
            message={post.message}
          />
        ))}
      </FlipMove>

      {/* <Post
        name="Siddu Naroju"
        description="Some test desc.."
        message="This is working"
      /> */}
    </div>
  );
}

export default Feed;
