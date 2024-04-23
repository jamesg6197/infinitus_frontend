# Infinitus Take Home Frontend

This is the frontend repository for a web application that allows users to chat with PDFs they uploaded. It is built with Typescript and communicates with the Django backend located here:

https://github.com/jamesg6197/Infinitus_Backend/tree/main

Alongside the primary features of using an LLM to chat with the Startup Playbook pdf, the application supports user authentication, and the bonus feature of allowing users to upload their files. 

## Getting Started

Start first by setting up the backend:

Instructions are listed in the backend README.md


### Clone the repository

```
git clone https://github.com/jamesg6197/Infinitus_Backend.git
```

### Start the frontend and navigate to localhost:8000

```
npm start
```

### Using the application.

1.  Register with an email and password
2.  Navigate to the PDF Chat through the Navbar
3.  I added a new feature which allows users to upload their own PDFs and ask questions related to those pdfs. To use this, simply click into the sidebar in the PDF Chat page to upload PDFs from the local machine.
4.  If no new pdfs are added, PDFChat just answers questions based on the Startup Playbook.pdf file.








