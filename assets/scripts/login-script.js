/**
 * @fileoverview Logika autentikasi sederhana untuk menangani form login.
 * Memvalidasi kredensial pengguna terhadap nilai yang telah ditentukan.
 */

/**

 * Elemen form login dari DOM.
 * @type {HTMLFormElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/**
 * Elemen input email dari DOM.
 * @type {HTMLInputElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/**
 * Elemen input password dari DOM.
 * @type {HTMLInputElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/**
 * Alamat email yang valid untuk proses login.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/**
 * Kata sandi yang valid untuk proses login.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

/**
 * Menangani event submission pada form login.
 * Mengambil nilai input, memvalidasi dengan data yang diharapkan,
 * dan mengarahkan pengguna ke halaman yang sesuai.
 * * @param {SubmitEvent} event - Objek event yang dikirimkan saat form disubmit.
 * @returns {void}
 */
loginFormElement.addEventListener('submit', function(event) {
  // Mencegah reload halaman secara default saat submit form
  event.preventDefault();

  /** @type {string} Nilai email yang diinput oleh pengguna */
  const email = inputEmailElement.value;
  
  /** @type {string} Nilai password yang diinput oleh pengguna */
  const password = inputPasswordElement.value;

  /**
   * Logika Percabangan Autentikasi:
   * Jika email DAN password cocok dengan data yang diharapkan, masuk ke Home.
   * Jika salah satu atau keduanya salah, tampilkan Pop Up Error.
   */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
