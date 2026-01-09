document.addEventListener('DOMContentLoaded', () => {
  const plans = document.querySelectorAll('.plan')
  const buttons = document.querySelectorAll('.btn-plan')

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      plans.forEach(plan => plan.classList.remove('selected'));
      buttons.forEach(button => button.textContent = 'Assinar');

      // adiciona no clicado
      plans[index].classList.add('selected');
      btn.textContent = 'Selecionado';
    })
  })
})
