import requests
from src.config import settings

def get_token(username: str, password: str):
    url = f"{settings.KEYCLOAK_URL}/realms/{settings.REALM}/protocol/openid-connect/token"
    data = {
        "client_id": settings.CLIENT_ID,
        "client_secret": settings.CLIENT_SECRET,
        "username": username,
        "password": password,
        "grant_type": "password"
    }
    response = requests.post(url, data=data)
    return response.json().get("access_token") if response.status_code == 200 else None
