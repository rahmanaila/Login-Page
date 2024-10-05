document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi sederhana username dan password
    if (username === 'admin' && password === '123456') {
        alert('Login berhasil!');
        // Refresh halaman setelah menekan "OK"
        window.location.reload();
    } else {
        // Tampilkan pesan error jika login gagal
        alert('Login Gagal');
    }
});
