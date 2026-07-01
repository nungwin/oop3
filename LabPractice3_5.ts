export {};

enum Role {
    Admin,
    Editor,
    Viewer
}

interface User {
    username: string;
    email: string;
    role: Role;
}

function checkAccess(user: User): void {
    if (user.role === Role.Admin) {
        console.log(`${user.username} ได้รับสิทธิ์ผู้ดูแลระบบ ทำงานได้ทุกอย่าง`);
    } else if (user.role === Role.Editor) {
        console.log(`${user.username} สามารถแก้ไขเนื้อหาได้`);
    } else {
        console.log(`${user.username} สามารถดูได้อย่างเดียว`);
    }
}

// Test with Admin user
const adminUser: User = {
    username: "Kyu",
    email: "kyu@example.com",
    role: Role.Admin
};

checkAccess(adminUser);
