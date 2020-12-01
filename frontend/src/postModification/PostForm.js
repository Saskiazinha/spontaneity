import React, { useState } from "react";
import styled from "styled-components/macro";
import { getDate } from "../utils/DateUtils";

const initialState = {
  title: "",
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
      <label htmlFor="Title">Title</label>
      <TitleInput
        name="title"
        value={postData.title}
        onChange={handleChange}
        type="text"
        required
      />
      <Date htmlFor="localDate">Date</Date>
      <DateInput
        name="localDate"
        value={postData.localDate}
        onChange={handleChange}
        type="date"
        min={getDate(0)}
        max={getDate(2)}
        required
      />
      <From htmlFor="startPoint">From</From>
      <StartInput
        name="startPoint"
        value={postData.startPoint}
        onChange={handleChange}
        type="time"
        required
      />
      <To htmlFor="endPoint">To</To>
      <End
        name="endPoint"
        value={postData.endPoint}
        onChange={handleChange}
        type="time"
        required
      />
      <StatusTime
        name="statusTime"
        value={postData.statusTime}
        onChange={handleChange}
      >
        <option value="GREEN">fully flexible</option>
        <option value="YELLOW">a little flexible</option>
        <option value="BLUE">not flexible</option>
      </StatusTime>
      <Location htmlFor="location">Location</Location>
      <LocationInput
        name="location"
        value={postData.location}
        onChange={handleChange}
        type="text"
        required
      />
      <StatusLocation
        name="statusLocation"
        value={postData.statusLocation}
        onChange={handleChange}
      >
        <option value="GREEN">fully flexible</option>
        <option value="YELLOW">a little flexible</option>
        <option value="BLUE">not flexible</option>
      </StatusLocation>
      <Category htmlFor="location">Category</Category>
      <CategorySelect
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
      </CategorySelect>
      <StatusCategory
        name="statusCategory"
        value={postData.statusCategory}
        onChange={handleChange}
      >
        <option value="GREEN">fully flexible</option>
        <option value="YELLOW">a little flexible</option>
        <option value="BLUE">not flexible</option>
      </StatusCategory>
      <Notes>
        Notes
        <textarea name="notes" value={postData.notes} onChange={handleChange} />
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
  grid-template-columns: min-content 110px 92px;
  grid-template-rows: repeat(6, min-content) 1fr min-content;
  column-gap: var(--size-s);
  row-gap: 20px;
  align-items: center;
  background-color: var(--turquoise-bright);
  box-shadow: 3px 3px 3px #95b0b4;
  border-radius: 20px;
  padding: var(--size-xl) var(--size-m);
  margin: 0 var(--size-xl) var(--size-l) var(--size-xl);
`;

const Notes = styled.label`
  grid-row: 7;
  grid-column: span 3;
  display: grid;
  textarea {
    height: 80px;
  }
`;

const Button = styled.button`
  grid-row: 8;
  grid-column: 1/4;
  justify-self: center;
  height: 30px;
  width: 100px;
`;

const TitleInput = styled.input`
  grid-row: 1;
  grid-column: 2/4;
`;

const Date = styled.label`
  grid-row: 2;
  grid-column: 1;
`;

const DateInput = styled.input`
  grid-row: 2;
  grid-column: 2/4;
`;

const From = styled.label`
  grid-row: 3;
  grid-column: 1;
`;

const StartInput = styled.input`
  grid-row: 3;
  grid-column: 2;
`;

const To = styled.label`
  grid-row: 4;
  grid-column: 1;
`;

const End = styled.input`
  grid-row: 4;
  grid-column: 2;
`;

const StatusTime = styled.select`
  grid-row: 3 / 5;
  grid-column: 3;
`;

const Location = styled.label`
  grid-row: 5;
  grid-column: 1;
`;

const LocationInput = styled.input`
  grid-row: 5;
  grid-column: 2;
`;

const StatusLocation = styled.select`
  grid-row: 5;
  grid-column: 3;
`;

const Category = styled.label`
  grid-row: 6;
  grid-column: 1;
`;

const CategorySelect = styled.select`
  grid-row: 6;
  grid-column: 2;
`;

const StatusCategory = styled.select`
  grid-row: 6;
  grid-column: 3;
`;
