# Histo App

Historical places exploration app built with Expo and React Native.

## 🚀 Running the App

### iOS (Requires macOS)

Since this project uses native code, you need a Mac with Xcode installed to run the iOS build.

```bash
npx expo run:ios
```

- Ensures you have CocoaPods installed (`sudo gem install cocoapods`).

### Android

You can run the Android app on a connected device or emulator.

```bash
npx expo run:android
```

- Requires Android Studio and SDK installed.

---

## 🔗 Testing Deep Links

We support deep linking to specific screens (e.g., details page).

### Method 1: CLI (Recommended)

You can test deep links directly from your terminal using `uri-scheme`:

**Android**:

```bash
npx uri-scheme open test://details/201 --android
```

**iOS**:

```bash
npx uri-scheme open test://details/201 --ios
```

### Method 2: Browser Test File

1.  **Start the App**: Ensure the app is running on your simulator or device.
2.  **Transfer File**: Send the `test_deep_linking.html` file to your mobile device (or open it on your simulator's browser).
3.  **Open & Click**: Open the file in your mobile browser and click the links.
    - **"Open Details (ID: 201)"**: Opens the details screen for place ID 201.
    - **"Open App Home"**: Opens the main feed.

---

## 🏗 Architecture

### Routing: Expo Router

This project uses **Expo Router** (file-based routing) located in the `app/` directory.

- **screens**: Files in `app/` become screens automatically.
- **navigation**: `_layout.tsx` files define navigation stacks (e.g., Native Stack).
- **dynamic routes**: Folders like `details/[id].tsx` handle dynamic parameters.

### Folder Structure

- `app/`: Screens and Navigation headers.
- `src/components/`: Reusable UI components.
- `src/store/`: Redux state management.
- `src/types/`: TypeScript definitions.

---

## ⚡ State Management

We use **Redux Toolkit (RTK)** for global state management.

### Why RTK Query instead of RxJS Epics?

We deliberately chose **RTK Query** over `redux-observable` (RxJS Epics) for the following reasons:

1.  **Simplified Data Fetching**: RTK Query is purpose-built for data fetching and caching. It handles loading states, error handling, and caching out-of-the-box, significantly reducing boilerplate code compared to writing custom Epics for every API call.
2.  **Maintainability & Focus**: While RxJS is powerful for complex event streams, for standard REST API interactions, RTK Query provides a more streamlined and maintainable solution that keeps the codebase focused on business logic rather than stream orchestration.
3.  **Built-in Best Practices**: RTK Query automatically handles deduping requests, optimistic updates, and cache invalidation, which would require manual implementation with Epics.
4.  **Modern Redux Standard**: It is the officially recommended approach by the Redux team for async logic.
