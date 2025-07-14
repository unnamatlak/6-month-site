onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.querySelectorAll('.envelope').forEach(env => {
  env.addEventListener('click', () => {
    env.classList.toggle('is-open');
  });
});
