// عند تحميل الصفحة، يتم تشغيل شاشة الترحيب لمدة 5 ثوانٍ ثم الانتقال إلى شاشة تسجيل الدخول
window.onload = function() {
    setTimeout(() => {
        document.getElementById("welcome-screen").classList.add("hidden");
        document.getElementById("auth-screen").classList.remove("hidden");
    }, 5000); // بعد 5 ثوانٍ
};

// عرض شاشة تسجيل الدخول
function showLogin() {
    window.location.href = "login.html"; // توجيه المستخدم إلى صفحة تسجيل الدخول
}

// عرض شاشة تسجيل الاشتراك
function showSignup() {
    window.location.href = "signup.html"; // توجيه المستخدم إلى صفحة التسجيل
}

// عند تسجيل الدخول بنجاح، يتم عرض شاشة الدردشة
function loginSuccess() {
    document.getElementById("auth-screen").classList.add("hidden");
    document.getElementById("chat-screen").classList.remove("hidden");
}

// وظيفة إنشاء قروب جديد
function createGroup() {
    alert("تم إنشاء قروب جديد بنجاح!");
}

// وظيفة الانضمام إلى القروبات المتاحة
function joinGroups() {
    alert("تم البحث عن القروبات المتاحة، اختر القروب المناسب لك.");
}

// وظيفة البحث عن الأشخاص القريبين من موقع المستخدم
function findNearbyUsers() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            alert(`تم العثور على موقعك! خط العرض: ${position.coords.latitude}، خط الطول: ${position.coords.longitude}`);
        }, error => {
            alert("لم يتمكن الموقع من الوصول إلى موقعك، يرجى تفعيل GPS.");
        });
    } else {
        alert("المتصفح لا يدعم خاصية تحديد الموقع.");
    }
}

// وظيفة الدردشة العشوائية مع الأعضاء
function randomChat() {
    alert("يتم الآن البحث عن عضو عشوائي للدردشة...");
}

// وظيفة إنشاء حالة جديدة
function postStatus() {
    let status = prompt("اكتب حالتك الجديدة:");
    if (status) {
        alert(`تم نشر حالتك: ${status}`);
    }
}
