
const currentTimeUTC = new Date().toUTCString();
document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = new Date().getDay();
document.querySelector('[data-testid="currentDay"]').textContent = daysOfWeek[currentDay];

const sideNav = document.getElementById('sidenav')

function toggleActive(link) {
  const links = document.querySelectorAll('.links a');
  links.forEach((item) => {
      item.classList.remove('active');
  });
  link.classList.add('active');
  handleNavClose()
}

function handleNavClose(){
    sideNav.style.display = 'none'
}
function handleNavOpen(){
    sideNav.style.display = "flex"
}
