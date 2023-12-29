from fastapi import FastAPI,UploadFile,File
from secrets import token_hex
import uvicorn
import os
from imgtotext import convert
import PIL.Image as pi

app = FastAPI()
API_KEY = os.getenv("API_KEY")
@app.get("/") 
async def home() :
    return { "msg" : "welcome to Image to Latex server" }

@app.post("/convert")
async def main(file:UploadFile = File(...)):
    file_ext = file.filename.split(".").pop()
    file_path = f"images/sample.{file_ext}"
    with open(file_path,"wb") as f : 
        content = await file.read()
        f.write(content)
    try:
        response = convert(file_path)
        return { "success" : "true" , "data" : response}
    except:
        return { "success" : "false" }

if __name__ == "__main__" :
    uvicorn.run("main:app" , host="0.0.0.0" , reload=True)