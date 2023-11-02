const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    alert("An error occured!");
  }
};

const getData = async (path) => {
  try {
    const respone = await fetch(`${BASE_URL}/${path}`);
    const json = await respone.json();
    return json;
  } catch (error) {
    // alert("An error occurd");
  }
};

export { postData, getData };
