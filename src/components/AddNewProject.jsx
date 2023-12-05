import { useRef } from "react";
import Input from "./Input";

export default function AddNewProject({ onAdd }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesciption = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation...
    onAdd({
      title: enteredTitle,
      description: enteredDesciption,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
