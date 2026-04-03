# ✝️ TMS App — Bible Memory Scripture App

> A mobile application for browsing and memorizing Bible scripture by category — built with React Native and Expo.


## 📌 Overview

TMS App (Text Memory System) is a mobile scripture memorization app built with React Native and Expo. Users can browse Bible verses organized by category, making it easy to find and memorize relevant scripture for any topic or occasion.

The app is configured with Expo Application Services (EAS) for streamlined builds and deployment to both Android and iOS.

---

## ✨ Features

- 📖 **Scripture Browser** — Browse verses organized by categories (e.g., faith, hope, love, courage)
- 🗂️ **Category Navigation** — Clean, intuitive category-based navigation using React Navigation
- 📱 **Cross-Platform** — Runs on both Android and iOS from a single codebase
- ⚡ **Offline Ready** — Scripture data bundled locally — no internet required to browse
- 🎨 **Clean UI** — Simple, distraction-free interface optimized for reading and memorization

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native |
| Platform | Expo (SDK) |
| Navigation | React Navigation (Stack Navigator) |
| Build System | EAS Build |
| Language | JavaScript (ES6+) |
| Data | Local JSON / Firebase |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on your phone (for quick testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/dennis-dentrix/tmsApp.git
cd tmsApp

# Install dependencies
npm install
```

### Run the App

```bash
# Start Expo development server
npx expo start
```

Then scan the QR code with the **Expo Go** app on your phone, or press:
- `a` — Open in Android emulator
- `i` — Open in iOS simulator

---

## 📁 Project Structure

```
tmsApp/
├── App.js              # Root component with navigation setup
├── StartScreen.js      # Welcome / home screen
├── Categories.js       # Category listing screen
├── VersesScreen.js     # Verse display screen for a selected category
├── assets/             # App icons and splash screen images
├── app.json            # Expo app configuration
└── eas.json            # EAS Build configuration
```

---

## 📦 Building for Production

This project uses **EAS Build** for production builds:

```bash
# Install EAS CLI
npm install -g eas-cli

# Log in to Expo
eas login

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

---

## 🗺️ Screens

| Screen | Description |
|---|---|
| Start Screen | Welcome screen with app branding and entry point |
| Categories | Grid/list of scripture categories |
| Verses | List of Bible verses for the selected category |

---

## 📄 License

MIT © [Denis Kyusya](https://github.com/dennis-dentrix)
