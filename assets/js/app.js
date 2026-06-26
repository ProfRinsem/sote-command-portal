
const SOTE_VERSION = "v0.9";
const ASSET_VERSION = "0.9";
const tourStops = [{"kicker": "Start Tour", "name": "Welcome to SOTE", "slug": "index", "visual": "assets/tour/start-tour.svg", "desc": "Students do not just study technology. They operate it.", "sees": "A branded command portal that makes the ecosystem feel real.", "focus": "Access. Learn. Build. Defend. Lead."}, {"kicker": "Stop 1", "name": "CEIT 325 Classroom", "slug": "ceit-325-classroom", "visual": "assets/tour/ceit-325-classroom.svg", "desc": "The classroom is the student launch point for operating the ecosystem.", "sees": "Workstations, instruction, and access terminals.", "focus": "Begin with First Signal and Technology Cadet readiness."}, {"kicker": "Stop 2", "name": "Mission Control", "slug": "mission-control", "visual": "assets/tour/mission-control.svg", "desc": "The operator floor for network status, troubleshooting, console access, and briefings.", "sees": "Switching, console workflows, status boards, and command-center language.", "focus": "Observe, connect, diagnose, and resolve."}, {"kicker": "Stop 3", "name": "Rocket's Forge", "slug": "rockets-forge", "visual": "assets/tour/rockets-forge.svg", "desc": "The teaching datacenter where students build, provision, host, and orchestrate.", "sees": "Servers, Proxmox, storage, templates, and infrastructure services.", "focus": "Rocket Approved builds and repeatable documentation."}, {"kicker": "Stop 4", "name": "Western Pennsylvania Cyber Defense Command", "slug": "western-pennsylvania-cyber-defense-command", "visual": "assets/tour/cyber-defense-command.svg", "desc": "The cyber range where students practice defense, investigation, and recovery.", "sees": "Cyber range systems, scenarios, and Sir Kingston watchlist identity.", "focus": "Detect, defend, investigate, and recover."}, {"kicker": "Stop 5", "name": "Patch Bay Alpha", "slug": "patch-bay-alpha", "visual": "assets/tour/patch-bay-alpha.svg", "desc": "The physical-layer and security-edge staging bay.", "sees": "Orange wall, blue cabling, patch rack, cable tray, and security-edge staging.", "focus": "CONNECT. PATCH. VERIFY."}, {"kicker": "Stop 6", "name": "Rocket's Engineering Bay", "slug": "rockets-engineering-bay", "visual": "assets/tour/rockets-engineering-bay.svg", "desc": "The R&D and hardware staging space for server prep, parts validation, and experiments.", "sees": "Staged hardware, rails, parts, and engineering workbench workflows.", "focus": "Inspect, stage, test, and document."}, {"kicker": "Final", "name": "Mission Complete", "slug": "badges", "visual": "assets/tour/mission-complete.svg", "desc": "Visitors can complete First Signal and claim the Technology Cadet badge.", "sees": "A pathway from visitor to Student Technology Corps member.", "focus": "Turn curiosity into participation."}];
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
let activeTourIndex = 0;
function updateTour(index) {
  if (!tourStops.length) return;
  activeTourIndex = (index + tourStops.length) % tourStops.length;
  const stop = tourStops[activeTourIndex];
  const img = document.getElementById('tourVisualImg');
  const kicker = document.getElementById('tourKicker');
  const name = document.getElementById('tourName');
  const desc = document.getElementById('tourDescription');
  const sees = document.getElementById('tourStudentSees');
  const focus = document.getElementById('tourMissionFocus');
  if (img) { img.src = stop.visual + '?v=' + ASSET_VERSION; img.alt = stop.name + ' approved media card'; }
  if (kicker) kicker.textContent = stop.kicker;
  if (name) name.textContent = stop.name;
  if (desc) desc.textContent = stop.desc;
  if (sees) sees.textContent = stop.sees;
  if (focus) focus.textContent = stop.focus;
  document.querySelectorAll('.tour-stop').forEach((button, i) => button.classList.toggle('active', i === activeTourIndex));
}
document.querySelectorAll('.tour-stop').forEach((button) => {
  button.addEventListener('click', () => updateTour(Number(button.dataset.tourIndex || 0)));
});
const nextTour = document.getElementById('nextTour');
const prevTour = document.getElementById('prevTour');
if (nextTour) nextTour.addEventListener('click', () => updateTour(activeTourIndex + 1));
if (prevTour) prevTour.addEventListener('click', () => updateTour(activeTourIndex - 1));
const pills = document.querySelectorAll('.filter-pill');
const projectCards = document.querySelectorAll('.project-card');
pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    const filter = pill.dataset.filter;
    projectCards.forEach((card) => {
      card.style.display = (filter === 'all' || card.dataset.status === filter) ? '' : 'none';
    });
  });
});
updateTour(0);
