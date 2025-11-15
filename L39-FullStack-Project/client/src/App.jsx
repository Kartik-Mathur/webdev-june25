import React from "react";
import Toolbar from "./components/Toolbar";
import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import axios from "./api/axios";

const App = () => {
  const [tool, setTool] = useState("select");
  const [socket, setSocket] = useState(null);
  const [boardId, setBoardId] = useState("");
  // const [board, setBoard] = useState("");
  const [elements, setElements] = useState([]);
  const [title, setTitle] = useState("");

  let SOCKET_URL = "http://localhost:4444";
  useEffect(() => {
    let s = io(SOCKET_URL);
    setSocket(s);

    return () => s.disconnect();
  }, []);

  useEffect(() => {
    if (!socket) return;

    const initBoard = async () => {
      const url = new URL(window.location.href);
      let idFromUrl = url.searchParams.get("boardId");
      let board = null;
      if (idFromUrl) {
        let { data } = await axios.get(`/api/boards/getboard/${idFromUrl}`);
        board = data;

        setTitle(board.title);
        setBoardId(board._id);
        setElements(board.elements);
      } else {
        let { data } = await axios.post(`/api/boards/createboard`, {
          title: "demo-board",
        });
        board = data;
        setTitle(board.title);
        setBoardId(board._id);
        setElements(board.elements);

        url.searchParams.set("boardId", board._id);
        window.history.replaceState({}, "", url);
      }
    };

    initBoard();
  }, [socket]);

  return (
    <div>
      <Toolbar activeTool={tool} setActiveTool={setTool} />
    </div>
  );
};

export default App;
