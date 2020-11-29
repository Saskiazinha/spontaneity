import React, { useState } from "react";
import { getDate } from "../utils/DateUtils";

const initialState = {
  localDate: "",
  startPoint: "",
  endPoint: "",
  statusTime: "GREEN",
  location: "",
  statusLocation: "GREEN",
  category: "Drinks",
  statusCategory: "GREEN",
  notes: "",
};

export default function PostForm({ onSave, post = initialState }) {
  const [postData, setPostData] = useState(post);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose day
        <input
          name="localDate"
          value={postData.localDate}
          onChange={handleChange}
          type="date"
          min={getDate(0)}
          max={getDate(2)}
          required
        />
      </label>
      <label>
        From
        <input
          name="startPoint"
          value={postData.startPoint}
          onChange={handleChange}
          type="time"
          required
        />
      </label>
      <label>
        To
        <input
          name="endPoint"
          value={postData.endPoint}
          onChange={handleChange}
          type="time"
          required
        />
      </label>
      <label>
        Time flexibility
        <select
          name="statusTime"
          value={postData.statusTime}
          onChange={handleChange}
        >
          <option value="GREEN">totally flexible(green)</option>
          <option value="YELLOW">a little flexible(yellow)</option>
          <option value="BLUE">not flexibel(blue)</option>
        </select>
      </label>
      <label>
        Location
        <input
          name="location"
          value={postData.location}
          onChange={handleChange}
          type="text"
          required
        />
      </label>
      <label>
        Location flexibility
        <select
          name="statusLocation"
          value={postData.statusLocation}
          onChange={handleChange}
        >
          <option value="GREEN">totally flexible(green)</option>
          <option value="YELLOW">a little flexible(yellow)</option>
          <option value="BLUE">not flexibel(blue)</option>
        </select>
      </label>
      <label>
        Category
        <select
          name="category"
          value={postData.category}
          onChange={handleChange}
        >
          <option value="Drinks">Drinks out</option>
          <option value="Meal">Meal out</option>
          <option value="Events">Events</option>
          <option value="Exercise">Exercise</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Party">Party</option>
          <option value="Hangout">Hangout</option>
        </select>
      </label>
      <label>
        Category flexibility
        <select
          name="statusCategory"
          value={postData.statusCategory}
          onChange={handleChange}
        >
          <option value="GREEN">totally flexible(green)</option>
          <option value="YELLOW">a little flexible(yellow)</option>
          <option value="BLUE">not flexibel(blue)</option>
        </select>
      </label>
      <label>
        Notes
        <input
          name="notes"
          value={postData.notes}
          onChange={handleChange}
          type="text"
        />
      </label>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
  function handleChange(event) {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(postData);
  }
}
