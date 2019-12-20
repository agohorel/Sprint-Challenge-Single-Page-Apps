import React from "react";

export default function SearchForm({ setFilterTerm }) {
  return (
    <section className="search-form">
      <input type="text" onChange={e => setFilterTerm(e.target.value)}></input>
    </section>
  );
}
