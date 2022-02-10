import { Post } from "../Post/index.js";
import CompletionButton from "../CompletionButton";

test("Check if component CompletionButton exist in Post", () => {
  expect(Post()).toContain(<CompletionButton />);
});

test("Check if the whole line link exist in Post", () => {
  expect(Post).toContain(
    <span className="material-icons-outlined material-icons">link</span>
  );
});
