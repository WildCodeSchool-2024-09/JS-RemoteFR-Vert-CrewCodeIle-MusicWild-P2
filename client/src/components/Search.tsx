import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./search.css";
import "../pages/SearchPage";

export default function Search() {
  const [textSearch, setTextSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("Artist");

  const navigate = useNavigate();

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (textSearch !== "" && categorySearch !== "") {
      navigate(`/SearchPage/${categorySearch}/${textSearch}`);
    }
  };

  return (
    <>
      <div className="search">
        <form onSubmit={(e) => handleSubmitSearch(e)}>
          <select
            id="category"
            onChange={(env) => setCategorySearch(env.target.value)}
          >
            <option value="artist">Artist</option>
            <option value="Album">Album</option>
            <option value="Genre">Genre</option>
          </select>
          <input
            type="text"
            name="search"
            onChange={(event2) => setTextSearch(event2.target.value)}
          />
          <button type="submit" value="Submit" name="Search">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
