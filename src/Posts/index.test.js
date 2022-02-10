import { Posts } from "./index.js";
import { Post } from "../Post/index.js";
import React from "react";

test("Given posts and handleDelete, return a Post tag with correct values", () => {
  const posts = {
    index: 4,
    card: {
      id: 5,
      iscomplete: true,
      week: 11,
      link: "www.jest_testing.com",
      tags: "Jest",
      summary: "This is for testing with Jest",
    },
  };
  const handleDelete = jest.fn();

  const actual = <Posts posts={posts} handleDelete={handleDelete} />;

  const expected = (
    <Post
      key={4}
      id={5}
      isComplete={true}
      week={11}
      link={"www.jest_testing.com"}
      tags={"Jest"}
      summary={"This is for testing with Jest"}
      handleDelete={handleDelete}
    />
  );
  expect(actual).toEqual(expected);
});

test("Check if component Post exist in Posts", () => {
  expect(Posts).toContain(<Post />);
});
