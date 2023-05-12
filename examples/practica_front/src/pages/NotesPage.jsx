import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "antd";
import {
  getNotesAsync,
  selectNoteState,
} from "../redux-toolkit/slices/noteSlice";
import { ListNotes } from "../components/ListNotes";

const { Title } = Typography;

export default function NotesPage(props) {
  const { notes, loading, error } = useSelector(selectNoteState);
  const dispatch = useDispatch();

  /** TODO: Save note in API*/
  const handleEdit = (note) => {
    //...
  };

  /** TODO: Delete note in API*/
  const handleDelete = (id) => {
    //...
  };

  useEffect(() => {
    dispatch(getNotesAsync());
  }, []);

  return (
    <>
      <Title level={2}>List of notes</Title>
      {/** TODO: link handlers to edit and delete note */}
      <ListNotes list={notes} />
    </>
  );
}
