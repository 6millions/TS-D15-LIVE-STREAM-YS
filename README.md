# **Live Stream App**
This is a **Next.js** project that allows users to **log in with Google and live stream using their camera**. It uses **Firebase Authentication** for login and **Agora RTC** for real-time video streaming.

## Features
✅ **Google Authentication** using Firebase  
✅ **Live Video Streaming** using Agora RTC  
✅ **Fully Responsive** UI  
✅ **Hosted on Firebase**  

---

## Libraries Used
This project is built with the following technologies:

| Library | Purpose |
|---------|---------|
| **Next.js** | Frontend Framework |
| **Firebase** | Authentication & Hosting |
| **Agora RTC SDK** | Real-time video streaming |
| **Tailwind CSS** | UI Styling |
| **React Firebase Hooks** | Firebase authentication state management |

---

## Setup & Installation
### Clone the Repository
```bash
git clone https://github.com/your-username/live-stream-ys.git
cd live-stream-ys
```

### Install Dependencies
```bash
yarn install  # or npm install
```

### Setup Environment Variables
Create a `.env.local` file in the root directory and add:

```ini
# Agora Configuration
NEXT_PUBLIC_AGORA_APP_ID=your-agora-app-id
NEXT_PUBLIC_AGORA_CHANNEL_NAME=your-channel-name
NEXT_PUBLIC_AGORA_TEMP_TOKEN=your-temp-token

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

**Note**: Never share your `.env.local` file publicly! 

---

## **▶️ Run the Project**
### **For Development**
```bash
yarn dev  # or npm run dev
```
- Open **http://localhost:3000/** to see the app.

### **For Production**
```bash
yarn build
yarn start
```

---

## Deployment
This project is hosted on **Firebase Hosting**.

### **Deploy to Firebase
```bash
yarn build
firebase deploy
```

Once deployed, you can access your live app at:
```bash
https://your-project-name.web.app
```

---

## License
This project is open-source and available under the **MIT License**.

---

## Contact
If you have any questions, feel free to contact me on GitHub! \uD83D\uDE0A

