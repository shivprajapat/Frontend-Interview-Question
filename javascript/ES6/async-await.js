const API = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  try {
    const result = await fetch(API);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

console.log(fetchUsers());
