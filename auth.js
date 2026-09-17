function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username rỗng
    if (!username) {
        return false;
    }

    // Mật khẩu chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    if (username === "admin" && password === "123") {
        return true;
    }

    // Mật khẩu sai hoặc tài khoản không tồn tại
    return false;
}

module.exports = { login };
