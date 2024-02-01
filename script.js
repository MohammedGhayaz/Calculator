let calculation = localStorage.getItem('calculation') || '';
        displayResult();
        
      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
        displayResult();
          }
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }
      function displayResult(){
         document.querySelector('.para').innerHTML = calculation;
      }