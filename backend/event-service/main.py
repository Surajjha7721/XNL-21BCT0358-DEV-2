from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Event(BaseModel):
    event_type: str
    data: dict

@app.post("/process-event")
async def process_event(event: Event):
    return {"status": "Event received", "data": event}
