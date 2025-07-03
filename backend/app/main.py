from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(title="MAGI System API")

@app.get("/")
async def root():
    return {"message": "MAGI System Online"}

@app.get("/health")
async def fealth_check():
    return {"status": "healthy", "system": "MAGI"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
