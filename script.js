// Show the next step in the journey
function nextStep(step) {
    const steps = document.querySelectorAll('.journey-step');
    steps.forEach((stepDiv) => stepDiv.classList.add('hidden'));
    document.getElementById(`step${step}`).classList.remove('hidden');
  }
  
  // Light the diya in the sanctum
  function lightDiya() {
    const diya = document.getElementById('diya');
    diya.classList.toggle('lit');
  }
  
 