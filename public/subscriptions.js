const addPlanBtn = document.querySelector("#addPlanBtn");
const downloadCsvBtn = document.querySelector("#downloadCsvBtn");
const planDialog = document.querySelector("#planDialog");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

addPlanBtn?.addEventListener("click", () => {
  if (typeof planDialog?.showModal === "function") {
    planDialog.showModal();
    return;
  }
  showToast("Mở form thêm gói mới");
});

planDialog?.addEventListener("close", () => {
  if (planDialog.returnValue !== "cancel") {
    showToast("Đã lưu bản nháp gói đăng ký");
  }
});

document.querySelectorAll(".icon-action").forEach((button) => {
  button.addEventListener("click", () => showToast("Đã mở thao tác chỉnh sửa gói"));
});

downloadCsvBtn?.addEventListener("click", () => {
  const csv = [
    "Khach hang,Goi,Thoi gian,So tien,Cong thanh toan",
    "Nguyen Minh Quan,Goi 3 Thang,14:20,499000,MOMO",
    "Le Thi Mai Anh,Goi 1 Thang,12:45,199000,VNPAY",
    "Tran Hoang Nam,Goi 6 Thang,10:15,899000,The tin dung",
    "Pham Thao Vy,Goi 1 Thang,09:30,199000,MOMO",
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "bao-cao-giao-dich.csv";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Đã tải báo cáo giao dịch");
});
