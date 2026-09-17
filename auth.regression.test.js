const { login } = require("./auth");

test("Login thất bại khi mật khẩu sai", () => {
    expect(login("admin", "wrongpassword")).toBe(false);
});

test("Login thất bại khi username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Login thất bại khi mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "123@")).toBe(false);
});

test("Login thất bại khi tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});

test("Login thất bại khi username không tồn tại", () => {
    expect(login("user123", "123")).toBe(false);
});
