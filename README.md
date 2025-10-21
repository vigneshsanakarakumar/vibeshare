# File Share TypeScript Web Application

This project is a web application built with TypeScript that allows users to upload multiple files and share them via QR codes or links. It features a simple "Hello World" component to demonstrate the basic functionality.

## Features

- Upload multiple files
- Share files via QR codes
- Share files via links
- Simple and intuitive user interface

## Project Structure

```
file-share-ts-web
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── App.tsx           # Main App component with routing
│   ├── pages
│   │   └── Home.tsx      # Home page component
│   ├── components
│   │   ├── HelloWorld.tsx # Component displaying "Hello World"
│   │   ├── FileUploader.tsx # Component for file uploads
│   │   ├── ShareList.tsx  # Component for displaying shared files
│   │   └── QRCodeModal.tsx # Modal for displaying QR codes
│   ├── services
│   │   ├── fileService.ts  # Service for file handling
│   │   └── qrService.ts    # Service for QR code generation
│   ├── hooks
│   │   └── useFiles.ts      # Custom hook for file management
│   ├── utils
│   │   └── helpers.ts       # Utility functions
│   └── types
│       └── index.ts         # TypeScript types and interfaces
├── public
│   └── index.html           # Main HTML template
├── package.json              # NPM configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd file-share-ts-web
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the FileUploader component to select and upload multiple files.
- Once files are uploaded, you can share them using the generated QR codes or links provided in the ShareList component.

## License

This project is licensed under the MIT License.