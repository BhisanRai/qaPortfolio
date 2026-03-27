// DARK MODE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// COUNTERS
document.querySelectorAll(".counter").forEach(counter => {
  let update = () => {
    let target = +counter.dataset.target;
    let count = +counter.innerText;
    let inc = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// FILTER
document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.onclick = () => {
    let filter = btn.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? "block"
          : "none";
    });
  };
});

// MODAL
const modal = document.getElementById("modal");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.onclick = () => modal.style.display = "block";
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  };
});