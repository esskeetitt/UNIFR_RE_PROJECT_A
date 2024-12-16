export class SchedulePage {
    public content = 'Here is your schedule!';
  }

// Mock course data for demonstration
const courses = {
  "1": [
    { course: "SES.1 Droit I", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.2 Droit II", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "2": [
    { course: "SES.3 Comptabilité I", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.4 Comptabilité II", time: "02:00 PM - 04:00 PM", ECTS: 6 }
  ],
  "3": [
    { course: "SES.5 Marketing II", time: "11:00 AM - 01:00 PM", ECTS: 6 },
    { course: "SES.6 Marketing II", time: "02:00 PM - 04:00 PM", ECTS: 6 }
  ],
  "4": [
    { course: "SES.7 Organisation I", time: "09:00 AM - 11:00 AM", ECTS: 4 },
    { course: "SES.8 Organisation II", time: "12:00 PM - 02:00 PM", ECTS: 4 }
  ],
  "5": [
    { course: "SES.9 Operation Management", time: "10:00 AM - 12:00 PM", ECTS: 5 },
    { course: "SES.10 Operation Research", time: "01:00 PM - 03:00 PM", ECTS: 5 }
  ],
  "6": [
    { course: "SES.11 Data Science I", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.12 Data Science II", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "7": [
    { course: "SES.13 Marketing I", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.14 Marketing II", time: "02:00 PM - 04:00 PM", ECTS: 6 }
  ],
  "8": [
    { course: "SES.15 Human Resources", time: "09:00 AM - 11:00 AM", ECTS: 4 },
    { course: "SES.16 Business Strategy", time: "12:00 PM - 02:00 PM", ECTS: 4 }
  ],
  "9": [
    { course: "SES.17 Leadership", time: "10:00 AM - 12:00 PM", ECTS: 5 },
    { course: "SES.18 Strategic Planning", time: "01:00 PM - 03:00 PM", ECTS: 5 }
  ],
  "10": [
    { course: "SES.19 Digital Transformation", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.20 AI in Business", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "11": [
    { course: "SES.21 E-commerce", time: "10:00 AM - 12:00 PM", ECTS: 5 },
    { course: "SES.22 Supply Chain", time: "01:00 PM - 03:00 PM", ECTS: 5 }
  ],
  "12": [
    { course: "SES.23 Financial Management", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.24 Risk Management", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "13": [
    { course: "SES.25 International Business", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.26 Cross Cultural Management", time: "02:00 PM - 04:00 PM", ECTS: 6 }
  ],
  "14": [
    { course: "SES.27 Digital Marketing", time: "09:00 AM - 11:00 AM", ECTS: 5 },
    { course: "SES.28 Marketing Analytics", time: "12:00 PM - 02:00 PM", ECTS: 5 }
  ],
  "15": [
    { course: "SES.29 Business Intelligence", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.30 Entrepreneurship", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "16": [
    { course: "SES.31 Consumer Behavior", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.32 Market Research", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "17": [
    { course: "SES.33 Organizational Behavior", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.34 Leadership in Business", time: "02:00 PM - 04:00 PM", ECTS: 6 }
  ],
  "18": [
    { course: "SES.35 Global Marketing", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.36 Business Communication", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "19": [
    { course: "SES.37 Innovation Management", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.38 Project Management", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "20": [
    { course: "SES.39 Corporate Finance", time: "09:00 AM - 11:00 AM", ECTS: 5 },
    { course: "SES.40 Business Ethics", time: "12:00 PM - 02:00 PM", ECTS: 5 }
  ],
  "21": [
    { course: "SES.41 Investment Analysis", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.42 Financial Markets", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "22": [
    { course: "SES.43 Supply Chain Management", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.44 Business Law", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "23": [
    { course: "SES.45 Corporate Strategy", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.46 Marketing Research", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "24": [
    { course: "SES.47 Leadership Development", time: "09:00 AM - 11:00 AM", ECTS: 5 },
    { course: "SES.48 Social Media Marketing", time: "12:00 PM - 02:00 PM", ECTS: 5 }
  ],
  "25": [
    { course: "SES.49 Risk Analysis", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.50 Organizational Development", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "26": [
    { course: "SES.51 Public Speaking", time: "09:00 AM - 11:00 AM", ECTS: 4 },
    { course: "SES.52 Human Resource Management", time: "12:00 PM - 02:00 PM", ECTS: 4 }
  ],
  "27": [
    { course: "SES.53 Team Management", time: "10:00 AM - 12:00 PM", ECTS: 5 },
    { course: "SES.54 Business Leadership", time: "01:00 PM - 03:00 PM", ECTS: 5 }
  ],
  "28": [
    { course: "SES.55 Business Negotiation", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.56 International Business", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ],
  "29": [
    { course: "SES.57 Strategic Management", time: "10:00 AM - 12:00 PM", ECTS: 6 },
    { course: "SES.58 Business Planning", time: "01:00 PM - 03:00 PM", ECTS: 6 }
  ],
  "30": [
    { course: "SES.59 Financial Risk Management", time: "09:00 AM - 11:00 AM", ECTS: 6 },
    { course: "SES.60 Business Operations", time: "12:00 PM - 02:00 PM", ECTS: 6 }
  ]
};

  
document.addEventListener("DOMContentLoaded", function () {
  const calendarNumbers = document.querySelectorAll('.calendar__number');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const calendarHeader = document.querySelector('.calendar__picture h2'); // To update the current date

  // Initialize the current date
  let currentDay = "18"; // Default current day
  let currentMonth = "November"; // Default month
  
  // Function to update the calendar header with the current day and month
  function updateCalendarHeader(day, month) {
    calendarHeader.innerHTML = `${day}, ${month}`;
  }

  // Set the initial calendar header
  updateCalendarHeader(currentDay, currentMonth);

  // Add click event to each calendar number
  calendarNumbers.forEach(number => {
    number.addEventListener('click', function () {
      const day = this.dataset.day;

      if (courses[day]) {
        currentDay = day;
        updateCalendarHeader(day, currentMonth); // Update header with clicked day and month

        // Update sidebar with course details
        const sidebarContent = sidebar.querySelector('.sidebar__content');
        const courseList = courses[day]
          .map(course => `<li><strong>${course.course}</strong>: ${course.time} (ECTS: ${course.ECTS})</li>`)
          .join('');
        
        sidebarContent.innerHTML = `
          <h4>Courses for Day ${day}</h4>
          <ul>
            ${courseList}
          </ul>
        `;
        sidebar.classList.add('open'); // Show the sidebar
      }
    });
  });

  // Close the sidebar when clicking the close button
  closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('open'); // Hide the sidebar
  });
});