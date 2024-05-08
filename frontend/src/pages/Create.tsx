import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const navigate = useNavigate();

  function publish() {
    axios
      .post(
        `${BASE_URL}/api/v1/blog`,
        {
          title,
          content,
          published: true,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        navigate(`/blog/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Publish failed:", error);
      });
  }

  function draft() {
    axios
      .post(
        `${BASE_URL}/api/v1/blog`,
        {
          title,
          content,
          published: false,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        navigate(`/blog/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Publish failed:", error);
      });
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="max-w-screen-lg w-full">
        <div className="mb-5 flex justify-between items-center">
          <Input
            onChange={(e) => settitle(e.target.value)}
            className="max-w-full"
            size="lg"
            isRequired={true}
            type="text"
            label="Title"
          />
          <div className="pl-4 flex gap-3">
            <Button onClick={draft} size="lg" color="primary">
              Save as draft
            </Button>
            <Button onClick={publish} size="lg" color="success">
              Publish
            </Button>
          </div>
        </div>
        <Textarea
          onChange={(e) => setcontent(e.target.value)}
          size="lg"
          isRequired={true}
          label="Description"
          placeholder="Enter your description"
        />
      </div>
    </div>
  );
};

export default Create;
