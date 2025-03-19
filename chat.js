// تعريف القروب الافتراضي والمستخدمين في الموقع
let groups = ["قروب 1", "قروب 2", "قروب 3"];
let users = [
    { username: "user1", status: "مرحبا، أنا هنا!" },
    { username: "user2", status: "أنا في العمل!" },
    { username: "user3", status: "أريد التحدث!" }
];

// عرض القروبات المتاحة
function displayGroups() {
    let groupList = document.getElementById("group-list");
    groupList.innerHTML = ""; // مسح القروب الحالي
    groups.forEach(group => {
        let groupItem = document.createElement("li");
        groupItem.textContent = group;
        groupItem.onclick = () => joinGroup(group);
        groupList.appendChild(groupItem);
    });
}

// الانضمام إلى قروب
function joinGroup(group) {
    alert(`تم الانضمام إلى القروب: ${group}`);
}

// إرسال رسالة
function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let message = messageInput.value;
    if (message.trim() !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);

        // مسح الحقل بعد الإرسال
        messageInput.value = "";

        // التمرير لأسفل تلقائيًا لعرض الرسائل الجديدة
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// عرض حالات المستخدمين
function displayUserStatuses() {
    let statusList = document.getElementById("status-list");
    statusList.innerHTML = ""; // مسح القائمة الحالية
    users.forEach(user => {
        let statusItem = document.createElement("li");
        statusItem.textContent = `${user.username}: ${user.status}`;
        statusList.appendChild(statusItem);
    });
}

// تحديث حالة المستخدم
function updateStatus() {
    let newStatus = prompt("اكتب حالتك الجديدة:");
    if (newStatus) {
        let username = localStorage.getItem('username');  // الحصول على اسم المستخدم من localStorage
        users = users.map(user => {
            if (user.username === username) {
                user.status = newStatus;  // تحديث الحالة للمستخدم
            }
            return user;
        });
        displayUserStatuses();  // تحديث عرض الحالات
        alert("تم تحديث حالتك!");
    }
}

// إنشاء قروب جديد
function createNewGroup() {
    let newGroupName = prompt("أدخل اسم القروب الجديد:");
    if (newGroupName) {
        groups.push(newGroupName);  // إضافة القروب الجديد إلى القائمة
        alert(`تم إنشاء القروب الجديد: ${newGroupName}`);
        displayGroups();  // إعادة عرض القروبات
    }
}
