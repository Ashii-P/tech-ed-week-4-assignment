const postContainer = document.getElementById("post-container");
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

    h3.setAttribute("id", "place");
    h4.setAttribute("id", "postcode");
    pTag.setAttribute("id", "comment");
    image.setAttribute("id", "photo");
    deleteButton.setAttribute("id", "delete-btn");
    div.setAttribute("id", "post");
    deleteButton.addEventListener(`click`, () => {
      handleDelete(singlePost.id);
    });

    div.appendChild(image);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(pTag);
    div.appendChild(deleteButton);

    postContainer.appendChild(div);
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

const form = document.getElementById("form");
async function submitCymruPost(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const postData = Object.fromEntries(formData);
  fetch(`${cymru_api}/cymruposts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
}
form.addEventListener("submit", submitCymruPost);
