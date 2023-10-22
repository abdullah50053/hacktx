import os
from twilio.rest import Client
from twilio.twiml.voice_response import Gather, VoiceResponse
from pymongo import MongoClient

# Twilio Account SID and Auth Token
TWILIO_ACCOUNT_SID = ''
TWILIO_AUTH_TOKEN = ''

# MongoDB connection settings
MONGODB_URI = ''
MONGODB_DATABASE = 'db'
MONGODB_COLLECTION = 'surveys'

# Twilio phone number (purchased from Twilio)
TWILIO_PHONE_NUMBER = '+18443871906'
USER_PHONE_NUMBER = ''

# Initialize Twilio client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Function to initiate the call
def make_call():
    call = twilio_client.calls.create(
        to=USER_PHONE_NUMBER,
        from_=TWILIO_PHONE_NUMBER,
        url='https://9323-2600-387-f-401b-00-1.ngrok-free.app/voice'  # Replace with your publicly accessible webhook URL
    )

# Function to handle user input from the call
def handle_user_response(response):
    # Here, you can process the user's response (in this case, just printing it)
    print("User's response:", response)

    # Connect to MongoDB and store the user's response
    mongo_client = MongoClient(MONGODB_URI)
    db = mongo_client[MONGODB_DATABASE]
    collection = db[MONGODB_COLLECTION]

    data_to_insert = {"user_response": response}
    collection.insert_one(data_to_insert)

# Main Flask application
from flask import Flask, request

app = Flask(__name__)

@app.route('/voice', methods=['GET', 'POST'])
def voice():
    resp = VoiceResponse()

    # Ask the user a question and gather their response
    with resp.gather(numDigits=1, action='/gather') as gather:
        gather.say("Hello! How was your day? Please press any key to respond.")

    return str(resp)

@app.route('/gather', methods=['POST'])
def gather():
    user_response = request.form['Digits']
    handle_user_response(user_response)

    resp = VoiceResponse()
    resp.say("Thank you for your response. Goodbye!")

    return str(resp)

if __name__ == '__main__':
    app.run(debug=True)
