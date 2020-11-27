import React, { useState } from "react";
import { getDate } from "../utils/DateUtils";

export default function PostForm() {
  const [postData, setPostData] = useState({});
  return (
    <form>
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
          required
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
          name="location"
          value={postData.location}
          onChange={handleChange}
          required
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
          required
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
          required
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
    </form>
  );
  function handleChange() {}
}
