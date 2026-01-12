//Open Update Page
async function openUpdatePage(id) {
  try {
    const response = await fetch(`/api/${id}/edit`, {
      method: "GET",
    })
      .then((res) => res.text())
      .then(
        (html) => (document.getElementById("update-model").innerHTML = html)
      );
  } catch (err) {
    console.log(err);
  }
}

//Open Delete Page
async function openDeletePage(id) {
  try {
    const response = await fetch(`/api/${id}/delete`, {
      method: "GET",
    })
      .then((res) => res.text())
      .then(
        (html) => (document.getElementById("update-model").innerHTML = html)
      );
  } catch (err) {
    console.log(err);
  }
}

//Close Page
function closePage() {
  document.getElementById("update-model").innerHTML = "";
}

//Update Logic
async function update(id) {
  try {
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

//Delete Logic
async function deleteUser(id) {
  try {
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
