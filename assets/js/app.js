
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
if(toggle && mobile){ toggle.addEventListener('click',()=>{ mobile.classList.toggle('open'); }); }
const tourStops = [
  {kicker:'Start Tour', name:'Welcome to SOTE', image:'assets/tour/start-tour.svg', desc:'Students do not just study technology. They operate it.', sees:'A branded command portal that makes the ecosystem feel real.', focus:'Access. Learn. Build. Defend. Lead.'},
  {kicker:'Stop 1', name:'CEIT 325 Classroom', image:'assets/tour/ceit-325-classroom.svg', desc:'The teaching floor and visitor launch point.', sees:'Classroom workstations connected to real lab infrastructure paths.', focus:'Learn the environment and begin First Signal.'},
  {kicker:'Stop 2', name:'Mission Control', image:'assets/tour/mission-control.svg', desc:'The operations center for visibility, tickets, console access, and briefings.', sees:'Status boards, command wall concepts, switch access, and mission work.', focus:'Observe. Connect. Diagnose. Resolve.'},
  {kicker:'Stop 3', name:"Rocket's Forge", image:'assets/tour/rockets-forge.svg', desc:'The teaching datacenter where services are built and hosted.', sees:'Servers, storage, VM templates, Proxmox, and core services.', focus:'Build. Provision. Host. Orchestrate.'},
  {kicker:'Stop 4', name:'Western Pennsylvania Cyber Defense Command', image:'assets/tour/cyber-defense-command.svg', desc:'The isolated cyber range and defense training environment.', sees:'Cyber range compute, scenarios, recovery work, and defense missions.', focus:'Detect. Defend. Investigate. Recover.'},
  {kicker:'Stop 5', name:'Patch Bay Alpha', image:'assets/tour/patch-bay-alpha.svg', desc:'The security edge staging bay and patching zone.', sees:'Firewalls, router staging, patch panels, and cable paths.', focus:'Connect. Patch. Verify. Launch.'},
  {kicker:'Stop 6', name:"Rocket's Engineering Bay", image:'assets/tour/rockets-engineering-bay.svg', desc:'The R&D, staging, parts, and repair area.', sees:'Hardware staging, Rocket’s Parts Locker, testing, and build prep.', focus:'Prototype. Document. Test. Improve.'},
  {kicker:'Mission Complete', name:'Technology Cadet Launch Point', image:'assets/tour/mission-complete.svg', desc:'The visitor can now explain the SOTE model and start the badge path.', sees:'A clear first step into the Student Technology Corps.', focus:'Claim Technology Cadet and keep going.'}
];
function setTour(i){
  const s = tourStops[i]; if(!s) return;
  const ids = {tourKicker:s.kicker,tourName:s.name,tourDescription:s.desc,tourStudentSees:s.sees,tourMissionFocus:s.focus};
  Object.entries(ids).forEach(([id,val])=>{ const el=document.getElementById(id); if(el) el.textContent=val; });
  const img=document.getElementById('tourImage'); if(img){img.src=s.image; img.alt=s.name;}
  document.querySelectorAll('.tour-button').forEach((b,idx)=>b.classList.toggle('active',idx===i));
}
document.querySelectorAll('.tour-button').forEach((b,i)=>b.addEventListener('click',()=>setTour(i)));
