from fastapi import FastAPI
from src.auth_routes import router

app = FastAPI(title="Auth Service")

app.include_router(router)

@app.get("/")
def health_check():
    return {"status": "Auth Service is running"}
