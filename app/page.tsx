"use client";

import Button from "./components/button/button";
import Dropdown from "./components/dropdown/dropdown";
import ImageUploader from "./components/image-uploader/image-uploader";
import QuestionCircle from "./components/icons/question-circle";
import Toggle from "./components/toggle/toggle";
import styles from "./page.module.css";
import tags from "./constants/tags";
import { useState } from "react";
import { user } from "./constants/mock-data";

type formData = {
  title: string;
  description?: string;
  private: boolean;
  grade?: string;
  subject?: string;
  language?: string;
};

const defaultFormData = {
  title: "",
  description: "",
  private: false,
  grade: tags.grades[0].value,
  subject: tags.subjects[0].value,
  language: tags.languages[0].value,
};

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: !(prev as any)[name],
    }));
  };

  const handleSubmit: React.MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const newError = validate(formData);
    setError(newError);

    // don't submit with errors
    if (newError !== "") {
      return;
    }

    setLoading(true);

    const requestData = JSON.stringify(formData);

    // hit api with request data
    fetch("/api/create", {
      method: "POST",
      body: requestData,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      // pretending to load for a bit...
      window.setTimeout(() => {
        alert(`Succesfully created 🎉
        ${requestData}`);

        // reset state
        setLoading(false);
        setFormData(defaultFormData);
      }, 2000);
    });
  };

  const validate = (data: formData): string => {
    if (!data.title.trim()) {
      return "Required";
    }

    return "";
  };

  return (
    <main className={styles.main}>
      <span>
        <h1>Question Set Creator</h1>
        <sup>
          <a
            href="https://help.blooket.com/hc/en-us/articles/15980599804823-Creating-a-Question-Set"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.help}>
              <QuestionCircle />
            </span>
          </a>
        </sup>
      </span>
      <div className={styles.wrapper}>
        <form>
          <div className={styles.card}>
            <div className={styles.title}>
              <h2>Create New Set</h2>
            </div>
            <div className={`${styles.section} ${styles.half}`}>
              <ImageUploader />
            </div>
            <div className={`${styles.section} ${styles.half}`}>
              <label>
                <p className={`${styles.label}`}>
                  Title *{" "}
                  {error && <span className={styles.error}>{error}</span>}
                </p>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder={`New set for ${user.name}'s class`}
                  onChange={handleChange}
                  required={true}
                  disabled={loading}
                  className={error ? "error" : ""}
                />
              </label>
              <label className={styles.textareaParent}>
                <p className={styles.label}>Description</p>
                <textarea
                  className={styles.textarea}
                  name="description"
                  value={formData.description}
                  placeholder="Take this quiz and test your knowledge of..."
                  onChange={handleChange}
                  disabled={loading}
                ></textarea>
              </label>
              <label className={styles.toggle}>
                <Toggle
                  checked={formData.private}
                  handleToggle={handleToggle}
                />
                {formData.private ? (
                  <p>
                    Private <span>(Only you can see this question set)</span>
                  </p>
                ) : (
                  <p>
                    Public <span>(Anyone can see this question set)</span>
                  </p>
                )}
              </label>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <h2>Tags</h2>
            </div>
            <div className={`${styles.section} ${styles.third}`}>
              <label>
                <p className={styles.label}>Grade Level</p>
                <Dropdown
                  name="grade"
                  value={formData.grade}
                  options={tags.grades}
                  onChange={handleChange}
                  isLoading={loading}
                />
              </label>
            </div>
            <div className={`${styles.section} ${styles.third}`}>
              <label>
                <p className={styles.label}>Subject</p>
                <Dropdown
                  name="subject"
                  value={formData.subject}
                  options={tags.subjects}
                  onChange={handleChange}
                  isLoading={loading}
                />
              </label>
            </div>
            <div className={`${styles.section} ${styles.third}`}>
              <label>
                <p className={styles.label}>Language</p>
                <Dropdown
                  name="language"
                  value={formData.language}
                  options={tags.languages}
                  onChange={handleChange}
                  isLoading={loading}
                />
              </label>
            </div>
          </div>
          <div className={styles.submit}>
            <Button
              handleSubmit={handleSubmit}
              isLoading={loading}
              text={"Create"}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
