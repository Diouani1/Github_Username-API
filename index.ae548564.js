const e=document.querySelector("input"),t=document.querySelector("button"),n=JSON.parse(localStorage.getItem("reps"));function o(e){const t=new Date(e),n=new Date,o=n.getFullYear()-t.getFullYear(),a=n.getMonth()-t.getMonth(),r=n.getDate()-t.getDate(),c=n.getHours()-t.getHours();return 1===o?"one year ago":o>1?`${o} years ago`:1===a?"one month ago":a>1?`${a} months ago`:1===r?"one day ago":r>1?`${r} days ago`:c>1?`${c} hours ago`:"one hour ago"}t.addEventListener("click",(async function(t){let n=[];const a=`https://api.github.com/users/${e.value}/repos`,r=await fetch(a),c=await r.json();t.preventDefault(),c.forEach((e=>{let t=[e.name,e.html_url,o(e.created_at)];n.push(t)})),localStorage.setItem("reps",JSON.stringify(n)),location.reload()})),n&&function(){const e=document.querySelectorAll(".thead"),t=document.querySelector("tbody");e[0].innerText="",e[1].innerText="Rep Name",e[2].innerText="Rep URL",e[3].innerText="Rep created",n.forEach(((e,n)=>{const o=document.createElement("tr"),a=document.createElement("th");a.innerText=n+1,o.append(a),t.append(o),e.forEach(((e,t)=>{if(1===t){const t=document.createElement("td"),n=document.createElement("a");n.innerText=e,n.href=e,t.append(n),o.append(t)}else{const t=document.createElement("td");t.innerText=e,o.append(t)}}))}))}();
//# sourceMappingURL=index.ae548564.js.map
