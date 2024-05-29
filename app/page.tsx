"use client";

import { useEffect, useRef, useState } from "react";

import Dropdown from "./components/dropdown/dropdown";
import RightArrow from "./components/icons/right-arrow";
import Spinner from "./components/icons/spinner";
import styles from "./page.module.css";
import tags from "./constants/tags";
import { user } from "./constants/mock-data";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: `${tags.grades[0].label} ${tags.subjects[0].label} by ${user.name}`,
    description: "",
    private: false,
    grade: tags.grades[0].value,
    subject: tags.subjects[0].value,
    language: tags.languages[0].value,
  });

  const timerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleToggle = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["private"]: !prevFormData.private,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // hit "api" with request data
    fetch("/", {
      method: "POST",
      body: JSON.stringify({
        author: user.name,
        coverImage: null,
        date: new Date(),
        desc: formData.description,
        numQuestions: "0",
        playCount: "0",
        private: formData.private,
        title: formData.title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // pretending to load for a bit...
    setLoading(true);
    timerRef.current = window.setTimeout(() => {
      setLoading(false);
      alert(`Succesfully created 🎉
        Title: ${formData.title}
        Description: ${formData.description}
        Author: ${user.name}
        Private: ${formData.private}
        Tags: ${formData.grade}, ${formData.subject}, ${formData.language}
      `);
    }, 1500);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Question Set Creator</h1>
      <form className={styles.form}>
        <div className={styles.container}>
          <h2>Create New</h2>
          <label className={styles.toggleWrapper}>
            Private
            <input
              className={styles.checkbox}
              type="checkbox"
              name="private"
              defaultChecked={false}
              value={`${formData.private}`}
              onChange={handleToggle}
            />
          </label>
          <div>
            Cover Image <p>Drag and Drop or</p>
            <button type="button">Image gallery</button>
            <button type="button">Upload a file</button>
            <button type="button">Upload by URL</button>
          </div>
          <label>
            Title *
            <input
              className={styles.input}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required={true}
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              placeholder="Test your knowledge of..."
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className={styles.container}>
          <h2>Tags</h2>
          <label>
            Grade Level
            <Dropdown
              name="grade"
              value={formData.grade}
              options={tags.grades}
              onChange={handleChange}
            />
          </label>
          <label>
            Subject
            <Dropdown
              name="subject"
              value={formData.subject}
              options={tags.subjects}
              onChange={handleChange}
            />
          </label>
          <label>
            Language
            <Dropdown
              name="language"
              value={formData.language}
              options={tags.languages}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Create {loading ? <Spinner /> : <RightArrow />}
        </button>
      </form>
    </main>
  );
}
