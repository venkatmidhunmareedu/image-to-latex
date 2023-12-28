from fastapi import FastAPI,UploadFile,File
from secrets import token_hex
import uvicorn

app = FastAPI()

@app.get("/") 
async def home() :
    return { "msg" : "welcome to Image to Latex server" }

@app.post("/upload")
async def main(file:UploadFile = File(...)):
    file_ext = file.filename.split(".").pop()
    file_name = token_hex(10)
    file_path = f"{file_name}.{file_ext}"
    with open(file_path,"wb") as f : 
        content = await file.read()
        f.write(content)
    return { "msg" : "Successfully uploaded the file" }

if __name__ == "__main__" :
    uvicorn.run("main:app" , host="127.0.0.1" , reload=True)