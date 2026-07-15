    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));

    const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const storeHours = {
      0: { open: 8.5, close: 20.5, label: '8:30 AM – 8:30 PM' },
      1: { open: 8, close: 21, label: '8 AM – 9 PM' },
      2: { open: 8, close: 21, label: '8 AM – 9 PM' },
      3: { open: 8, close: 21, label: '8 AM – 9 PM' },
      4: { open: 8, close: 21, label: '8 AM – 9 PM' },
      5: { open: 8, close: 21, label: '8 AM – 9 PM' },
      6: { open: 8, close: 21, label: '8 AM – 9 PM' }
    };

    function updateOpenStatus() {
      const now = new Date();
      const day = now.getDay();
      const currentTime = now.getHours() + now.getMinutes() / 60;
      const hours = storeHours[day];
      const isOpen = currentTime >= hours.open && currentTime < hours.close;
      const status = document.getElementById('openStatus');
      const todayHours = document.getElementById('todayHours');
      status.innerHTML = `<span class="status-dot ${isOpen ? 'open' : 'closed'}"></span>${isOpen ? 'Open now' : 'Closed now'}`;
      todayHours.textContent = `${dayNames[day]} · ${hours.label}`;
    }
    updateOpenStatus();

    document.querySelectorAll('.hours-table tr').forEach(row => {
      const firstCell = row.querySelector('td');
      if (firstCell && firstCell.textContent.trim() === dayNames[new Date().getDay()]) row.classList.add('today');
    });

    document.querySelectorAll('.hours-tab').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.hours-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.hours-panel').forEach(panel => panel.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(`tab-${button.dataset.tab}`).classList.add('active');
      });
    });

    document.getElementById('contactForm').addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const name = `${form.get('firstName')} ${form.get('lastName')}`.trim();
      const subject = encodeURIComponent(`${form.get('inquiryType')} from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone') || 'Not provided'}\nInquiry: ${form.get('inquiryType')}\n\n${form.get('message')}`);
      window.location.href = `mailto:YOUR-BUSINESS-EMAIL@example.com?subject=${subject}&body=${body}`;
    });
