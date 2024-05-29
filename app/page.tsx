import Dropdown from "./components/dropdown/dropdown";
import styles from "./page.module.css";
import tags from "./constants/tags";

export default function Create() {
  return (
    <main className={styles.main}>
      <h1>Create New Quiz</h1>
      <div className={styles.container}>
        <div>
          Cover Image <p>Drag and Drop or</p>
          <button>Image gallery</button>
          <button>Upload a file</button>
          <button>Upload by URL</button>
        </div>
        <form>
          <label>
            Title *
            <input
              type="text"
              name="title"
              placeholder="All ages Trivia by cool_user_1234"
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Test your knowledge of..."
            ></textarea>
          </label>
          <label>
            Public
            <input type="checkbox" name="public" defaultChecked={true} />
          </label>
          <label>
            Grade Level
            <Dropdown options={tags.grades} />
          </label>
          <label>
            Subject
            <Dropdown options={tags.subjects} />
          </label>
          <label>
            Language
            <Dropdown options={tags.languages} />
          </label>
        </form>
      </div>
    </main>
  );
}
