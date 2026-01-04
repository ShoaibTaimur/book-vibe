import { toast } from "react-toastify";

const notifyExists = () => toast.warning("Already Exists");
const notifyDone = () => toast.success("Added");

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    notifyExists();
  } else {
    storedBookData.push(id);
    notifyDone();
    console.log(storedBookData);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredBook };
