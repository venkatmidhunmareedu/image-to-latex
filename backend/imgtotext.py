import os
import google.generativeai as genai
import PIL.Image as pi
import dotenv 

dotenv.load_dotenv()

def convert(imgsrc:str):
    img = pi.open(imgsrc)
    genai.configure(api_key=os.getenv('API_KEY'))
    model = genai.GenerativeModel("gemini-pro-vision")
    prompt= ""
    with open("prompt.txt" , "r") as f:
        prompt = f.read()
    response = model.generate_content([prompt,img])
    return response.text






