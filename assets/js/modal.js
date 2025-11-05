// ======= Ventanas modales =======
const modalLogin = document.getElementById('modal-login');
const modalSignUp = document.getElementById('modal-sign-up');

// ======= Abrir modales =======
// Selecciona todos los botones que tengan el atributo data-modal="login" o "signup"
const openModalButtons = document.querySelectorAll('[data-modal]');

// ======= Cerrar modales =======
const closeButtons = document.querySelectorAll('.btn-close');

// ======= Abrir =======
openModalButtons.forEach(button => {
  button.onclick = () => {
    const modalType = button.getAttribute('data-modal');
    if (modalType === 'login') {
      modalLogin.classList.add('show-modal');
    } else if (modalType === 'signup') {
      modalSignUp.classList.add('show-modal');
    }
  };
});

// ======= Cerrar =======
closeButtons.forEach(button => {
  button.onclick = () => {
    // Cierra cualquier modal visible
    document.querySelectorAll('.modal-container.show-modal').forEach(modal => {
      modal.classList.remove('show-modal');
    });
  };
});