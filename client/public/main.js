const app = document.getElementById("app");
const cymru_api = "https://tech-ed-week-4-assignment.onrender.com";

async function fetchPosts() {
  const response = await fetch(`${cymru_api}/cymruposts`);
  const apiData = await response.json();
  displayCymruPosts(apiData);
}
function displayCymruPosts(param) {
  param.forEach((singlePost) => {
    const h3 = document.createElement(`h3`);
    const h4 = document.createElement(`h4`);
    const pTag = document.createElement(`p`);
    const image = document.createElement(`IMG`);
    const deleteButton = document.createElement(`button`);
    const div = document.createElement("div");

    h3.innerText = singlePost.place;
    h4.innerText = singlePost.postcode;
    pTag.innerText = singlePost.comment;
    image.src = singlePost.photo;
    deleteButton.innerText = `Delete Post`;
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(pTag);
    div.appendChild(image);
    div.appendChild(deleteButton);

    app.appendChild(div);

    deleteButton.addEventListener(`click`, () => {
      handleDelete(singlePost.id);
    });
  });
}

fetchPosts();
async function handleDelete(id) {
  const response = await fetch(`${cymru_api}/cymruposts/${id}`, {
    method: `DELETE`,
  });
  if (response.ok) {
    fetchPosts();
  }
}
