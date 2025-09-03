function logEvent(phase, elementId, e) {
  console.log(`${phase} - ${elementId}`);
  e.stopPropagation(); // Prevents further propagation of the event in the bubbling phase
}

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// CAPTURING phase
outer.addEventListener('click', () => logEvent('Capturing', 'Outer'), true);
middle.addEventListener(
  'click',
  (e) => logEvent('Capturing', 'Middle', e),
  true
);
inner.addEventListener('click', (e) => logEvent('Capturing', 'Inner', e), true);

// BUBBLING phase
// outer.addEventListener('click', (e) => logEvent('Bubbling', 'Outer', e));
// middle.addEventListener('click', (e) => logEvent('Bubbling', 'Middle', e));
// inner.addEventListener('click', (e) => logEvent('Bubbling', 'Inner', e));
