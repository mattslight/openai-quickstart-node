import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [queryInput, setQueryInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setQueryInput("");
  }

  return (
    <div>
      <main className={styles.main}>
        <img style={{ width: 200 }} src="https://s3.eu-west-2.amazonaws.com/kps-cms-stage-assets/layout/kps-logo-dark_2021-05-07-165423_jhky.svg?mtime=20210507165424&amp;focal=none" />
        <h3>What's your question?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query"
            placeholder="What's your question?"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
          />
          <input type="submit" value="Answer" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
