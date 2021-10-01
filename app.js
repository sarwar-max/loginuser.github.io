const followed = document.getElementById('followed');

followed.addEventListener('click', (e) => {
  if (!e) {
    document.getElementById('followed').innerHTML = 'Follow';
  } else {
    document.getElementById('followed').innerHTML = 'Followed';
  }
});
