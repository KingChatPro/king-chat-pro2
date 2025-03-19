// التحقق من وجود بيانات تسجيل الدخول المحفوظة في localStorage
window.onload = function() {
    let loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        // إذا كانت البيانات موجودة، نقوم بتسجيل الدخول تلقائيًا
        alert(`مرحبًا back, ${loggedInUser}`);
        loginSuccess();  // انتقال مباشرة إلى واجهة الدردشة
    }
};

// وظيفة لتسجيل الدخول
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // تحقق من البيانات المدخلة
    if (username && password) {
        // هنا نقوم بتخزين البيانات في localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // تسجيل الدخول بنجاح
        alert("تم تسجيل الدخول بنجاح!");
        loginSuccess();
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
}

// وظيفة لإنشاء حساب جديد
function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // تحقق من البيانات المدخلة
    if (username && password) {
        // هنا نقوم بتخزين البيانات في localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // إنشاء الحساب بنجاح
        alert("تم إنشاء الحساب بنجاح!");
        loginSuccess();
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
}

// وظيفة لتسجيل الخروج
function logout() {
    // إزالة بيانات المستخدم من localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // إعادة توجيه المستخدم إلى شاشة تسجيل الدخول
    alert("تم تسجيل الخروج.");
    window.location.href = "index.html";
}

// وظيفة لإظهار شاشة تسجيل الدخول
function showLogin() {
    window.location.href = "login.html";
}

// وظيفة لإظهار شاشة إنشاء الحساب
function showSignup() {
    window.location.href = "signup.html";
}
