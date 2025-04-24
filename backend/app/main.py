from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Autoriser le frontend à accéder au backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Port de Vite (frontend)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
def read_root():
    return {"message": "Hello from backend!"}
