export const siteData = {
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@company.com",
      "department": "Engineering",
      "startDate": "2024-01-15",
      "avatar": "/avatars/john-doe.jpg"
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Complete Employee Profile",
      "description": "Fill out personal and professional information",
      "status": "completed",
      "dueDate": "2024-01-15",
      "category": "profile",
      "assignedTo": 1,
      "completedAt": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "title": "IT Equipment Setup",
      "description": "Configure laptop and access credentials",
      "status": "in-progress",
      "dueDate": "2024-01-16",
      "category": "technical",
      "assignedTo": 1,
      "startedAt": "2024-01-16T09:00:00Z"
    }
  ],
  "resources": [
    {
      "id": 1,
      "title": "Employee Handbook",
      "description": "Company policies and procedures",
      "type": "pdf",
      "url": "/docs/handbook.pdf",
      "category": "documentation",
      "size": "2.5 MB",
      "lastUpdated": "2024-01-01"
    },
    {
      "id": 2,
      "title": "IT Support Guide",
      "description": "Technical setup and troubleshooting",
      "type": "pdf",
      "url": "/docs/it-guide.pdf",
      "category": "technical",
      "size": "1.8 MB",
      "lastUpdated": "2024-01-05"
    }
  ],
  "settings": {
    "appName": "Onboarding Portal",
    "description": "A comprehensive employee onboarding platform to streamline the new hire experience",
    "version": "1.0.0",
    "companyName": "Acme Corporation",
    "onboardingDuration": 30,
    "autoReminders": true,
    "supportEmail": "onboarding@company.com",
    "theme": "light",
    "language": "en"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home",
      "active": true
    },
    {
      "label": "Profile Setup",
      "route": "/profile",
      "icon": "user",
      "active": false
    },
    {
      "label": "Tasks",
      "route": "/tasks",
      "icon": "checklist",
      "active": false
    },
    {
      "label": "Resources",
      "route": "/resources",
      "icon": "folder",
      "active": false
    },
    {
      "label": "Help & Support",
      "route": "/help",
      "icon": "help",
      "active": false
    }
  ],
  "footer": [
    {
      "label": "Privacy Policy",
      "route": "/privacy",
      "external": false
    },
    {
      "label": "Terms of Service",
      "route": "/terms",
      "external": false
    },
    {
      "label": "Contact HR",
      "route": "mailto:hr@company.com",
      "external": true
    }
  ]
};