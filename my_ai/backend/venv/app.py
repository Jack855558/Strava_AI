from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

@app.route('/api/test', methods=['GET'])
def test_api():
    return jsonify({"message": "This is a test endpoint."})

if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode
