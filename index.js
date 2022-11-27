const input = document.querySelector("input");
const submit = document.querySelector("button");
const reps = JSON.parse(localStorage.getItem("reps"));
submit.addEventListener("click", userGithub);

async function userGithub(e) {
  let array = [];
  const login = input.value;
  const url = `https://api.github.com/users/${login}/repos`;
  const response = await fetch(url);
  const post = await response.json();
  e.preventDefault();
  post.forEach((element) => {
    let user = [element.name, element.html_url, timeAgo(element.created_at)];
    array.push(user);
  });
  localStorage.setItem("reps", JSON.stringify(array));
  location.reload();
}

if (reps) {
  (function call() {
    const tHead = document.querySelectorAll(".thead");
    const tBody = document.querySelector("tbody");
    tHead[0].innerText = "";
    tHead[1].innerText = "Rep Name";
    tHead[2].innerText = "Rep URL";
    tHead[3].innerText = "Rep created";
    reps.forEach((item, index) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.innerText = index + 1;
      tr.append(th);
      tBody.append(tr);

      item.forEach((element, index) => {
        if (index === 1) {
          const td = document.createElement("td");
          const a = document.createElement("a");
          a.innerText = element;
          a.href = element;
          td.append(a);
          tr.append(td);
        } else {
          const td = document.createElement("td");
          td.innerText = element;
          tr.append(td);
        }
      });
    });
  })();
}

function timeAgo(userDate) {
  const oldDate = new Date(userDate);
  const newDate = new Date();
  const year = newDate.getFullYear() - oldDate.getFullYear();
  const month = newDate.getMonth() - oldDate.getMonth();
  const day = newDate.getDate() - oldDate.getDate();
  const hour = newDate.getHours() - oldDate.getHours();

  if (year === 1) {
    return `one year ago`;
  } else if (year > 1) {
    return `${year} years ago`;
  } else if (month === 1) {
    return `one month ago`;
  } else if (month > 1) {
    return `${month} months ago`;
  } else if (day === 1) {
    return `one day ago`;
  } else if (day > 1) {
    return `${day} days ago`;
  } else if (hour > 1) {
    return `${hour} hours ago`;
  } else {
    return `one hour ago`;
  }
}
