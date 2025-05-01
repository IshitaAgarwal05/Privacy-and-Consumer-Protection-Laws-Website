import google.generativeai as genai
from flask import Flask, request, jsonify

app = Flask(__name__)

# Your API key from Google AI Studio
API_KEY = "AIzaSyCZO4MzJsJDnGdcescaV88sU3q0V3FOEiw"

genai.configure(api_key=API_KEY)

# Initialize the Gemini model
model = genai.GenerativeModel(
    model_name="models/gemini-1.5-pro-latest",
    system_instruction="You are PrivacyGuard, an assistant that helps users with privacy, data protection, cybersecurity threats, and consumer protection laws. Only answer questions strictly related to these topics. If the user asks anything else, politely decline and guide them back to privacy-related concerns."
)


# Function to chat
def chat_with_gemini(prompt):
    response = model.generate_content(contents=[{"role": "user", "parts": [{"text": prompt}]}])
    return response.candidates[0].content.parts[0].text

def chat():
    # print("Chatbot ready! Type 'exit' to quit.\n")
    # while True:
    #     user_input = input("You: ")
    #     if user_input.lower() in ["exit", "quit"]:
    #         break
    #     try:
    #         reply = chat_with_gemini(user_input)
    #         print(f"Gemini: {reply}\n")
    #     except Exception as e:
    #         print(f"Error: {e}\n")
    user_input = request.json.get('message')
    response = model.generate_content(user_input)
    reply = response.text
    return jsonify({'reply': reply})


if __name__ == '__main__':
    app.run(port=5000)