import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function WinnerDialouge() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" placeholder=''>
        Open Dialog
      </Button>
      <Dialog className=" h-[30vh] w-[40vh] ml-[30vw] mt-[35vh]" placeholder='' open={open} handler={handleOpen}>
        <DialogHeader placeholder=''>The Winner is: You!!</DialogHeader>
        <DialogFooter placeholder=''>
          <button
            color="red"
            onClick={handleOpen}
            className="h-auto  bg-green-800 hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-4 border border-green-900 hover:border-green-500 rounded"
          >
            <span>Okay</span>
          </button>
          <Button placeholder='' variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}