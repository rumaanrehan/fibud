Fibud Expert Matching Backend
This project is the backend service for Fibud Corp’s expert-client matching system, built using NestJS and Prisma ORM. It provides a REST API to manage expert-client matches based on specialization, availability, and rating.
________________________________________
🚀 Project Setup Instructions
1️⃣ Clone the Repository
bash
CopyEdit
git clone https://github.com/rumaanrehan/fibud-expert-matching.git
cd fibud-expert-matching
2️⃣ Install Dependencies
bash
CopyEdit
npm install
3️⃣ Configure Environment Variables
Create a .env file and add the following (modify as needed):
env
CopyEdit
DATABASE_URL="postgresql://username:password@localhost:5432/fibud"
PORT=3000
4️⃣ Run Database Migrations
bash
CopyEdit
npx prisma migrate dev --name init
5️⃣ Start the Server
bash
CopyEdit
npm run start
API will be available at http://localhost:3000/
________________________________________
📌 API Documentation
1️⃣ Create Expert-Client Match
•	Endpoint: POST /matches
•	Description: Add a new expert-client match.
•	Request Body (JSON):
json
CopyEdit
{
  "expertId": 1,
  "clientId": 5,
  "specialization": "Software Development",
  "rating": 4.8,
  "availability": "Monday-Friday"
}
•	Response (JSON):
json
CopyEdit
{
  "id": 1,
  "expertId": 1,
  "clientId": 5,
  "specialization": "Software Development",
  "rating": 4.8,
  "availability": "Monday-Friday",
  "createdAt": "2024-03-27T12:00:00.000Z"
}
________________________________________
2️⃣ Get Expert-Client Matches
•	Endpoint: GET /matches
•	Query Parameters (optional):
o	specialization → Filter by specialization
o	rating → Filter by minimum rating
•	Example Request:
sql
CopyEdit
GET /matches?specialization=Software Development&rating=4.5
•	Response (JSON):
json
CopyEdit
[
  {
    "id": 1,
    "expertId": 1,
    "clientId": 5,
    "specialization": "Software Development",
    "rating": 4.8,
    "availability": "Monday-Friday",
    "createdAt": "2024-03-27T12:00:00.000Z"
  }
]
________________________________________
🛠 Prisma Schema Explanation
prisma/schema.prisma
prisma
CopyEdit
model ExpertClientMatch {
  id             Int      @id @default(autoincrement())
  expertId       Int
  clientId       Int
  specialization String
  rating         Float
  availability   String
  createdAt      DateTime @default(now())

  @@unique([expertId, clientId]) // Prevent duplicate matches
}
•	expertId & clientId → Foreign keys to link experts and clients.
•	specialization → The area of expertise.
•	rating → Expert’s rating (1-5 scale).
•	availability → When the expert is available.
•	createdAt → Timestamp for when the match was created.
________________________________________
✅ Technologies Used
•	NestJS → Backend framework
•	Prisma ORM → Database management
•	PostgreSQL → Database
•	TypeScript → Type safety
•	Jest → Testing
________________________________________
🔗 Contributing
1.	Fork the repository
2.	Create a new branch (git checkout -b feature-branch)
3.	Commit your changes (git commit -m "Added feature XYZ")
4.	Push to GitHub (git push origin feature-branch)
5.	Open a Pull Request
________________________________________
📧 Contact
For any issues, contact [your email or GitHub profile link].
________________________________________
You can save this as README.md in the root of your project and push it to GitHub. Let me know if you need any modifications! 🚀

