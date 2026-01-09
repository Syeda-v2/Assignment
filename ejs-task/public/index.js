const list_session = document.getElementById("list-session");
const update_session = document.getElementById("update-session");
const delete_session = document.getElementById("delete-session");

function openUpdatePage(id, name, email) {
  document.getElementById("userid").value = id;
  document.getElementById("username").value = name;
  document.getElementById("useremail").value = email;
  update_session.style.display = "block";
}

function closeUpdatePage() {
  update_session.style.display = "none";
  list_session.style.display = "block";
}

function openDeletePage(id, name, email) {
  document.getElementById("userid").value = id;
  document.getElementById("deleteUsername").innerHTML = name;
  document.getElementById("deleteUseremail").innerHTML = email;
  delete_session.style.display = "block";
}

function closeDeletePage() {
  delete_session.style.display = "none";
}

async function update() {
  try {
    const id = document.getElementById("userid").value;
    const name = document.getElementById("username").value;
    const email = document.getElementById("useremail").value;

    const res = await fetch(`/api/edit/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.reload();
    } else {
      alert("unable to update");
    }
  } catch (err) {
    console.log("Error occured" + err);
  }
}

async function deleteUser() {
  try {
    const id = document.getElementById("userid").value;
    console.log(id);

    const res = await fetch(`/api/delete/${id}`, {
      method: "GET",
    });

    const data = await res.json();

    if (data.success) {
      window.location.reload();
    } else {
      alert("unable to delete");
    }
  } catch (err) {
    console.log("Error occured" + err);
  }
}
