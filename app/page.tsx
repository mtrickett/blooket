"use client";

import { useEffect, useRef, useState } from "react";

import Dropdown from "./components/dropdown/dropdown";
import ImageUploader from "./components/image-uploader/image-uploader";
import RightArrow from "./components/icons/right-arrow";
import Spinner from "./components/icons/spinner";
import styles from "./page.module.css";
import tags from "./constants/tags";
import { user } from "./constants/mock-data";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    private: false,
    grade: tags.grades[0].value,
    subject: tags.subjects[0].value,
    language: tags.languages[0].value,
  });

  const timerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // hit "api" with request data
    // fetch("/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     author: user.name,
    //     coverImage: null,
    //     date: new Date(),
    //     desc: formData.description,
    //     numQuestions: "0",
    //     playCount: "0",
    //     private: formData.private,
    //     title: formData.title,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });

    // pretending to load for a bit...
    setLoading(true);
    console.log(formData);

    timerRef.current = window.setTimeout(() => {
      setLoading(false);
      // alert(`Succesfully created 🎉
      //   Title: ${formData.title}
      //   Description: ${formData.description}
      //   Author: ${user.name}
      //   Private: ${formData.private}
      //   Tags: ${formData.grade}, ${formData.subject}, ${formData.language}
      // `);
    }, 1500);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Question Set Creator</h1>
      <div className={styles.wrapper}>
        <form>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>Create New</h2>
              <label>
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
            </div>
            <div className={`${styles.section} ${styles.half}`}>
              <ImageUploader />
            </div>
            <div className={`${styles.section} ${styles.half}`}>
              <label>
                <p className={styles.label}>Title *</p>
                <input
                  className={styles.input}
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder={`My New Set by ${user.name}`}
                  onChange={handleChange}
                  required={true}
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
                ></textarea>
              </label>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.header}>
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
                />
              </label>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Create {loading ? <Spinner /> : <RightArrow />}
          </button>
        </form>
      </div>
    </main>
  );
}
