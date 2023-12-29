import os
import google.generativeai as genai
import PIL.Image as pi
import dotenv 

dotenv.load_dotenv()

def convert(imgsrc:str):
    img = pi.open(imgsrc)
    genai.configure(api_key=os.getenv('API_KEY'))
    model = genai.GenerativeModel("gemini-pro-vision")
    response = model.generate_content(["Follow the steps : 1. extract text from the image , 2. extract formuales from the text and return the text, 3.if their are no formuales found in the text then just return only false",img])
    return response.text






