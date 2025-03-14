from pydantic import BaseSettings

class Settings(BaseSettings):
    KEYCLOAK_URL: str = "http://localhost:8080/auth"
    REALM: str = "dev"
    CLIENT_ID: str = "backend-service"
    CLIENT_SECRET: str = "your-client-secret"

settings = Settings()
