import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddNewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesciption = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation...
    if (
      enteredTitle.trim() === "" ||
      enteredDesciption.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDesciption,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          OOps looks like you forgot to enter value
        </p>
        <p className="text-stone-600 mb-4">
          please make sure you provide a valid input for field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-slate-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
