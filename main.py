from flask import Flask, request, jsonify, render_template
from PyPDF2 import PdfReader
from flask_cors import CORS
import json


from openai import OpenAI
client = OpenAI(api_key="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")



def gpt_model(content):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    response_format={"type": "json_object"},
    messages= [
    {
      "role": "system",
      "content": "You are a helpful assistant that extracts the assessment marking table."
    },
    {
      "role": "user",
      "content": """Please extract the assessment marking table from the below content and return it as JSON in the following format:{data: [id_value, val1, val2,..], column: [col1, col2, ..]} Note: The data should follow a similar structure with an 'id' field and other columns as specified.", "example": {"data": [{"1", "Quizzes", "10"}, {"2", "Tests", "20"}, {"3", "Lab Assignment", "30"}, {"4", "Final Project",  "40"}, {"5", "Total",  "100"}], "columns": ["id", "Assessment", "Percentage"]}"""    
    }
  ]
    )
    return completion.choices[0].message.content


app = Flask(__name__, template_folder='templates')
CORS(app)  # Enable CORS for all routes

def extract_pdf_text(pdf_file):
    text = ''
    pdf_reader = PdfReader(pdf_file)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    print("test")
    if 'file' not in request.files:
        return 'No file part in the request', 400

    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400

    file.save(file.filename)  # Save the file to the current directory
    pdf_text = extract_pdf_text(file.filename)
    output = json.loads(gpt_model(pdf_text))
    print(output)
    return jsonify(output)



if __name__ == '__main__':
    app.run(debug=True)
