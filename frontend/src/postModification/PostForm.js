import React, { useState } from "react";
import styled from "styled-components/macro";
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
    <FormStyling onSubmit={handleSubmit}>
      <Date>
        <label htmlFor="localDate">Date</label>
        <input
          id="localDate"
          value={postData.localDate}
          onChange={handleChange}
          type="date"
          min={getDate(0)}
          max={getDate(2)}
          required
        />
      </Date>
      <Time>
        <label htmlFor="startPoint">From</label>
        <input
          id="startPoint"
          value={postData.startPoint}
          onChange={handleChange}
          type="time"
          required
        />
        <label htmlFor="endPoint">To</label>
        <input
          id="endPoint"
          value={postData.endPoint}
          onChange={handleChange}
          type="time"
          required
        />
        <select
          name="statusTime"
          value={postData.statusTime}
          onChange={handleChange}
        >
          <option value="GREEN">fully flexible</option>
          <option value="YELLOW">a little flexible</option>
          <option value="BLUE">not flexible</option>
        </select>
      </Time>
      <Location>
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
        <select
          name="statusLocation"
          value={postData.statusLocation}
          onChange={handleChange}
        >
          <option value="GREEN">fully flexible</option>
          <option value="YELLOW">a little flexible</option>
          <option value="BLUE">not flexible</option>
        </select>
      </Location>
      <Category>
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
        <select
          name="statusCategory"
          value={postData.statusCategory}
          onChange={handleChange}
        >
          <option value="GREEN">fully flexible</option>
          <option value="YELLOW">a little flexible</option>
          <option value="BLUE">not flexible</option>
        </select>
      </Category>
      <Notes>
        Notes
        <textarea
          name="notes"
          value={postData.notes}
          onChange={handleChange}
          type="text"
        />
      </Notes>
      <Button>Save</Button>
    </FormStyling>
  );
  function handleChange(event) {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(postData);
  }
}

const FormStyling = styled.form`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  background-color: var(--turquoise-bright);
  box-shadow: 3px 3px 3px #95b0b4;
  border-radius: 20px;
  padding: var(--size-m) var(--size-m);
  margin: 0 var(--size-xl) var(--size-l) var(--size-xl);
`;

const Date = styled.div`
  grid-row: 1;
  display: grid;
  grid-template-columns: min-content;
`;

const Time = styled.div`
  grid-row: 2;
`;

const Location = styled.div`
  grid-row: 3;
`;

const Category = styled.div`
  grid-row: 4;
`;

const Notes = styled.label`
  grid-row: 5;
  display: grid;
`;

const Button = styled.button`
  grid-row: 6;
  height: 30px;
  width: 100px;
  justify-self: center;
`;
