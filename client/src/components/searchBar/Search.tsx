import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./search.css";
import "../../pages/SearchPage";

export default function Search() {
  const [textSearch, setTextSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("Artist");
  const options = ["Artist", "Album", "Titre"];
  //const [deleteText, setDeleteText] = useState("");

  const navigate = useNavigate();

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (textSearch !== "" && categorySearch !== "") {
      navigate(`/SearchPage/${categorySearch}/${textSearch}`);
    }
  };

  const handleOnChangeInput = (event2: ChangeEvent<HTMLInputElement>) => {
    // prevent special characters from being entered
    const regEx = new RegExp(/^[a-zA-Zàéèç\-'0-9\s\b]*$/g);

    if (regEx.test(event2.target.value)) setTextSearch(event2.target.value);
  };

  return (
    <>
      <div className="search">
        <form onSubmit={(e) => handleSubmitSearch(e)}>
          <select
            id="category"
            onChange={(env) => setCategorySearch(env.target.value)}
          >
            <option value={options[0]}>Artist</option>
            <option value={options[1]}>Album</option>
            <option value={options[2]}>Titre</option>
          </select>
          <input
            type="text"
            name="search"
            value={textSearch}
            onChange={(event2) => handleOnChangeInput(event2)}
          />
          <button
            type="submit"
            className="delete"
            onClick={() => setTextSearch("")}
          >
            <b>x</b>
          </button>
          <button
            type="submit"
            className="validate"
            value="Submit"
            name="Search"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
