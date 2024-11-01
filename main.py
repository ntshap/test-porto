from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
    static_folder='static',
    template_folder='templates'
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    print("Server starting on http://localhost:5000")
    app.run(debug=True, port=5000)