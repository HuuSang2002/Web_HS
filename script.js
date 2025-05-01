// Khởi tạo Typed.js để tạo hiệu ứng gõ chữ tự động
new Typed("#typed", {
  strings: ['Developer', 'Photographer', 'Designer', 'Editor', 'Technician'], // Danh sách các từ sẽ hiển thị luân phiên
  typeSpeed: 75,         // Tốc độ gõ
  backSpeed: 40,         // Tốc độ xóa
  loop: true,            // Lặp vô hạn
  showCursor: true,      // Hiển thị con trỏ nháy
  cursorChar: '|'        // Ký tự con trỏ
});

// Hiệu ứng thanh điều hướng khi cuộn trang
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled'); // Thêm class khi cuộn xuống quá 50px
  } else {
      navbar.classList.remove('scrolled'); // Gỡ class khi cuộn lên đầu trang
  }
});

// Xử lý chức năng chuyển đổi chế độ sáng/tối
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Kiểm tra theme đã lưu trong localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme); // Thêm class tương ứng với theme
  if (currentTheme === 'light-mode') {
      darkModeToggle.checked = true; // Nếu đang ở light mode thì bật công tắc toggle
  }
}

// Xử lý khi người dùng bật/tắt toggle dark mode
darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
      body.classList.replace('dark-mode', 'light-mode'); // Chuyển sang light mode
      localStorage.setItem('theme', 'light-mode');       // Lưu light mode
  } else {
      body.classList.replace('light-mode', 'dark-mode'); // Chuyển sang dark mode
      localStorage.setItem('theme', 'dark-mode');        // Lưu dark mode
  }
});

// Nếu chưa có theme thì đặt mặc định là dark mode
if (!currentTheme) {
  body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark-mode');
}

// Khởi tạo Typed.js lần nữa (dư thừa, nên xóa)
new Typed("#typed", {
  strings: ['Developer', 'Photographer', 'Designer', 'Editor', 'Technician'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// Hiệu ứng navbar khi cuộn (đã có phía trên, đoạn này cũng dư thừa)
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Hiệu ứng kỹ năng khi xuất hiện trong màn hình
const animateSkills = () => {
  const skillCategories = document.querySelectorAll('.skill-category'); // Nhóm kỹ năng
  const skillItems = document.querySelectorAll('.skill-item');         // Từng kỹ năng cụ thể

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__fadeInUp'); // Thêm class hiệu ứng khi phần tử xuất hiện

              // Nếu là skill-item thì tăng thanh phần trăm kỹ năng
              if (entry.target.classList.contains('skill-item')) {
                  const percent = entry.target.getAttribute('data-percent'); // Lấy phần trăm từ thuộc tính
                  const progressBar = entry.target.querySelector('.progress-bar'); // Thanh tiến độ
                  progressBar.style.width = `${percent}%`; // Cập nhật chiều rộng của thanh tiến độ
              }
          }
      });
  }, {
      threshold: 0.1 // Kích hoạt khi 10% phần tử xuất hiện
  });

  // Gán observer cho các phần tử kỹ năng
  skillCategories.forEach(category => observer.observe(category));
  skillItems.forEach(item => observer.observe(item));
};

// Gọi hàm animateSkills khi trang tải xong
document.addEventListener('DOMContentLoaded', animateSkills);

// Cuộn mượt đến phần được chọn khi nhấp vào các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Ngăn hành vi mặc định

      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Bỏ qua nếu href="#"

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80, // Cuộn đến phần tử cách đỉnh 80px
              behavior: 'smooth'                 // Hiệu ứng cuộn mượt
          });

          // Cập nhật liên kết đang active
          document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
          });
          this.classList.add('active');
      }
  });
});

// Cập nhật liên kết navbar "active" dựa vào vị trí cuộn
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 100; // Lấy vị trí cuộn hiện tại

  document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      // Nếu vị trí cuộn nằm trong đoạn của section hiện tại
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('active'); // Đánh dấu liên kết đang active
              }
          });
      }
  });
});


// Back to top button with smooth scroll
document.getElementById("backToTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add scroll animation for footer elements
document.addEventListener('DOMContentLoaded', function() {
  const footerElements = document.querySelectorAll('.modern-footer .footer-brand, .modern-footer .footer-columns > div');
  
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  footerElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    footerObserver.observe(el);
  });
});
